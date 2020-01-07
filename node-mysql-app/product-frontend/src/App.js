import React, { useState, useEffect } from 'react';
import axios from 'axios';

const base_url = 'http://localhost:4000/products';
const initProduct = {
  productName: '',
  price: 0
};

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initProduct);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let unmounted = false;
    axios
      .get(base_url)
      .then(res => {
        if(!unmounted && res.status === 200) {
          setProducts(res.data);
        }
      })
      .catch(error => {
        console.log(error);
      })

    return () => unmounted = true;
  }, [refresh]);

  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(base_url + '/add', { params: {
        productName: product.productName,
        price: product.price
      } })
      .then(res => {
        if(res.status === 200) {
          setRefresh(!refresh);
          setProduct(initProduct);
        }
      })
      .catch(error => {
        console.log(error);
      })
  };

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">product name: </label>
        <input
          type="text"
          id="productName"
          value={product.productName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">price:</label>
        <input
          type="number"
          id="price"
          value={product.price}
          onChange={handleChange}
        />
        <br />
        <button>add to products</button>
      </form>
    </div>
  );
}

export default App;
