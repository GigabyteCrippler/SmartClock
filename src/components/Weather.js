import React , {Component} from 'react';
//import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      data : null ,
      temperature : null ,
      // locationTimezone : null ,
      // tempretureDegree : null ,
      // tempretureDescription : null ,
    };
   }


    // geolocaton doesnt load fast enough ?



     componentDidMount(){
        this.apiRequest();
        navigator.geolocation.getCurrentPosition(
        position => console.log({
          latitude : position.coords.latitude ,
          longitude : position.coords.longitude,
          position
        })
      )
    }

   apiRequest(){
     const proxy = 'https://cors-anywhere.herokuapp.com/';
     const api = `${proxy}https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/${5.8142835999999996},${0.0746767}`;
     fetch(api)
     .then(response => response.json())
     .then(data => console.log(data))
     .then(result => this.setState({
      // {this.state.temperature} : result.currently.temperature ,
     }))
   }


   //
   //   fetch(api)
   //       .then(response => {
   //           return response.json();
   //       })
   //       .then(data => {
   //           console.log(data);
   //           const { temperature, summary, icon } = data.currently;
   //           const locationTimezone = data.timezone;
   //           const tempretureDegree = temperature;
   //           const tempretureDescription = summary;
   //       })
   // }


   render(){
     console.log('I was triggered during render')
      return (
        <div>
        <p>{this.state.latitude}</p>
        <p>{this.state.longitude}</p>
        <p>{this.state.data}</p>
        </div>
      );
    }
}

export default Weather ;
