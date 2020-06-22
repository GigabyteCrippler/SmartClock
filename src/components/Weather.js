import React , {Component} from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      // locationTimezone : null ,
      // tempretureDegree : null ,
      // tempretureDescription : null ,
    };
   }


   componentDidMount(){
     navigator.geolocation.getCurrentPosition(
       position => this.setState({
         latitude : position.coords.latitude ,
         longitude : position.coords.longitude,
       })
     )
   }


   // add a setState and set the commented out variables
   // use the latitude and longitude to get current country
   // take it one by one
   //revisit cors-anywhere
   // go back to darkskys website
   // see how the data is displayed ?
   //skycons and darksky have diffrent ways of writing tempreture descriptions
   // are the numbers inside for the long and latitude , should you switch them
   // check how to console.log shows and see if the data youve fetched is working
   //

   apiFunction = () => {
     const proxy = 'https://cors-anywhere.herokuapp.com/';
     const api = `${proxy}https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/${5.662427699999999},${ -0.2137578}`;
     fetch(api)
         .then(response => {
             return response.json();
         })
         .then(data => {
             console.log(data);
             const { temperature, summary, icon } = data.currently;
             const locationTimezone = data.timezone;
             const tempretureDegree = temperature;
             const tempretureDescription = summary;
         })
   }


   render(){
      return (
        <div className="App">
      <p>{this.state.latitude}</p>
        <p>{this.state.longitude}</p>
        </div>
      );
    }
}

export default Weather ;
