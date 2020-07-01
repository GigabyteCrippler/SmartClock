import React , {Component} from 'react';
import './index.css';
const Skycons = require("skycons")(window);


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      latitude: null,
      longitude: null,
      temperature : null ,
      summary : null ,
      timezone : null ,
      icon : 'CLOUDY' ,
    };
     this.skyconsFunction = this.skyconsFunction.bind(this);
   }


     componentDidMount(){
        this.apiRequest();
        this.navigationFunction()
    }

    componentDidUpdate(){
        this.skyconsFunction();
    }


// longitude and latitude should be automatic
    navigationFunction(){
      navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude : position.coords.latitude ,
        longitude : position.coords.longitude,
      }))
    }


    skyconsFunction(){
      const skycons = new Skycons({ color: "white" });
      const currentIcon = (this.state.icon).replace(/-/g, "_").toUpperCase() ;
      skycons.play();
      skycons.set(this.ref.current, Skycons[currentIcon]);
    }



   apiRequest(){
     const proxy = 'https://cors-anywhere.herokuapp.com/';
     const api = `${proxy}https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/${5.8142835999999996},${0.0746767}`;
     fetch(api)
     .then(response => response.json())
     .then(data => this.setState({
       temperature : data.currently.temperature,
       summary : data.currently.summary,
       icon : data.currently.icon,
       timezone : data.timezone,
     },console.log(data)
      ))
   }


   render(){
     const mystyle = {
      position: 'relative',
      top: '40px',
    left: '-250px',
     color: "white",
     padding: "10px",
     fontFamily: "Krona One"

   };
      return (
        <div style={mystyle} >
        <div>  <canvas ref={this.ref} width="128" height="128" /> </div>
        <p>{this.state.timezone}</p>
        <p>{this.state.latitude}</p>
        <p>{this.state.longitude}</p>
        <p>{this.state.data}</p>
        <p>{this.state.temperature}</p>
        <p>{this.state.summary}</p>
        </div>
      );
    }
}

export default Weather ;
