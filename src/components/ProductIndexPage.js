import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../requests';
import Spinner from './Spinner';

export default function ProductIndexPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Product.index().then(products => {
      setProducts(products);
    });
  }, []);
  const deleteProduct = id => {
    setProducts(products.filter(q => q.id !== id));
  };

  return products ? (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            <button
              className="ui right floated red button"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
            <p>Price: {product.price} </p>
            <p>Created at: {new Date(product.created_at).toLocaleDateString()}</p>
            <p>Seller: {product.seller ? product.seller.full_name : null}</p>
            <br />
          </li>
        ))}
      </ul>
    </main>
  ) : (
    <Spinner />
  );
}
