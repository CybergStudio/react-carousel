import React from 'react'
import './index.css'

import Item from './Item'
import InfoItem from './InfoItem'


const Items = [
    {
        'index': 0,
        'src': 'startup.jpg'
    },
    {
        'index': 1,
        'src': 'coding-computer.jpg'
    },
    {
        'index': 2,
        'src': 'computer-showing.jpg'
    }
]
const InfoItems = [
    {
        'index': 0,
        'title': 'Title 1'
    },
    {
        'index': 1,
        'title': 'Title 2'
    },
    {
        'index': 2,
        'title': 'Title 3'
    }
]
const eachItemInterval = 5000

class Carousel extends React.Component {
    progressInterval = 0
    c = 0

    constructor(props) {
        super(props)

        this.state = {
            allItems: Items,
            currentItem: Items[0],
            allInfoItems: InfoItems,
            currentInfoItem: InfoItems[0]
        }
    }

    componentDidMount() {
        this.clearProgress()
        this.autoSlider()
    }

    nextItem = () => {
        const newIndex = this.state.currentItem.index + 1
        const checkedValue = Items[newIndex] ? newIndex : 0

        this.setState({
            currentItem: Items[checkedValue]
        })

        this.clearProgress()
        this.clearIntervals()
    }

    prevItem = () => {
        const newIndex = this.state.currentItem.index - 1
        const checkedValue = Items[newIndex] ? newIndex : Items.length - 1

        this.setState({
            currentItem: Items[checkedValue]
        })

        this.clearProgress()
        this.clearIntervals()
    }

    autoSlider = () => {
        this.autoSliderInterval = setInterval(() => {
            this.nextItem()
        }, eachItemInterval)
    }

    clearProgress = () => {
        document.querySelector('.bar').style.width = '0%'

        this.progressInterval = setInterval(() => {
            this.c += (0.1 * 2.2)
            document.querySelector('.bar').style.width = `${this.c}%`
        }, 10)
    }

    clearIntervals = () => {
        clearInterval(this.progressInterval)
        this.c = 0
    }

    render() {
        return (
            <div className='carousel-container'>
                <div className="items-container">
                    <div className="images-container">
                        <div className="images-wrapper" style={{
                            'transform': `translateX(
                                -${this.state.currentItem.index * 100}%
                            )`
                        }}>
                            {
                                this.state.allItems.map(
                                    item => <Item key={item.index} data={item} />
                                )
                            }
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="info-wrapper" style={{
                            'transform': `translateY(
                                -${this.state.currentItem.index * 100}%
                            )`
                        }}>
                            {
                                this.state.allInfoItems.map(
                                    infoItem => <InfoItem key={infoItem.index} data={infoItem} />
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="carousel-menu-container">
                    <div className="progress">
                        <div className="bar"></div>
                    </div>

                    <div className="buttons">
                        <button onClick={() => this.prevItem()}>
                            Prev
                        </button>

                        <button onClick={() => this.nextItem()}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
