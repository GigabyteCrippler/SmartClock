import React , {Component} from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      data : null ,
      // locationTimezone : null ,
      // tempretureDegree : null ,
      // tempretureDescription : null ,
    };
   }


    // geolocaton doesnt load fast enough ?



     componentDidMount(){
        // this.apiRequest();
        navigator.geolocation.getCurrentPosition(
        position => this.setState({
          latitude : position.coords.latitude ,
          longitude : position.coords.longitude,
        })
      )
    }

   // apiRequest(){
   //   fetch('https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/5.662427699999999,-0.2137578')
   //       .then(({ results }) => this.setState({ data: results }));
   // }

   async getDataAxios(){
    const response =
      await axios.get("https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/5.662427699999999,-0.2137578")
      .then(({ results }) => this.setState({ data: results }));
  }


//  console.log(response.data)
   //'https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/5.662427699999999,-0.2137578'
   // add a setState and set the commented out variables
   // use the latitude and longitude to get current country
   // take it one by one
   // revisit cors-anywhere
   // go back to darkskys website
   // see how the data is displayed ?
   // skycons and darksky have diffrent ways of writing tempreture descriptions
   // are the numbers inside for the long and latitude , should you switch them
   // check how to console.log shows and see if the data youve fetched is working
   //



   // getWeather() {
   //     $.getJSON('https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/${5.6131584000000005},${-0.212992}')
   //       .then(({ results }) => console.log({ results }));
   //   }

   // apiFunction = () => {
   //
    // get `https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/${5.662427699999999},${ -0.2137578}`
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
