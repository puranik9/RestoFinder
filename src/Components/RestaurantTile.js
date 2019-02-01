import React, {Component} from 'react';
import DollarSignRating from "./DollarSignRating";
import '../CSS/App.css'

class RestaurantTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="restaurant-tile">
                <div className="restaurant-tile_upper">
                    <div className="restaurant-tile_name">
                        <h1>{this.props.restaurant.name}</h1>
                        <DollarSignRating price={this.props.restaurant.price}/>
                    </div>
                    <img className="restaurant-tile_img" src={this.props.restaurant.image_url} alt="Restaurant Image" />
                </div>

                <div className="restaurant-tile_address">
                    <p><b>Address: </b>{this.props.restaurant.address + ", " + this.props.restaurant.city + ", " + this.props.restaurant.state + ", " + this.props.restaurant.postal_code}</p>
                </div>
                <div className="restaurant-tile_phone">
                    <p><b>Phone:   </b>{this.props.restaurant.phone}</p>
                </div>
                <div className="restaurant-tile_reservations">
                    <button><a href={this.props.restaurant.reserve_url}>Reserve a table</a></button>
                </div>
            </div>
        )
    }
}

export default RestaurantTile;