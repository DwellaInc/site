import React from 'react';
import Home from './pages/Home/Home';
import './main.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ThankYou from './pages/ThankYou/ThankYou';
import Legal from './pages/Legal/Legal';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registered">
            <ThankYou type="register" />
          </Route>
          <Route path="/thank-you">
            <ThankYou type="contact" />
          </Route>
          <Route path="/privacy-policy">
            <Legal type="privacy" />
          </Route>
          <Route path="/terms-and-conditions">
            <Legal type="terms" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
