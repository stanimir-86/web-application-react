import { createContext } from "react";


export const AuthContext = createContext({

    email: '',
    accesssToken: '',
    isAuthenticated: false,
    chaneAuthState: (authState = {}) => null,
});

