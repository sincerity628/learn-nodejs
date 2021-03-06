const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();
// init middleware logger
app.use(logger);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// member api
app.use('/api/members', require('./route/api/members'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`the server is running on port ${PORT}.`));
