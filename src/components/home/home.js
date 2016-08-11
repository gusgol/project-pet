import React, { Component } from 'react';
import HomeHeader from './header';
import HomeBanner from './banner';
import '../../assets/css/Main.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HomeHeader />
        <HomeBanner />
      </div>
    );
  }
}

export default Home;
