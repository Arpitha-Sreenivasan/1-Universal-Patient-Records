import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Logout(props) {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("Role");
        localStorage.removeItem("Aadhaar_Number");
        props.setLogIn(false);
        navigate('/');
    });
    return (
        null
    );
}