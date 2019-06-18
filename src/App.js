import React from 'react';
import './App.css';
import NavBar from './NavBar';
import logo from './assets/logo.svg';
import Footer from './Footer';
import Home from './Home';
class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="header">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <NavBar />
            </div>
            <section>
              <div className="matches">
                <Home />
              </div>
            </section>
            <footer>
              <Footer />
            </footer>
          </div>
          <div className="col-md-8 hidden-xs play-ground"></div>
        </div>
      </div>
    );
  }
  
}

export default App;
