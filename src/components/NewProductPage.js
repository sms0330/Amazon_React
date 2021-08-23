import React, { Component } from 'react';
import { Product } from '../requests';
import NewProductForm from './NewProductForm';

export default class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      product: {},
    };
  }
  createProduct = event => {
    event.preventDefault();
    Product.create(this.state.product).then(product => {
      if (product.errors) {
        this.setState({ errors: product.errors });
      } else this.props.history.push(`/products/${product.id}`);
    });
  };

  render() {
    return (
      <main>
        <div className="header">Create a Product</div>
        <NewProductForm
          createProduct={this.createProduct}
          product={this.state.product}
          errors={this.state.errors}
          onChange={val => this.setState({ product: { ...this.state.product, ...val } })}
        />
      </main>
    );
  }
}
