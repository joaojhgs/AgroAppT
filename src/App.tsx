import React from 'react';
import Home from './pages/home';
import Search from './pages/search';
// import Localization from './pages/localization'
import "antd/dist/antd.css";
import {BrowserRouter as Router, Route, Switch} from '../node_modules/react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="AgroAppT" component={Home}/>
        <Route path="/search" component={Search}/>
      </Router>
    </div>
  );
}

export default App;
