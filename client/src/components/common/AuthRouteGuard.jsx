import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.jsx"

export default function AuthRouteGuard({ children }) {

    const { isAuthenticated } = useAuthContext();
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return (
        <>{children}</>
    )
}