import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useSession = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    console.log(session)
    const decodedSession = jwt_decode(session);
    console.log(decodedSession);
    const navigate = useNavigate;

    useEffect(() => {
        if (!session) {
            navigate("/", {replace: true});
        }
    }, [navigate, session]);
    return session;
};

export default useSession;