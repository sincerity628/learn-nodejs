const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

// query
const SELECT_ALL_PRODUCTS_QUERY = 'select * from products';

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

app.get('/products/add', (req, res) => {
  const { productName, price } = req.query;

  const INSERT_PRODUCT_QUERY =
  `insert into products(productName, price)
   values('${productName}', ${price})`;

  connection.query(INSERT_PRODUCT_QUERY, (error, results) => {
    if(error) {
      return res.send(error);
    } else {
      return res.send(`insert ${productName} succcessfully.`);
    }
  })
});

app.get('/products', (req, res) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (error, results) => {
    if(error) {
      return res.send(error);
    } else {
      return res.json({
        data: results
      });
    }
  })
});

app.get('/', (req, res) => {
  res.send('hello from the product server.');
});

app.listen(4000, () => {
  console.log('the product server is running on port 4000.');
});
