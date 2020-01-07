const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '******',
  database: 'production'
});

connection.connect(error => {
  if(error) {
    console.log(error);
    return error;
  }
  console.log('Connected!');
});

app.get('/', (req, res) => {
  res.send('hello from the product server.');
});

app.listen(4000, () => {
  console.log('the product server is running on port 4000.');
});
