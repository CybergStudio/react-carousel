import React from 'react'
import './index.css'

class Item extends React.Component {
    render() {
        const imageLoaded = require(`../../assets/images/${this.props.data.src}`)

        return (
            <div style={{ backgroundImage: "url(" + imageLoaded + ")" }} className="carousel-item" />
        )
    }
}

export default Item
