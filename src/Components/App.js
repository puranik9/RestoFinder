import React, { Component } from 'react';
import LocationContainer from './LocationContainer';
import RestaurantListContainer from "./RestaurantListContainer";
import logo from '../logo.svg';
import '../CSS/App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Toronto',
      restaurants: [],
      showScroll: true,
      pagination: {
        total_entries: 0,
        per_page: 0,
        current_page: 1
      }
    };

    this.baseUrl = `http://opentable.herokuapp.com/api/restaurants?`;

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.toggleScroll = this.toggleScroll.bind(this);
    this.onPageTurn = this.onPageTurn.bind(this);
    this.getResults = this.getResults.bind(this);
    this.calculateNumPages = this.calculateNumPages.bind(this);

    this.onSearchSubmit('Toronto');
  }

  calculateNumPages() {
    let numPages = Math.round(this.state.pagination.total_entries / this.state.pagination.per_page);

    if((this.state.pagination.total_entries % this.state.pagination.per_page) > 0) {
      numPages++;
    }

    return numPages;
  }

  onSearchSubmit(value) {
    this.url = this.baseUrl + `city=${value}`;

    this.getResults(this.url);
  }

  toggleScroll() {
    fetch(this.url)
        .then(data => data.json())
        .then((data) => {
          this.setState((prev, props) => ({
              showScroll: !prev.showScroll,
              restaurants: data.restaurants
          }))
        });
    console.log("toggled");
  }

  onPageTurn(pageNum, toggle) {
    let pageTurnUrl = `${this.url}&page=${pageNum}`;

    fetch(pageTurnUrl)
        .then(data => data.json())
        .then((data) => {
          this.setState((prev, props) => ({
              restaurants: prev.showScroll ? prev.restaurants.concat(data.restaurants) : data.restaurants,
              pagination: {
                current_page: data.current_page
              }
          }));
        })
  }

  getResults(url) {
    fetch(url)
        .then(data => data.json())
        .then((data) => {
          this.setState((prev, props) => ({
              restaurants: data.restaurants,
              pagination: {
                total_entries: data.total_entries,
                per_page: data.per_page,
                current_page: data.current_page
              }
          }));
        });
  }

  render() {
    let numPages = this.calculateNumPages();

    return (
      <div className="App">
        <LocationContainer onSearchSubmit={this.onSearchSubmit}/>
        <RestaurantListContainer results={ this.state.restaurants }
                                 onScroll={this.onPageTurn}
                                 currentPage={this.state.pagination.current_page}
                                 numPages={numPages}
                                 showScroll={this.state.showScroll}
        />
      </div>
    );
  }
}

export default App;
