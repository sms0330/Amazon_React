import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import { Product } from '../requests';
import Spinner from './Spinner';
import NewReviewForm from './NewReviewForm';

export default function ProductShowPage(props) {
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState({});
  useEffect(() => {
    Product.show(props.match.params.id).then(product => {
      setProduct(product);
    });
  }, [props.match.params.id]);
  const deleteReview = reviewId => {
    setProduct({ ...product, reviews: product.reviews.filter(review => review.id !== reviewId) });
  };
  const createReview = e => {
    e.preventDefault();
    setProduct({
      ...product,
      reviews: [
        {
          ...review,
          id: Math.max(...product.reviews.map(review => review.id)) + 1,
        },
        ...product.reviews,
      ],
    });
  };
  return product ? (
    <div>
      <h1>Product</h1>
      <ProductDetails {...product} />
      <NewReviewForm
        body={review.body}
        rating={review.rating}
        review={review}
        onChange={setReview}
        createReview={createReview}
      />
      <ReviewList onReviewDelete={deleteReview} reviews={product.reviews} />
    </div>
  ) : (
    <Spinner />
  );
}
