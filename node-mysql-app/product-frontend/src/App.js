import React, { useState, useEffect } from 'react';
import axios from 'axios';

const base_url = 'http://localhost:4000/products';
const initProduct = {
  productName: '',
  price: ''
};

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initProduct);

  useEffect(() => {
    axios
      .get(base_url)
      .then(res => {
        if(res.status === 200) {
          setProducts(res.data);
          console.log(res);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  console.log(products);
  return (
    <div className="App">
      <h1>production</h1>
      <div>
        { products.length && products.map(product => (
          <p key={product.productId}>
            { product.productName } - { product.price }
          </p>
        )) }
      </div>
    </div>
  );
}

export default App;
