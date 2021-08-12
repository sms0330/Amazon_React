import React, { Component } from 'react';
import './App.css';
import ProductIndexPage from './components/ProductIndexPage';
import ProductShowPage from './components/ProductShowPage';
import ProductNewPage from './components/ProductNewPage';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import { Session } from './requests';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import { User } from './requests';

// function App() {
//   return (
//     <div>
//       <ProductIndexPage />
//       <ProductShowPage />
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) {
        this.setState(state => {
          return { user };
        });
      }
    });
  };

  onSignOut = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <div className="ui container">
        <Router>
          <Navbar currentUser={this.state.user} onSignOut={this.onSignOut} />
          <Switch>
            <Route
              exact
              path="/sign_in"
              render={routeProps => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />}
            />
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={ProductIndexPage} />
            <Route path="/products/new" exact component={ProductNewPage} />
            <Route path="/products/:id" exact component={ProductShowPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
