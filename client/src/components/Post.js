import React from 'react';
import { Link } from 'react-router-dom';

function Post({ content,calories, cholesterol,dietary_fiber,total_fat,saturated_fat ,sodium ,total_carbohydrate,sugars,protein,potassium,createdAt, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/"+id}>{ content } </Link>
        </div>
        <div className="card-footer small text-muted text-right">
          calories: { calories }
        </div>
        <div className="card-footer small text-muted text-right">
          cholesterol: { cholesterol }
        </div>
        <div className="card-footer small text-muted text-right">
        total_fat: { total_fat }
        </div>
        <div className="card-footer small text-muted text-right">
        saturated_fat: { cholesterol }
        </div>
        <div className="card-footer small text-muted text-right">
        sodium: { sodium }
        </div>
        <div className="card-footer small text-muted text-right">
        total_carbohydrate: { total_carbohydrate }
        </div>
        <div className="card-footer small text-muted text-right">
        sugars: { sugars }
        </div>
        <div className="card-footer small text-muted text-right">
        protein: { protein }
        </div>
        <div className="card-footer small text-muted text-right">
        potassium: { potassium }
        </div>
        <div className="card-footer small text-muted text-right">
          { createdAt }
        </div>
      </div>
    </div>
  );
}

export default Post;