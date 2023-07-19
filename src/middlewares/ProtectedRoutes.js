import { Outlet } from "react-router-dom";
import useSession from "../hooks/useSession";
import Login from "../pages/Login";

const ProtectedRoutes = () => {
    const session = useSession();
    return session ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;