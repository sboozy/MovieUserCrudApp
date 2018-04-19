const express = require('express');
const logger = require('morgan')


const PORT = process.env.PORT || 3000;
const app = express();


app.listen(PORT, () => {
  console.log(`Holy Popcorn, its movie input time on port ${PORT}!`);
});
