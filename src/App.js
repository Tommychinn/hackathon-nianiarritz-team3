import React from 'react';
import RandomCards from './components/RandomCards';

import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artPosts: [],
    };
    this.getArt = this.getArt.bind(this);
  }

  componentDidMount() {
    this.getArt();
  }

  getArt() {
    axios
      .get(
        'https://collectionapi.metmuseum.org/public/collection/v1/objects/465'
      )
      .then((res) =>
        this.setState({ artPosts: res.data }, () =>
          console.log(this.state.artPosts)
        )
      );
  }

  render() {
    return (
      <div className='App'>
        {this.state.artPosts.objectID}
        <RandomCards />
      </div>
    );
  }
}

export default App;
