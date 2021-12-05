  import React from 'react';
import '../pages/nutrition.scss'
import { Redirect } from 'react-router-dom';
const {x_app_id, x_app_key} = require('./src/secrets.json');


//const authorization = require('./auth/credentials.json');

function App(props)
{
  return(
    <div>
      <ul className='list-group'>
        <li className='list-group-item'><img src={props.img} alt='food'/> Serving qty: {props.serving_qty}{props.serving_unit}</li>
      </ul>
    </div>
  );

}


class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
    CalorieGoal: 0,
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
    serving_qty : 0,
    serving_unit: " ",
    totalCal: '',
    items:[]
  }

  contentChanged = (event) => {
    console.log(event.target.value)
    this.setState({
      content: event.target.value 
      
    });

  }
  contentCalorie = (event) => {
    console.log(event.target.value)
    this.setState({
      totalCal: event.target.value
      
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
     
      return res.json()
    })
    .then((json) => {
      
      this.setState({items : this.state.items.concat(json['foods']) })
      this.setState({
        calories : Math.round(json['foods'][0].nf_calories + this.state.calories),
        Cholesterol : Math.round(json['foods'][0].nf_cholesterol + this.state.Cholesterol),
        Dietary_fiber : Math.round(json['foods'][0].nf_dietary_fiber + this.state.Dietary_fiber),
        potassium : Math.round(json['foods'][0].nf_potassium + this.state.potassium),
        Protein : Math.round(json['foods'][0].nf_protein + this.state.Protein),
        Sugars : Math.round(json['foods'][0].nf_sugars + this.state.Sugars),
        saturated_fat : Math.round(json['foods'][0].nf_saturated_fat + this.state.saturated_fat),
        Sodium : Math.round(json['foods'][0].nf_sodium + this.state.Sodium),
        total_carbohydrate : Math.round(json['foods'][0].nf_total_carbohydrate + this.state.total_carbohydrate),
        total_fat : Math.round(json['foods'][0].nf_total_fat + this.state.total_fat),
        serving_qty :  json['foods'][0].serving_qty
       

        // items : json['foods'][0].photo.thumb
 

      })
      console.log(this.state.items)
     
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
            type="text"  placeholder="Please Enter 1 food item"  value={this.state.content}className="form-control mr-3 rounded"onChange={this.contentChanged}
            required />
          <button className="btn btn-primary" onClick={this.savePost}>Enter Food</button>
        </div>
        <div>
          {/* <div>
            <input type='text' value ={this.state.totalCal}  onChange={this.contentCalorie}placeholder='Enter Target Calories'  />
            <button className="btn btn-primary ">Submit</button>
          </div> */}
        </div>
        <div>
        {/* <div>
          <h1>Target Calorie Goal is :{this.state.totalCal}</h1>
        </div> */}
        <section className="nutrition-label simplified-label">
  <header className="nutrition-header border-b-lg">
    <h1 className="nutrition-facts border-b">Nutrition Facts</h1>
    {/* <div class="servings">64 servings per container</div> */}
    <div className="nutrition-row">
      {/* <div class="nutrition-column text-md text-bold">Serving size</div>
      <div class="nutrition-column text-md text-bold text-right">1 tbsp</div> */}
    </div>
  </header>
  <div className="nutrition-row border-b-md">
    <div className="nutrition-column text-bold">
      <div className="text-sm">Amount per serving</div>
      <div className="calories">Calories</div>
    </div>
    <div className="nutrition-column calories amount align-bottom text-right">
      {this.state.calories}
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column text-right text-bold text-sm">
      % DV *
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-bold">Total Fat</span> {this.state.total_fat}
    </div>
    <div className="nutrition-column text-bold text-right">
      18%
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-indent">Saturated Fat {this.state.saturated_fat}g</span>
    </div>
    <div className="nutrition-column text-bold text-right">
      10%
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-indent">
            <i>Potassium</i> {this.state.potassium}g</span>
    </div>
    <div className="nutrition-column text-bold text-right">
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-indent">Sugars {this.state.Sugars}g</span>
    </div>
    <div className="nutrition-column text-bold text-right">
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-indent">Monounsaturated Fat 6g</span>
    </div>
    <div className="nutrition-column text-bold text-right">
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-bold">Cholesterol</span> {this.state.Cholesterol}mg
    </div>
    <div className="nutrition-column text-bold text-right">
      0%
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-bold">Sodium</span> {this.state.Sodium}
    </div>
    <div className="nutrition-column text-bold text-right">
      0%
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-bold">Total Carbohydrate</span> {this.state.total_carbohydrate}g
    </div>
    <div className="nutrition-column text-bold text-right">
      0%
    </div>
  </div>
  <div className="nutrition-row border-b-md">
    <div className="nutrition-column">
      <span className="text-bold">Protein</span> {this.state.Protein}g
    </div>
    <div className="nutrition-column text-bold text-right">
      
    </div>
    
  </div>
  
  
  <footer>
    <div className="nutrition-footer">
      <div className="footnote border-b">
        Not a significant source of cholesterol, dietary fiber, total sugars, added sugars, vitamin D, calcium, iron, and potassium
      </div>
    </div>
    <div className="nutrition-footer">
      * %DV = %Daily Value
    </div>
  </footer>
</section>

</div>


     
        <div className='col-sm'> {this.state.items.map(img => <App img={img.photo.thumb} serving_qty ={img.serving_qty} serving_unit={img.serving_unit}  /> )}</div>   
        </div>
   
      
     
    );
  }
}

export default PostFormPage;