import React , {Component} from 'react';
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
      icon : null ,
    };
     this.skyconsFunction = this.skyconsFunction.bind(this);
   }

     componentDidMount(){
        this.apiRequest();
        navigator.geolocation.getCurrentPosition(
        position => this.setState({
          latitude : position.coords.latitude ,
          longitude : position.coords.longitude,
        })
      )
    }

    componentDidUpdate(){
        this.skyconsFunction();
    }



    skyconsFunction(props){
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
      return (
        <div>
        <div>  <canvas ref={this.ref} width="128" height="128" /> </div>
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
