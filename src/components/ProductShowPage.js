import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import { Product } from '../requests';
import Spinner from './Spinner';

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
    this.deleteReview = this.deleteReview.bind(this);
  }
  componentDidMount() {
    Product.show(this.props.match.params.id).then(product => {
      this.setState({
        product: product,
      });
    });
  }
  deleteReview(reviewId) {
    this.setState(state => {
      return {
        product: {
          ...state.product,
          reviews: state.product.reviews.filter(review => review.id !== reviewId),
        },
      };
    });
  }
  render() {
    if (!this.state.product) {
      return <Spinner />;
    }
    return (
      <div>
        <h1>Product</h1>
        <ProductDetails {...this.state.product} />
        <ReviewList onReviewDelete={this.deleteReview} reviews={this.state.product.reviews} />
      </div>
    );
  }
}
export default ProductShowPage;
