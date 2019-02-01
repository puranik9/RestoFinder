import React, {Component} from 'react';
import '../CSS/App.css'

class DollarSignRating extends Component {
    constructor(props) {
        super(props);

        this.maxDollars = 4;
    }

    render() {
        let dollarSignCount = '';
        let fadedDollars = '';

        for(var i = 0; i < this.props.price; i++) {
            dollarSignCount = dollarSignCount.concat('$');
        }

        for(var i = 0; i < (this.maxDollars - this.props.price); i++) {
            fadedDollars = fadedDollars.concat('$');
        }

        return (
            <div className="restaurant-dollar-sign-rating">
                <span className="highlight">{ dollarSignCount }</span>
                <span className="no-highlight">{ fadedDollars }</span>
            </div>
        )
    }

}

export default DollarSignRating;