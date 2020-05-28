import React from "react";
import "./button-styles.scss";

export const CustomButton = ({children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
)