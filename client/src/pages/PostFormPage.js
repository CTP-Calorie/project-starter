import React from 'react';
import { Redirect } from 'react-router-dom';
const {x_app_id, x_app_key} = require('./src/secrets.json');

//const authorization = require('./auth/credentials.json');

function App(props) {
  return (<div className ="information">
  
    <ul> 
      <li>Calories: {props.calories} </li>
      <li>Cholesterol: {props.cholesterol}mg </li>
      <li>Dietary_fiber: {props.dietary_fiber}g </li>
      <li> potassium: {props.potassium}mg </li>
      <li>Protein: {props.protein}g </li>
      <li>saturated_fat: {props.saturated_fat}g </li>
      <li>Sodium: {props.sodium}mg </li>
      <li>Sugars: {props.sugars}g </li>
      <li>total Carbohydrate: ({props.total_carbohydrate}g </li>
      <li>total fat: {props.total_fat}g </li>
      

    
  </ul> 
  </div>
  )};

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
    items:[]
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value   
    });
  }

  savePost = (event) => {
    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    const url2 = '/api/posts/';
    
    const options = {
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
    .then((json) => {
    
      this.setState({items : json['foods']})
      console.log(this.state.items)
      const calories = `${this.state.content}: ${json['foods'][0]['nf_calories']}`;

      return fetch(url2, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {content: calories},
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
        <div>
          {this.state.items.map(item => 
          <App
           calories={item.nf_calories} 
           cholesterol={item.nf_cholesterol} 
           dietary_fiber={item.nf_dietary_fiber} 
           potassium={item.nf_potassium} 
           protein={item.nf_protein}
           saturated_fat={item.nf_saturated_fat}
           sodium={item.nf_sodium}
           sugars={item.nf_sugars}
           total_carbohydrate={item.nf_total_carbohydrate}
           total_fat={item.nf_total_fat}/> )}
        </div>
      </div>
    );
  }
}

export default PostFormPage;