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

    const userCargo = user.cargo?.toLowerCase().trim();
    const allowedRolesLower = allowedRoles.map(role => role.toLowerCase().trim());

    console.log(`user.cargo raw: "${user.cargo}" (length: ${user.cargo?.length})`);
    console.log(`allowedRolesLower:`, allowedRolesLower);
    console.log(`userCargo normalized: "${userCargo}"`);
    console.log(`allowedRolesLower.includes(userCargo):`, allowedRolesLower.includes(userCargo))

    if (allowedRoles.length > 0 && !allowedRolesLower.includes(userCargo)) {
        console.log("Cargo do usuário não autorizado:", userCargo);
        return <Navigate to="/login" replace />;
    }

    // if (allowedRoles.length > 0 && !allowedRoles.includes(user.cargo)) {
    //     return <Navigate to="/login" replace />;
    // }

    return children
}