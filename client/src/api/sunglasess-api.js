
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

export const update = (sunglassesId, sunglassesData) => request.put(`${BASE_URL}/${sunglassesId}`, sunglassesData)

export const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    });
    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);
    const latestSunglasses = Object.values(result);

    return latestSunglasses
}
const sunglassesAPI = {
    getAll,
    getOne,
    createSunglasses,
    remove,
    update,
    getLatest,
};

export default sunglassesAPI;

