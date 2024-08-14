import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/sunglasses';
const buildUrl = (sunglassesId) => `${BASE_URL}/${sunglassesId}/comments`;

const create = async (sunglassesId, username, text) => requester.post(buildUrl(sunglassesId), { username, text });

const getAll = async (sunglassesId) => {
    const result = await requester.get(buildUrl(sunglassesId));
    const comments = Object.values(result);
    return comments;

}


const comentsAPI = {
    create,
    getAll,
    
}



export default comentsAPI;