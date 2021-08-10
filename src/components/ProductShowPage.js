import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import productData from '../productData';

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = productData;
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(id) {
    this.setState(state => {
      return {
        reviews: this.state.reviews.filter(r => r.id !== id),
      };
    });
  }

  render() {
    console.log('Product show page rendered');
    return (
      <div>
        <h1>Product</h1>
        <ProductDetails
          title={this.state.title}
          description={this.state.description}
          price={this.state.price}
          created_at={new Date(this.state.created_at)}
          updated_at={new Date(this.state.updated_at)}
          seller={this.state.seller}
        />
        <ReviewList reviews={this.state.reviews} deleteReview={this.deleteReview} />
      </div>
    );
  }
}

export default ProductShowPage;
