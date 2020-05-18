import React from "react";
import { CollectionItem } from "../Collection-Item/collection-item";
import "./Preview-Collections-styles.scss";

export const  PreviewCollections = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(({id, ...itemProps}) => (<CollectionItem key={id} {...itemProps}/>))}
        </div>

    </div>
)