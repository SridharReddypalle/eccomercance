import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import NotFound from './components/NotFound';
import AboutPage from './containers/AboutPage';
import FaqsPage from './containers/FaqsPage';
import ContactPage from './containers/ContactPage';
function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path='/'> <HomePage/></Route>
    <Route path='/about'><AboutPage/></Route>
    <Route path='/faq'><FaqsPage/></Route>
    <Route path='/contact'><ContactPage/></Route>
    <Route path="*"><NotFound/></Route>

    </Switch>
    </Router>
    </div>
  );
}

export default App;
