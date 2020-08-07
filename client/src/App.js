import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/style.css'

import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      <Navbar />
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/about' component={AboutPage} />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
