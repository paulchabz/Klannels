import React from "react";
import "./HeaderComponent-styles.scss";
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../Assets/original.svg"
import { auth } from "../Firebase/Firebase.utils";

export const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
         <Logo className="logo" />
        </Link>
        <div className="options">
            <Link  className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            { currentUser ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div> : <Link className="option" to="/signIn">Sign In</Link>}
        </div>
    </div>
)