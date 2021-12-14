import React from 'react';
import './about.css'
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

class RegisterPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    firstName : "",
    lastName : "",
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
   
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
      console.log(this.state.firstName);
    }
    
  }

  Register = (e) => {
    e.preventDefault();
    const auth = this.context;
  
    let { firstName, lastName, email, password } = this.state;
    console.log(firstName, lastName, email, password);
    auth.newAcc(firstName, lastName,email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/login' } };
    const { redirectToReferrer, failed } = this.state;
    console.log(failed);
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Register Failed</div>;
    }

    return (
      <div>
        <section class="vh-100 bg-image" >
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" >
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={this.Register}>
              { err }
                <div class="form-outline mb-4">
                <input type="text" className="form-control form-control-lg"  name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.fieldChanged('firstName')} />
                  <label class="form-label" for="form3Example1cg">First Name</label>
                </div>
                <div class="form-outline mb-4">
                <input  type="text" className="form-control form-control-lg" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.fieldChanged('lastName')} />
                  <label class="form-label" for="form3Example1cg">Last Name Name</label>
                </div>

                <div class="form-outline mb-4">
                <input type="email" className="form-control form-control-lg"  name="email" placeholder="Email" value={this.state.email} onChange={this.fieldChanged('email')} />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                <input  type="password" className="form-control form-control-lg" name="password" placeholder="Password" value={this.state.password} onChange={this.fieldChanged('password')} />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>
            
               <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login" class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
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

RegisterPage.contextType = AuthContext

export default RegisterPage;