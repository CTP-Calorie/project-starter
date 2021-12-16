import React from 'react';
import './about.css'
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    const auth = this.context;
    console.log(auth);
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
      console.log(auth);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/Homepage' } };
    const { redirectToReferrer, failed } = this.state;
    console.log(failed);
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }

    return (
      <div>
        <section class="vh-100 gradient-custom cover">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white">
          
          <div class="card-body p-5 text-center">
          <form onSubmit={this.login}>
            <div class="mb-md-5 mt-md-4 pb-5">
            { err }
              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" name="email" placeholder="Email" value={this.state.email} onChange={this.fieldChanged('email')}/>
                </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" name="password" placeholder="Password" value={this.state.password} onChange={this.fieldChanged('password')}/>
              </div>

                      <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
      </div>
    );
  }
}

LoginPage.contextType = AuthContext

export default LoginPage;