import React from "react";
import SignIn from "../Sign-In/Sign-In";
import SignUp from "../SignUp-Forms/SignUp-Form";
import "./SignComponent-styles.scss";

export const SignInSignOut = () => (
    <div className="signInsignOut">
        <SignIn />
        <SignUp />
    </div>
)