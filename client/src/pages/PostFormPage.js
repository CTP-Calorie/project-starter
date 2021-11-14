import React from 'react';
import { Redirect } from 'react-router-dom';

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
  }

  contentChanged = (event) => {
    console.log(event.target.value);
    this.setState({
      content: event.target.value
      
    });
  }

  savePost = (event) => {
   
    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    let food = this.state.content;
    console.log(food)
    
    let options = {
      method: 'POST',
      headers: {
        'x-app-id': 'a309c216',
        'x-app-key': '2b1d3ac6953cbfa43b65bcbbd5066e71',
        'Content-Type': 'application/json'
      },
      body: '{"query":"2 small eggs wtih 1 slice of american cheese","timezone":"US/Eastern"}'
    };
    
      //body: JSON.stringify({content: this.state.content}),
    
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));


    fetch(url, options)
      .then(res => {
        if(res.ok){
          return res.json()
        }
        throw new Error('Content validation'); 
      })
      // Error is here
      
      // but before here
      .then(
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: this.state.data}),
    })
      .then(res => {
        console.log(this.state.data);
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
      }));
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