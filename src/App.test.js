import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import LocationContainer from './Components/LocationContainer';
import RestaurantListContainer from "./Components/RestaurantListContainer";

it('App renders without crashing', () => {
    const App = document.createElement('App');
    ReactDOM.render('root', App);
    ReactDOM.unmountComponentAtNode(App);
});

it('LocationContainer renders without crashing', () => {
  const LocationContainer = document.createElement('LocationContainer');
  ReactDOM.render(<App />, LocationContainer);
  ReactDOM.unmountComponentAtNode(LocationContainer);
});

it('RestaurantListContainer renders without crashing', () => {
  const RestaurantListContainer = document.createElement('RestaurantListContainer');
  ReactDOM.render(<App />, RestaurantListContainer);
  ReactDOM.unmountComponentAtNode(RestaurantListContainer);
});
