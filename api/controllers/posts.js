const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication')
const { Post } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  Post.findAll({})
    .then(posts => res.json(posts));
});


router.post('/', passport.isAuthenticated(), (req, res) => {
  let content  = req.body.content;
  console.log(content)
  Post.create({
    calories : content.calories, 
    cholesterol : content.cholesterol,
    content : content.content,
    dietary_fiber : content.dietary_fiber,
    potassium : content.potassium,
    protein : content.protein,
    saturated_fat : content.saturated_fat,
    total_carbohydrate : content.total_carbohydrate,
    sugars : content.sugars,
    total_fat : content.total_fat,
    sodium : content.sodium

      })
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});

router.put('/:id', passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.content = req.body.content;
      post.save()
        .then(post => {
          res.json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});

router.delete('/:id', passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});

module.exports = router;