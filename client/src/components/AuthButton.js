import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const AuthButton = withRouter(({ history }) => {
  const auth = useContext(AuthContext);

  if(!auth.isAuthenticated) {
    return (
      <div>
    <Link className="btn btn-primary" to="/login">Login</Link>
     <Link className="btn btn-primary" to="/signup">Register</Link>
     </div>
    );
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div className="text-white">
      Welcome! {auth.user.firstName}
      <button className="btn btn-primary" onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthButton;