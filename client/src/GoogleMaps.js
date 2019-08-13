import React, { Component } from "react"; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const url = new URL('https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice');

let queryParams = {
    bedrooms: '3',
    bathrooms: '2',
    propertyType: 'Single Family',
    squareFootage: '1600',
    compCount: '5',
    address: '6425 Boaz Lane Dallas TX 75205',
};

url.search = new URLSearchParams(queryParams);




const mapStyles = {
    width: '80%',
    height: '100%',
    position: 'relative',
    top: '150px',
    left: '150px',
    
  };

export class MapContainer extends Component {
    constructor(props) {
      super(props);



        this.state = {
        apartments: [],
      };
    }



    componentDidMount() {
        fetch(url, {
            headers: {
                'x-rapidapi-host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
                'x-rapidapi-key': 'xjePNjcZoBmshIkdUz40QcJfpWSwp1cIRSWjsnxVLZj2JW7Y3X',
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                // SET STATE HERE
                this.setState({ 
                    apartments:res.listings,
                });
            })
            .catch(err => console.log(err));
    }






  
    displayMarkers = () => {
      return this.state.apartments.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

    render() {
      return (
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: 32.845381, lng: -96.783022}}
          >
            {this.displayMarkers()}
          </Map>

      );
    }
  }



export default GoogleApiWrapper({
    apiKey: 'AIzaSyB9MfOgxe8X4br2Y7F4hrTaLH5WjirWI4E'
  })(MapContainer);
