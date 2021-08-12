import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../requests';
import Spinner from './Spinner';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.createProduct = this.createProduct.bind(this);
  }
  componentDidMount() {
    Product.index().then(products => {
      this.setState({
        products: products,
      });
    });
  }
  createProduct(params) {
    this.setState(state => {
      return {
        products: [
          {
            ...params,
            created_at: new Date(),
            id: Math.max(...state.products.map(product => product.id)) + 1,
            seller: { full_name: 'Admin User' },
          },
          ...state.products,
        ],
      };
    });
  }
  deleteProduct(id) {
    this.setState((state, props) => {
      return {
        products: state.products.filter(q => q.id !== id),
      };
    });
  }
  render() {
    if (!this.state.products) {
      return <Spinner />;
    }
    return (
      <main>
        <h1>Products</h1>
        <ul>
          {this.state.products.map((product, index) => (
            <li key={index}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
              <button
                className="ui right floated red button"
                onClick={() => this.deleteProduct(product.id)}
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
    );
  }
}

export default ProductIndexPage;
