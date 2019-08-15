import React, { Component } from "react"; 
import './App.css'; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const url = new URL('https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice');

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
      

      // TO DO:   
      //Put Buttons here

        this.state = {
        apartments: [],
        queryParams: {
          bedrooms: '3',
          bathrooms: '2',
          propertyType: 'Single Family',
          squareFootage: '1600',
          compCount: '5',
          address: '',
        }
      }

     this.handleChange = this.handleChange.bind(this);
    //  console.log("CHECK STATE",this.state.queryParams.address);
    }
    
    handleChange = event => {
      event.preventDefault(); 
      const { queryParams } = this.state;
      queryParams.address = event.target.value ;
    this.setState({
      queryParams
    })
    this.componentDidMount();
    
    //console.log(this.state.address);
    // const data = event.target.value;
    // console.log("The user input: " + data);
  }
  handleSubmit = event => {
    event.preventDefault(); 
      this.componentDidMount();
      // this.componentDidUpdate();  
  }

    // componentDidUpdate() {
    //   this.componentDidMount();
    // }
  
    componentDidMount() {
      const { queryParams } = this.state;
      url.search = new URLSearchParams(queryParams);
      
      fetch(url, {
        headers: {
            'x-rapidapi-host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
            'x-rapidapi-key': 'xjePNjcZoBmshIkdUz40QcJfpWSwp1cIRSWjsnxVLZj2JW7Y3X',
        },
      })
        .then(res => res.json())
        .then(res => {
            // SET STATE HERE
            console.log(res.listings)
            this.setState({ 
                apartments:res.listings,
            }) 
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
        <div>

        <form onSubmit={this.handleSubmit}>
          <label>Work Address: </label>
          <input className="search"
              type= 'text'
              defaultValue={this.state.address} 
              onClick={this.handleChange}/>
              <input type="submit" value="Submit"  />
          </form>

          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: 32.845381, lng: -96.783022}}
          >
            {this.displayMarkers()}
          </Map>
          
          
          
          </div> 

      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB9MfOgxe8X4br2Y7F4hrTaLH5WjirWI4E'
  })(MapContainer);
