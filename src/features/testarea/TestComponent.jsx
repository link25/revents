import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { incrementcounter, decrementcounter } from "./testActions";
import GoogleMapReact from 'google-map-react';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementcounter,
  decrementcounter
};

const Marker = () => <Icon name='marker' size='big' color='red'/>

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  state = {
    adress: "",
    scriptLoaded: false
  };
  handleScriptLoad = () => {
    this.setState({scriptLoaded: true})
  }
  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  state = {};

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    const { incrementcounter, decrementcounter } = this.props;
    return (
      <div>
        {/* <Script
        url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAACtLvMqB8zNHgfHljHUOFm7Cv7_wwktU&libraries=places'
        onLoad={this.handleScriptLoad}
        /> */}
        <h1> Test Area</h1>
        <h3>The answer is: {this.props.data}</h3>
        <Button onClick={incrementcounter} color="green" content="Increment" />
        <Button onClick={decrementcounter} color="red" content="Decrement" />
        <br/>
        <br/>
          <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && 
            <PlacesAutocomplete inputProps={inputProps} />}
            <button type="submit">Submit</button>
          </form>
        
          <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAACtLvMqB8zNHgfHljHUOFm7Cv7_wwktU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>

    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
