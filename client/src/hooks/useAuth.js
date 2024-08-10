import { useContext } from "react";

import { login } from "../api/auth-api.js";
import { AuthContext } from "../contexts/AuthContext.js";

export const useLogin = () => {
    const { chaneAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {

        const result = await login(email, password);
        chaneAuthState(result);

    }
    return loginHandler;
};