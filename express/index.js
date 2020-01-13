const express = require('express');
const path = require('path');
const members = require('./data/members');

const app = express();

// get all members
app.get('/api/members', (req, res) => res.json(members));



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`the server is running on port ${PORT}.`));
