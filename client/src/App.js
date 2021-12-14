import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import NearbyRestaurant from './pages/NearbyRestaurant';
import HomePage from './pages/HomePage'

import './App.css';
import { AuthProvider } from './context/AuthContext';
import AuthButton from './components/AuthButton';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import PrivateRoute from './components/PrivateRoute';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/HomePage">Home page</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Calorie
          </NavLink>
        
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Log
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Rest">
            Nearby Restaurant
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Navigation />
          <div className="">
            <div className="">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={RegisterPage} />
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/Rest" component={NearbyRestaurant} />
                <Route path="/HomePage" component={HomePage} />
                <Route path="/" component={PostsListPage} />
               
              </Switch>
            </div>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}


export default App;