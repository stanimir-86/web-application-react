import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/auth';



export const login = (email, password) => requester.post(`${BASE_URL}/login`, { email, password });


export const register = (email, password, repass) => requester.post(`${BASE_URL}/register`, { email, password, repass });
