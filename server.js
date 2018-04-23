const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const movieRouter = require('./route/movieRouter');
const genreRouter = require('./route/genreRouter');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home');
});

app.use('/movies', movieRouter);
app.use('/genre', genreRouter);

app.listen(PORT, () => {
  console.log(`Holy Popcorn, its movie input time on port ${PORT}!`);
});
