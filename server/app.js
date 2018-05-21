const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

require('dotenv').config()

app.use(morgan('tiny'));
app.use(cors());



app.get('/', (req, res) => {
  const url = `https://api.pexels.com/v1/search?per_page=${req.query.per_page}&page=${req.query.page}&query=${req.query.images}`
  const PEXELS_API = process.env.PEXELS_API
  fetch(url, {headers: {"Authorization": PEXELS_API}})
  .then(response => response.json())
  .then(json => {
    res.json(json)
  })
})







const port = process.env.PORT || 1124;

app.listen(port);
