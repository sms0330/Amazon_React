import React, { Component } from 'react';
import NewProductForm from './NewProductForm';
import { Product } from '../requests';

class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.createProduct = this.createProduct.bind(this);
  }
  createProduct(params) {
    console.log(`Params: ${params.title} ${params.body}`);
    Product.create(params).then(product => {
      console.log(`product: ${product.errors}`);
      if (product.errors) {
        console.log(`ProductErrors: ${product.errors}`);
        this.setState({ errors: product.errors });
      } else {
        const id = product.id;
        this.props.history.push(`/products/${id}`);
      }
    });
  }

  render() {
    return (
      <div className="header">
        <NewProductForm createQuestion={this.createProduct} errors={this.state.errors} />
      </div>
    );
  }
}

export default NewProductPage;
