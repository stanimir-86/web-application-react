import { useContext } from "react";

import { login, register } from "../api/auth-api.js";
import { AuthContext } from "../contexts/AuthContext.js";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {

        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    }
    return loginHandler;
};

export const useRegister = () => {

    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password, repass) => {
        // const result = await register(email, password,repass);
        const { password: _, ...authData } = await register(email, password, repass);

        changeAuthState(authData);
        // changeAuthState(result);

        return authData;
    }

    return registerHandler;

};