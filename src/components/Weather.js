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

    navigationFunction(){
      navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude : position.coords.latitude ,
        longitude : position.coords.longitude,
      },console.log(position)))
    }

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
