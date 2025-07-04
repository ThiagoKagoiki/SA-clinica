import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


export const PrivateRoute = ({ children, allowedRoles = [] }) => {
    const { user } = useAuth()

    console.log("PrivateRoute: user =", user);
    console.log("PrivateRoute: allowedRoles =", allowedRoles);

    // if (user === undefined) {
    //     return null; // ou um loader
    // }

    if (!user) {
        return <Navigate to={"/login"} replace />
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user.cargo)) {
        return <Navigate to="/login" replace />;
    }

    return children
}