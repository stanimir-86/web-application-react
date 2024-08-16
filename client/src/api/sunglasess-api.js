
import requester, * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/sunglasses';

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    return result;
    // const sunglasses = Object.values(result);//if I have object in object data format
    // return sunglasses;
}
export const getOne = (sunglassesId) => request.get(`${BASE_URL}/${sunglassesId}`);

export const createSunglasses = (sunglassesData) => request.post(`${BASE_URL}`, sunglassesData);

export const remove = (sunglassesId) => request.del(`${BASE_URL}/${sunglassesId}`);
const sunglassesAPI = {
    getAll,
    getOne,
    createSunglasses,
    remove,
};

export default sunglassesAPI;

