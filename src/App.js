import React from 'react';
import './App.css';
import ProductIndexPage from './components/ProductIndexPage';
import ProductShowPage from './components/ProductShowPage';
import NewProductPage from './components/NewProductPage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Spinner from './components/Spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import { Session, User } from './requests';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: false,
    };
  }
  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== 'number') {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null,
      });
    });
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="ui container">
        <Router>
          <Navbar currentUser={currentUser} onSignOut={this.signOut} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/sign_in"
              exact
              render={routeProps => <SignInPage onSignIn={this.getUser} {...routeProps} />}
            />
            <Route
              exact
              path="/sign_up"
              render={routeProps => <SignUpPage {...routeProps} onSignUp={this.getUser} />}
            />
            <AuthRoute
              isAuthenticated={!!currentUser}
              exact
              path="/products/"
              component={ProductIndexPage}
            />
            <AuthRoute
              isAuthenticated={!!currentUser}
              exact
              path="/products/new"
              component={NewProductPage}
            />
            <AuthRoute
              isAuthenticated={!!currentUser}
              exact
              path="/products/:id"
              component={ProductShowPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
