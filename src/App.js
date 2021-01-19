import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer  from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ContactUS from './pages/ContactUs';


function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path='/Contact-us' component={ContactUS} />
        <Route exact path='/Blog' component={Blog} />
        <Route exact path='/About' component={About} />
        <Route exact path='/' component={Home} />
        <Redirect to ='/' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
