import React from 'react';
import './App.css';
import Weather from './Weather.js';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      Time : new Date().toLocaleString(),
      Date : new Date().toDateString(),
      Hours: new Date().getHours(),
    }
  }

  componentDidMount() {
  this.interval = setInterval(() => this.setState({ Time : new Date().toLocaleString(), }), 1000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}


   render(){
      return (
        <div className = 'foo'>
        <div> <Weather/> </div>
          <div className = 'center'>
            <p className = 'time'>{this.state.Time.substring(10,24)}</p>
            <p className = 'date'>{this.state.Date}</p>
          </div>
        </div>
      );
    }
}

export default App;
