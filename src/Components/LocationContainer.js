import React, {Component} from 'react';
import '../CSS/App.css'

class LocationContainer extends Component {
    constructor(props){
        super(props);

        this.state= {
            value: 'Toronto' //default value
        };

        this.handleInput = this.handleInput.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    };

    onSearchSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.value);
    }

    handleInput(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="location-container">
                <div className="location-container_logo">
                    <h1>RestoFinder</h1>
                </div>
                <div className="location-container_title">
                    <h1>Discover The City Gems</h1>
                    <p>Find the highest rated restaurants in your city from local experts.</p>
                </div>
                <div className="location-container_form">
                    <form>
                        <input type="text" name="city" placeholder="Where are you located?" className="location-container_form_input" onChange={this.handleInput}/>
                        <input type="submit" value="Search" className="location-container_form_button" onClick={ this.onSearchSubmit } />
                    </form>
                </div>
            </div>
        );
    }
}



export default LocationContainer;