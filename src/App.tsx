import React from 'react';
import Home from './pages/home';
import "antd/dist/antd.css";
// import Localization from './pages/localization'
import {BrowserRouter as Router, Route, Switch} from '../node_modules/react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
