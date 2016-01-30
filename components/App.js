var React = require('react');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');

var App = React.createClass({
	getInitialState(){
		// Extract the favorite locations from local storage
		var favorites = [];
		if(localStorage.favorites) {
			favorites = JSON.parse(localStorage.favorites);
		}

		//Default state to start with, paris for this example
		return {
			favorites: favorites,
			currentAddress: 'Paris, France',
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},

	render() {
		return(
			<div>
				<h1>Your Google Maps Locations</h1>
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
				<CurrentLocation address={this.state.currentAddress} />
			</div>
		)

	}
		
});

module.exports = App;












