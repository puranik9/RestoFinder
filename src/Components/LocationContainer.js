import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import '../CSS/App.css'

class LocationContainer extends Component {
    constructor(props){
        super(props);

        this.state= {
            value: 'Toronto' //default value
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    };

    onSearchSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.value);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <Container className="location-container">
                    <Row className="location-container_title-row">
                        <h1>Discover The City Gems</h1>
                        <p>Find the highest rated restaurants in your city from local experts.</p>
                    </Row>
                    <Row className="location-container_form">
                        <form>
                            <input type="text" name="city" placeholder="Where are you located?" className="location-container_form_input" onChange={this.handleChange}/>
                            <input type="submit" value="Search" className="location-container_form_button" onClick={ this.onSearchSubmit } />
                        </form>
                    </Row>
                </Container>
            </div>
        );
    }
}



export default LocationContainer;