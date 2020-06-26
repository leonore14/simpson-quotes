import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson : null
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          image : data[0].image,
          quote : data[0].quote,
          character : data[0].character,         
        });
    });
  }

  render() {
    return (
      <>
      <h1>Simpsons' Quotes</h1>
      <div className="App">
        <QuoteCard image={this.state.image} quote={this.state.quote} character={this.state.character} />
        <button type="button" onClick={this.getSimpson}>Get another Simpsons' quote !</button>
      </div>
      </>
    );
  }
}

export default App;
