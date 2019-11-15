const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');

const app = express();
const PORT = 3000;

// handles CORS
app.use(cors());

// handles parsing incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// these native express methods do the same as above:
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// outputs HTTP requests to console
app.use(morgan('dev'));

app.use('/', router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));