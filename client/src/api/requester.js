async function requester(method, url, data) {

    const options = {};

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${accessToken}`,
        }
    }

    if (method !== "GET") {
        options.method = method;
    }
    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        };


        options.body = JSON.stringify(data);
    }

    // console.log("Sending request with options:", options);
    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
        console.log("Error response from server:", result);
        throw result;

    }

    return result;


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