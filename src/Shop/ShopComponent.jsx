import React from "react";
import SHOP_DATA from "./Shop-Data"
import {PreviewCollections} from "../Preview-Collections/Preview-Collections"

class ShopPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
   render () {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherCollections}) => (
                    <PreviewCollections key={id} {...otherCollections}/>
                ))}


            </div>
        )
   }
}

export default ShopPage;