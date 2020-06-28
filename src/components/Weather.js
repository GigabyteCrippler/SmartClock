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
      icon : null
    };
   }





     componentDidMount(){
        this.skyconsFunction();
        this.apiRequest();
        navigator.geolocation.getCurrentPosition(
        position => this.setState({
          latitude : position.coords.latitude ,
          longitude : position.coords.longitude,
        })
      )
    }


    // function setIcons(icon, iconID) {
    //     const skycons = new Skycons({ "color": "white" })
    //     /*skycons and darksky have diffrent ways of writing tempreture descriptions
    //      the code below is used to make them the same */
    //     const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    //     skycons.play();
    //     return skycons.set(iconID, Skycons[currentIcon]);
    // }


    skyconsFunction(){
      const skycons = new Skycons({ color: "white" });
      skycons.add(this.ref.current, Skycons.PARTLY_CLOUDY_DAY);
      //const currentIcon = icon.replace(/-/g, "_").toUpperCase();
      skycons.play();
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
     console.log('I was triggered during render')
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
