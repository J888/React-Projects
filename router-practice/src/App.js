import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

// Import Switch and wrap Routes in it to make sure your URL not found page works
// To have nav show up on every page, include it outside Switch component

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
