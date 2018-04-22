function sendAll (req, res) {
  // res.json(res.locals.movies);
    // console.log(res.locals.movies);
  res.render('movies/index', {
    movies: res.locals.movies
  })
}

function sendMovie(req, res) {
  res.render('movies/showOne', {
    movie: res.locals.movie
  });
  // res.json({
  //   msg: "I'm working"
  // })
}

// function sendDir(req, res) {
//   res.json(res.locals.director)
// }
function sendAllGenres(req, res) {
    // res.json(res.locals.genres)
  res.render('genres/index', {
    genres: res.locals.genres
  })
}

function sendOneGenre(req, res) {
  // res.json(res.locals.genre)
  // console.log(res.locals.genre);
  res.render('genres/showOne', {
    genre: res.locals.genre
  })
}
function handleCreateMovie (req, res) {
  console.log('made it to views')
  res.json({newMovie: res.locals.newMovie})
    // res.redirect('movies/')
}

function sendNewMovie(req, res) {
  res.render('movies/new', {
    movies: res.locals.movies
  })
  // console.log(res.locals.movies);
}

function sendUpdatedMovie(req, res) {

}

function redirectMovieIndex(req, res) {
  movie = res.locals.newMovie
  res.redirect('movies/')
}


module.exports = {
  sendAll,
  sendMovie,
  // sendDir,
  sendAllGenres,
  sendOneGenre,
  handleCreateMovie,
  sendNewMovie,
  redirectMovieIndex,
}
