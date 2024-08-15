async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };
    // const options = {};
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`;
        // options.headers = {
        //     ...options.headers,
        //     'X-Authorization': accessToken,
        // }
    }


    if (method !== "GET") {
        options.method = method;
    }
    if (data) {
        // options.headers = {
        //     ...options.headers,
        //     'Content-Type': 'application/json'
        // };

        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error response from server:", errorData);
            throw new Error(errorData.message || 'Something went wrong');
        }
        return await response.json();
    } catch (error) {
        console.error('Network or server error:', error);
        throw error;
    }
};

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del,
}