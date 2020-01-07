const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from the product server.');
});

app.listen(4000, () => {
  console.log('the product server is running on port 4000.');
});
