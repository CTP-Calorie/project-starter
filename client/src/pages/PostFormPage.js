import React from 'react';
import { Redirect } from 'react-router-dom';
const {x_app_id, x_app_key} = require('./secrets.json');

//const authorization = require('./auth/credentials.json');


class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value   
    });
  }

  savePost = (event) => {
    console.log(x_app_id + "Hello Wolrd")
    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    const url2 = '/api/posts/';
    
    let options = {
      method: 'POST',
      headers: {
        'x-app-id': x_app_id,
        'x-app-key': x_app_key,
        'Content-Type': 'application/json'
      },
      body: `{
        "query": "${this.state.content}",
        "timezone": "US/Eastern"
        }`,
    };
    
    
    fetch(url, options)
    .then(res => {
      console.log(this.state.content);
      return res.json()
    })
    .then(json => {
      const calories = `${this.state.content}: ${json['foods'][0]['nf_calories']}`;


      return fetch(url2, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: calories}),
      })
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      }

      throw new Error('Content validation');
    })
    .then(post => {
      
      this.setState({
        success: true,
        content: post
      });
    })
    .catch(err => {
      this.setState({
        error: true,
      });
      console.error('error:' + err);
    })

    
  }


  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Add your words of wisdom here..." 
            value={this.state.content}
            className="form-control mr-3 rounded"
            onChange={this.contentChanged}
          />
          <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
        </div>
      </div>
    );
  }
}

export default PostFormPage;