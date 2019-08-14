import React, { Component } from "react"; 
import './App.css'; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



<<<<<<< HEAD
const url = new URL('https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice');

let queryParams = {
  bedrooms: '3',
  bathrooms: '2',
  propertyType: 'Single Family',
  squareFootage: '1600',
  compCount: '5',
  address: '6425 Boaz Lane Dallas TX 75205',
};


=======
>>>>>>> 6ee066381424463dc041143c19eb5a2c35a38784
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
      this.handleSubmit = this.handleSubmit.bind(this);
      

      // TO DO:   
      //Put Buttons here

        this.state = {
        apartments: [],
<<<<<<< HEAD
        address: []
      };
    }
    
    handleSubmit = event => {
    // event.preventDefault();
    const data = event.target.value;
    console.log("The user input: " + data);
    queryParams.address = data; 
   
      }

    componentDidMount() {
      url.search = new URLSearchParams(queryParams);
      
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
=======

        queryParams: {
            bedrooms: '',
            bathrooms: '2',
            propertyType: 'Single Family',
            squareFootage: '', // 
            compCount: '5',
            address: '6425 Boaz Lane Dallas TX 75205',
        }}



    }

   



    componentDidMount() {
        
        const url = new URL('https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice');
        url.search = new URLSearchParams(this.state.queryParams);
        
        fetch(url, {
            headers: {
                'x-rapidapi-host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
                'x-rapidapi-key': 'xjePNjcZoBmshIkdUz40QcJfpWSwp1cIRSWjsnxVLZj2JW7Y3X',
            },
>>>>>>> 6ee066381424463dc041143c19eb5a2c35a38784
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
<<<<<<< HEAD
        <div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="workaddress">Work Address: </label>
          <input className="search"
              type= 'text'
              placeholder='6425 Boaz Lane Dallas TX 75205'
              name="workaddress"
              ref={(input) => this.input = input}
              />
              <button className="searchButton">Search</button>
          </form>
=======
        
        <div>
       
>>>>>>> 6ee066381424463dc041143c19eb5a2c35a38784

          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: 32.845381, lng: -96.783022}}
          >
            {this.displayMarkers()}
          </Map>
<<<<<<< HEAD
          
          
          
          </div> 

=======
        </div>
>>>>>>> 6ee066381424463dc041143c19eb5a2c35a38784
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB9MfOgxe8X4br2Y7F4hrTaLH5WjirWI4E'
  })(MapContainer);
