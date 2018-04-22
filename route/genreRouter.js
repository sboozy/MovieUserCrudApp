const genreRouter = require('express').Router();
const movieControl = require('../control/movieControl');
const movieViewControl = require('../control/movieViewControl');

const movieDb = require('../models/movieModel');

function sendError(err, req, res, next){
  console.log('sending errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

genreRouter.route('/')
  .get(movieControl.getAllGenres, movieViewControl.sendAllGenres, sendError)

genreRouter.route('/:id')
  .get(movieControl.getGenreByID, movieViewControl.sendOneGenre, sendError)

module.exports = genreRouter;
