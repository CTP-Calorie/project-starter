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

import './App.css';
import { AuthProvider } from './context/AuthContext';
import AuthButton from './components/AuthButton';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Micro Blog</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Calorie
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
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/Rest" component={NearbyRestaurant} />
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