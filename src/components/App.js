import React from 'react';
import './App.css';
import winter from './images/winter.jpeg';
import Weather from './Weather.js';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      Time : new Date().toLocaleString(),
      Date : new Date().toDateString(),
      Hours: new Date().getHours(),
      TwentyFourHours: false ,
    }
      // this.toggleHours = this.toggleHours.bind(this);
  }






   render(){
      return (
        <div className="trial">
          <div className = 'center'>
            <p className = 'time'>{this.state.Time.substring(10,24)}</p>
            <p className = 'date'>{this.state.Date}</p>
            <Weather/>
            <p>{this.state.Hours}</p>
          </div>
        </div>
      );
    }
}

export default App;



//weather
// get weather from api
// get 24 hour time
//   toggleHours() {
//     this.setState((prevState) => ({ TwentyFourHours: !prevState.TwentyFourHours }));
// }

// App.js
// write an switch statement , to change backgorund as time changes
// add toggle to switch between 24 hour and 12 hour


// ideas
// if greater than doesnt work use the 24 hour option
// can a switch statement be written for if its between this and this make it this
// a toggle button should be used to switch between 24 and 12
// how to keep it constantly refreshing (check clock app )
// make it refrsh ever second


// need to change multiple states simultaneously


// trial code
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


// css

// try yo keep all styles in the index.css
// var d = new Date().gethours();
// // var n = d.getTime();
//  if(this.state.hours < 20 ) {
// day should be applied for the background
// // see how to apply styles inline
// // set the background image to this ;                 ;
//  } else {
// night should be applied for the background ;  ;
//  }






// used to refresh time every second loo into other software
//      startTime() {
//        this.timer = setInterval(() => {
//          this.setState(() => ({ Date:new Date().toDateString(),
//          Time :  new Date().toLocaleString()}));
//      }, 1000);
//  }
