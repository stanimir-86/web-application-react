import { createContext } from "react";


export const AuthContext = createContext({
    userId: '',
    email: '',
    accesssToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});

