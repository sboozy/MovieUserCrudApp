function sendAll (req, res) {
  // res.json(res.locals.movies);
    console.log(res.locals.movies);
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

function sendOneDir(req, res) {
}

function sendOneGenre(req, res) {
}


module.exports = {
  sendAll,
  sendMovie,
  sendOneDir,
  sendOneGenre,
}
