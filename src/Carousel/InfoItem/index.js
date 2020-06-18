import React from 'react'
import './index.css'

class InfoItem extends React.Component {
    render() {
        return (
            <div className="info-item">
                <h1>{this.props.data.title}</h1>
            </div>
        )
    }
}

export default InfoItem
