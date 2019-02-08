const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(morgan('dev'));

app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening at ${port}`));




module.exports = app;