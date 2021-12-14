import React,{useState,useEffect} from 'react';
import '../pages/nutrition.scss'
import './about.css';
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


  componentWillUnmount(){
    
    localStorage.setItem('Calories', parseInt(this.state.calories));
    localStorage.setItem('Cholesterol', parseInt(this.state.Cholesterol));
    localStorage.setItem('Dietary_fiber', parseInt(this.state.Dietary_fiber));
    localStorage.setItem('potassium', parseInt(this.state.potassium));
    localStorage.setItem('Protein', parseInt(this.state.Protein));
    localStorage.setItem('Sugars', parseInt(this.state.Sugars));
    localStorage.setItem('saturated_fat', parseInt(this.state.saturated_fat));
    localStorage.setItem('Sodium', parseInt(this.state.Sodium));
    localStorage.setItem('total_carbohydrate', parseInt(this.state.total_carbohydrate));
    localStorage.setItem('total_fat', parseInt(this.state.total_fat));
    localStorage.setItem('items', JSON.stringify(this.state.items))
    console.log(JSON.parse(localStorage.getItem('items')).length);
    // localStorage.clear()
  //  console.log(this.state.items.length);
  //  console.log('before leaving' , localStorage.getItem('Calories'));

  }
  componentDidMount(){
    console.log('i mounted');
    console.log(JSON.stringify(this.state.items).length);
    console.log(localStorage.getItem('items').length);
    console.log(JSON.parse(localStorage.getItem('items')));
    if(JSON.stringify(this.state.items).length !== localStorage.getItem('items').length)
    {
       
      const newItems = JSON.parse(localStorage.getItem('items'))
      console.log('coming back' , localStorage.getItem('Calories'));
      console.log(newItems)
      newItems.map((foods) =>  
            
        this.setState({
        items: JSON.parse(localStorage.getItem('items')),
        calories : Math.round(this.state.calories + localStorage.getItem('Calories')),
        Cholesterol : Math.round(this.state.Cholesterol + localStorage.getItem('Cholesterol')),
        Dietary_fiber : Math.round(this.state.Dietary_fiber + localStorage.getItem('Dietary_fiber')),
        potassium : Math.round(this.state.potassium + localStorage.getItem('potassium')),
        Protein : Math.round(this.state.Protein+ localStorage.getItem('Protein')),
        Sugars : Math.round(this.state.Sugars + localStorage.getItem('Sugars')),
        saturated_fat : Math.round(this.state.saturated_fat+ localStorage.getItem('saturated_fat')),
        Sodium : Math.round(this.state.Sodium + localStorage.getItem('Sodium')),
        total_carbohydrate : Math.round(this.state.total_carbohydrate + localStorage.getItem('total_carbohydrate')),
        total_fat : Math.round(this.state.total_fat+ localStorage.getItem('total_fat')),
        }), console.log(newItems.nf_calories))
      
   
    }
    else{
      console.log('this same');
      console.log(JSON.parse(localStorage.getItem('items')).length);
      console.log(this.state.items.length);
      
    }

    let num = parseInt((localStorage.getItem('Calories')))
    console.log(typeof(num));
    console.log(typeof(localStorage.getItem('Calories')));
    
    console.log(typeof(this.state.calories));
  }
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
    foodSearch: '',
    items:[]
  }




  contentChanged = (event) => {
    console.log(event.target.value)
    

    this.setState({
      foodSearch: event.target.value 

      
    });
 
  }
  // contentCalorie = (event) => {
  //   console.log(event.target.value)
  //   this.setState({
  //     totalCal: event.target.value
      
  //   });

  




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
        "query": "${this.state.foodSearch}",
        "timezone": "US/Eastern"
        }`,
    };
    fetch(url, options)
    .then(res => {
     
      return res.json()
    })
    .then((json) => {

     
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
        serving_qty :  json['foods'][0].serving_qty,
        items : this.state.items.concat(json['foods'])
       

        // items : json['foods'][0].photo.thumb
 

      })
      
 
      const calories = `${this.state.content}: ${json['foods'][0]['nf_calories']}`;
      console.log(json['foods'][0]);
      const content = {
        content : json['foods'][0]['food_name'],
        calories : json['foods'][0]['nf_calories'],
        cholesterol : json['foods'][0]['nf_cholesterol'],
        dietary_fiber: json['foods'][0]['nf_dietary_fiber'],
        total_fat: json['foods'][0]['nf_total_fat'],
        saturated_fat: json['foods'][0]['nf_saturated_fat'],
        sodium: json['foods'][0]['nf_sodium'],
        total_carbohydrate: json['foods'][0]['nf_total_carbohydrate'],
        sugars: json['foods'][0]['nf_sugars'],
        protein: json['foods'][0]['nf_protein'],
        potassium: json['foods'][0]['nf_potassium'],


      }
      return fetch(url2, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: content}),
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
    // if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }
console.log(this.state.content);
    return (
        <div className='photo'>
      <div className="calorie container-fluid text-center col-10 col-md-8 col-lg-7">
        {/* { errorMessage } */}
        <div className="input-group">
          <input 
            type="text"  placeholder="Please Enter 1 food item"  value={this.state.foodSearch}className="form-control mr-3 rounded"onChange={this.contentChanged}
            required />
          <button className="btn btn-primary" onClick={this.savePost}>Enter Food</button>
          
          
        </div>
        <div>
       
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
      <span className="text-bold">Total Fat</span> {this.state.total_fat}g
    </div>
    <div className="nutrition-column text-bold text-right">
      0%
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-indent">Saturated Fat {this.state.saturated_fat}g</span>
    </div>
    <div className="nutrition-column text-bold text-right">
      0%
    </div>
  </div>
  <div className="nutrition-row border-b">
    <div className="nutrition-column">
      <span className="text-indent">
            <i>Potassium</i> {this.state.potassium}mg</span>
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
      <span className="text-indent">dietary fiber {this.state.Dietary_fiber}g</span>
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
      <span className="text-bold">Sodium</span> {this.state.Sodium}mg
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
   
      
        </div>   
    );
  }
}

export default PostFormPage;