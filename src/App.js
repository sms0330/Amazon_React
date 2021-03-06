import React, { useState, useEffect, useCallback } from 'react';
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

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = useCallback(() => {
    User.current().then(data => {
      if (data && typeof data.id !== 'number') {
        setCurrentUser(null);
        setLoading(false);
      } else {
        setCurrentUser(data);
        setLoading(false);
      }
    });
  }, []);

  const signOut = () => {
    Session.destroy().then(setCurrentUser(null));
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="ui container">
      <Router>
        <Navbar currentUser={currentUser} onSignOut={signOut} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/sign_in"
            exact
            render={routeProps => <SignInPage onSignIn={getUser} {...routeProps} />}
          />
          <Route
            exact
            path="/sign_up"
            render={routeProps => <SignUpPage {...routeProps} onSignUp={getUser} />}
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
};

export default App;
