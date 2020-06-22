import React from 'react';
import './App.css';
import winter from './images/winter.jpeg';
import Weather from './Weather.js';


class App extends React.Component {
   state = {
     Time : new Date().toLocaleString(),
     Date : new Date().toDateString()
   }

    // get current time
    // get 24 hour time
    // get current date
    // get weather from api
    // check out other app
    // write an switch statement , to change backgorund as time changes
    // add toggle to switch between 24 hour and 12 hour
    // if greater than doesnt work use the 24 hour option
    // can a switch statement be written for if its between this and this make it this
    // set css to push  all elements to the center
    // the writing s should be in white bold
    // time should be the largest
    // look at stylesheet of weather app
    // location should be on top smaller writing next to the svg
    // a diffrent classname for each element rendered
    // try yo keep all styles in the index.css
    // a toggle button should be used to switch between 24 and 12
    // how to keep it constantly refreshing (check clock app )
    // make it refrsh ever second 



    // if(time > 20 :00 pm ){
    //   set the backgorund style to this night
    // }
    // else{
    //   set the background style to day
    // }
    //
    // timeToggleFunction(){
    //   return this.state.toggle = false ? 12 hours display : 24 hour display
    // }
    //  if (togglebutton is clicked ){ then 24 hours } else {12 hours}
    // look at how it is written in clock app




   render(){
      return (
        <div className="App">
          <p>{this.state.Time.substring(10,24)}</p>
          <p>{this.state.Date}</p>
          <Weather/>
        </div>
      );
    }
}


export default App;
