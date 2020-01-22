import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import HomeContainer from './HomeContainer';
import StandingsContainer from './StandingsContainer';
import StatsContainer from './StatsContainer';
import AboutContainer from './AboutContainer';
import SocialMediaContainer from './SocialMediaContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Router>
        <NavigationBar />
        <Route exact={true} path='/' component={HomeContainer}/>
        <Route exact={true} path='/Standings' component={StandingsContainer}/>
        <Route exact={true} path='/Stats' component={StatsContainer}/>
        <Route exact={true} path='/About' component={AboutContainer}/>
        <Route exact={true} path='/Social_Media' component={SocialMediaContainer}/>
      </Router>
    )
  }
}

export default App;