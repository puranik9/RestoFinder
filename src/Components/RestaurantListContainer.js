import React, {Component} from 'react';
import RestaurantTile from './RestaurantTile';
import '../CSS/App.css'

class RestaurantListContainer extends Component {
    constructor(props) {
        super(props);

        this.checkScroll = this.checkScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkScroll);
    }

    checkScroll() {
        if(this.props.showScroll) {
            let currScroll = document.body.scrollTop,
                totalHeight = document.body.scrollHeight,
                visibleHeight = document.body.clientHeight,
                scrollHeight = currScroll + visibleHeight;

            if(totalHeight <= scrollHeight) {
                if(this.props.currentPage !== this.props.numPages) {
                    this.props.onScroll(this.props.currentPage+1);
                }
            }
        }
    }

    render() {
        let tiles = [];

        this.props.results.forEach((restaurant) => {
            tiles.push(
                <RestaurantTile restaurant={restaurant} />
            )
        });

        return (
            <div className="restaurant-list-container">
                {tiles}
            </div>
        )
    }
}

export default RestaurantListContainer;