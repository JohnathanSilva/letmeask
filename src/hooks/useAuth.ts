import { useContext } from "react";
import { AuthContext } from "../contexs/AuthContext";

export function useAuth() {
    const value = useContext(AuthContext);

    return value;
}