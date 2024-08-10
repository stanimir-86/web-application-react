import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/auth';

export const login = async (email, password) => {
    const authData = await requester.post(`${BASE_URL}/login`, { email, password });

    return authData;
};