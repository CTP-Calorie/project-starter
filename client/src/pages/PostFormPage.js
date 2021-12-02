  import React from 'react';
import '../pages/nutrition.css'
import { Redirect } from 'react-router-dom';
const {x_app_id, x_app_key} = require('./src/secrets.json');


//const authorization = require('./auth/credentials.json');

function App(props)
{
  return(
    <div>
      <ul>
        <li><img src={props.img} alt='food'/></li>
      </ul>
    </div>
  );

}


class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
    calories: 0,
    Cholesterol: 0,
    Dietary_fiber: 0,
    potassium: 0,
    Protein: 0,
    saturated_fat: 0,
    Sodium: 0,
    Sugars : 0,
    total_carbohydrate: 0,
    total_fat: 0,
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
      
      this.setState({items : this.state.items.concat(json['foods']) })
      this.setState({
        calories : json['foods'][0].nf_calories + this.state.calories,
        Cholesterol : json['foods'][0].nf_cholesterol + this.state.Cholesterol,
        Dietary_fiber : json['foods'][0].nf_dietary_fiber + this.state.Dietary_fiber,
        potassium : json['foods'][0].nf_potassium + this.state.potassium,
        Protein : json['foods'][0].nf_protein + this.state.Protein,
        Sugars : json['foods'][0].nf_sugars + this.state.Sugars,
        saturated_fat : json['foods'][0].nf_saturated_fat + this.state.saturated_fat,
        Sodium : json['foods'][0].nf_sodium + this.state.Sodium,
        total_carbohydrate : json['foods'][0].nf_total_carbohydrate + this.state.total_carbohydrate,
        total_fat : json['foods'][0].nf_total_fat + this.state.total_fat,
        // items : json['foods'][0].photo.thumb
 

      })
      console.log(this.state.items)
      console.log(json)
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
          <div>
            {/* <input type='text' placeholder='Enter Target Calories' onClick={}/> */}
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
        <div>
      <section className="performance-facts">
  <header className="performance-facts__header">
    <h1 className="performance-facts__title">Nutrition Facts</h1>
    <p>Serving Size 1/2 cup (about 82g)</p>
      <p>Serving Per Container 8</p>
  </header>
  <table className="performance-facts__table">
    <thead>
      <tr>
        <th colSpan="3" className="small-info">
          Amount Per Serving
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colSpan="2">
          <b>Calories:</b>
           {this.state.calories}
        </th>
        <td>
          Calories from Fat
          0
        </td>
      </tr>
      <tr className="thick-row">
        <td colSpan="3" className="small-info">
          <b>% Daily Value*</b>
        </td>
      </tr>
      <tr>
        <th colSpan="2">
          <b>Total Fat</b>
          {this.state.total_fat}g
        </th>
        <td>
          <b>22%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Saturated Fat
          {this.saturated_fat}g
        </th>
        <td>
          <b>22%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Trans Fat
          0g
        </th>
        <td>
        </td>
      </tr>
      <tr>
        <th colSpan="2">
          <b>Cholesterol</b>
          {this.state.Cholesterol}mg
        </th>
        <td>
          <b>18%</b>
        </td>
      </tr>
      <tr>
        <th colSpan="2">
          <b>Sodium</b>
          {this.state.Sodium}mg
        </th>
        <td>
          <b>2%</b>
        </td>
      </tr>
      <tr>
        <th colSpan="2">
          <b>Total Carbohydrate</b>
          {this.state.total_carbohydrate}g
        </th>
        <td>
          <b>6%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Dietary Fiber
           {this.state.Dietary_fiber}g
        </th>
        <td>
          <b>4%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Sugars
          {this.state.Sugars}g
        </th>
        <td>
        </td>
      </tr>
      <tr className="">
        <th colSpan="2">
          <b>Protein</b>
          {this.state.Protein}g
        </th>
        <td>
        </td>
      </tr>
      <tr className="thick-end">
        <th colSpan="2">
          <b>potassium</b>
          {this.state.potassium}g
          
        </th>
        <td>
        </td>
      </tr>
    </tbody>
  </table>

  <table className="performance-facts__table--grid">
    <tbody>
      <tr>
        <td colSpan="2">
          Vitamin A
          10%
        </td>
        <td>
          Vitamin C
          0%
        </td>
      </tr>
      <tr className="thin-end">
        <td colSpan="2">
          Calcium
          10%
        </td>
        <td>
          Iron
          6%
        </td>
      </tr>
    </tbody>
  </table>

</section>
</div>

    <div>
        {this.state.items.map(img => <App img={img.photo.thumb}  /> )}
      </div>
  
      </div>

      
     
    );
  }
}

export default PostFormPage;