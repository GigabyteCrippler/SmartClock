import React from 'react';
import './App.css';
import Weather from './Weather.js';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      time : new Date().toLocaleTimeString('en-US'),
      Date : new Date().toDateString(),
      Hours: new Date().getHours(),
      isToggleOn: true,
    }
    
    this.handleClick = this.handleClick.bind(this)
    
  }


// componentDidMount and componentWillUnmount reset the time to update every secound 

componentDidMount() {
  this.interval = setInterval(() => this.setState({ Time : new Date().toLocaleString(), }), 1000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}



// communicates with the <p> element in the render and this.state to switch
// between 24 and 12 hours  
handleClick() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
}




   render(){
    let currentDateTime = new Date();
      return (
        <div className = 'foo'>
        <div> <Weather/> </div>
          <div className = 'center'>
            <p className = 'time' onClick={this.handleClick}>
              {this.state.isToggleOn ? new Date().toLocaleTimeString('en-US') : new Date().getHours() + ":" + currentDateTime.getMinutes() +":" + currentDateTime.getSeconds() }
            </p>
            <p className = 'date'>{this.state.Date}</p>
          </div>
        </div>
      );
    }
}

export default App;
