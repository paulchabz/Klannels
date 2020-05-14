import React from "react";
import {MenuItem} from "../Menu-item/MenuItemComponent"
import "./Directory-styles.scss"

class Directory extends React.Component {
    constructor () {
        super();
        this.state = {
            section: [

            {
                title: 'HATS',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'JACKETS',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'TRAINERS',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'WOMEN',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'MEN',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: '',

            }

            ]
        }
    }
    render () {
        /*
      return (
          <div className="directory-menu">
              {this.state.section.map(sections => (<MenuItem key={sections.id} title={sections.title} imageUrl={sections.imageUrl}/>))}
          </div>
      )
      *
         */
        return (
            <div className="directory-menu">
                {this.state.section.map(({title, imageUrl, id, size}) =>(<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>))}
            </div>
        )
    }

}

export default Directory;