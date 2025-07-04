import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


export const PrivateRoute = ({children}) => {
    const {user} = useAuth()

    if(!user){
        return <Navigate to={"/login"} replace/>
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user.cargo)) {
        return <Navigate to="/login" replace />;
    }

    return children
}