import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from '../src/util/Yelp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);  
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <h1>YELP-CLONE</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses} /> 
        </div>
      </div>
    );
  }
}

export default App;