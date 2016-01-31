var React = require('react');
var Map = require('./Map');
var Search = require('./Search');
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

	searchForAddress(address) {
		var self = this;

		// We will use GMaps' geocode functionality,
		// which is built on top of the Google Maps API
		GMaps.geocode({
					address: address,
					callback: function(results, status) {

						if (status !== 'OK') return;

						var latlng = results[0].geometry.location;

						self.setState({
							currentAddress: results[0].formatted_address,
							mapCoordinates: {
								lat: latlng.lat(),
								lng: latlng.lng()
							}
						});

					}
				});
	},

	render() {
		return(
			<div>
				<h1>Your Google Maps Locations</h1>
				<Search onSearch={this.searchForAddress} />
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
				<CurrentLocation address={this.state.currentAddress} />
			</div>
		)

	}
		
});

module.exports = App;












