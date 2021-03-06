import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItemStyles.scss";

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div  className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
/*
* style={{backgroundImage: `url(${imageUrl})`}}
* <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>*/
export default withRouter(MenuItem);