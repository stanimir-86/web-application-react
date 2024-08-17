import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (sunglassesId, text) => requester.post(BASE_URL, { sunglassesId, text });

const getAll = (sunglassesId) => {
    const params = new URLSearchParams({
        where: `sunglassesId="${sunglassesId}"`,
        load: `author=_ownerId:users`,
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
}






const comentsAPI = {
    create,
    getAll,

}



export default comentsAPI;