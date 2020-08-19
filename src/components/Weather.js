import React from 'react';
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
     this.apiRequest = this.apiRequest.bind(this);
   }


     componentDidMount(){
       this.navigationFunction();
    }

    componentDidUpdate(){
      this.apiRequest()
      this.skyconsFunction();
    }

    // gets the current location when the client allows geolocation on their browser
    // and sets the states to the current position of the client  
    navigationFunction(){
      navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude : position.coords.latitude ,
        longitude : position.coords.longitude,
      },console.log(position)))
    }



    // proxy being put before the darksky api is to prevent a CORS error 
    // the information from the api is taken and changed into  json format
    // the data from the api is then used to update the states
    apiRequest(){
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/8d2330fcf8903ed8a4fd1f337ec77849/${this.state.longitude},${this.state.latitude}`;
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


      // function from skycons.com(https://darkskyapp.github.io/skycons/) for setting up SVGS
      // .replace method is used because data from the api and from skycons are 
      // written diffrently underscore instead of a dash and upper case instead of lower case
      // using the methods made the informatin from both sources match
    skyconsFunction(){
      const skycons = new Skycons({ color: "white" });
      const currentIcon = (this.state.icon).replace(/-/g, "_").toUpperCase() ;
      skycons.play();
      skycons.set(this.ref.current, Skycons[currentIcon]);
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
        <p>{this.state.temperature} °F </p>
        <p>{this.state.summary}</p>
        </div>
      );
    }
}

export default Weather ;
