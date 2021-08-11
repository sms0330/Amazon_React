import React, { Component } from 'react';
import productsIndexData from '../productsIndexData';
import NewProductForm from './NewProductForm';

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsIndexData,
    };

    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    console.log('Productindex Component initialized');
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
    this.setState(state => {
      return {
        products: this.state.products.filter(p => p.id !== id),
      };
    });
  }

  render() {
    console.log('Product index page rendered');
    return (
      <main>
        <h1>Products</h1>
        <ul>
          {this.state.products.map((product, index) => (
            <li key={index}>
              <p>
                <h2>{product.title}</h2>
                <button
                  className="ui right floated red button"
                  onClick={() => this.deleteProduct(product.id)}
                >
                  Delete
                </button>
                <p>Price: {product.price} </p>
                <p>Created at: {new Date(product.created_at).toLocaleDateString()}</p>
                <p>Seller: {product.seller.full_name}</p>
                <br />
              </p>
            </li>
          ))}
        </ul>
        <NewProductForm createProduct={this.createProduct} />
      </main>
    );
  }
}
