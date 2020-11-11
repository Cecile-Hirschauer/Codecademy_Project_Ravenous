import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      businesses: []
    };
    this.SearchYelp = this.SearchYelp.bind(this);
  }

  SearchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar SearchYelp={this.SearchYelp}/ >
          <BusinessList businesses={ this.state.businesses } />
      </div>
    );
  }
};

export default App;
