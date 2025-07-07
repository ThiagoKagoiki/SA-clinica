import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


export const PrivateRoute = ({ children, allowedRoles = [] }) => {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to={"/login"} replace />
    }

    const userCargo = user.cargo?.toLowerCase().trim();
    const allowedRolesLower = allowedRoles.map(role => role.toLowerCase().trim());

    if (allowedRoles.length > 0 && !allowedRolesLower.includes(userCargo)) {
        return <Navigate to="/login" replace />;
    }

    return children
}