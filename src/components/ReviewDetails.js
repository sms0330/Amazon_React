import React from 'react';
import StarRating from './StarRating';

function ReviewDetails(props) {
  return (
    <div className="ui segment ReviewDetails">
      <div className="ui header">Review Details</div>
      <p>
        {props.body} <br />
      </p>
      <p>
        <small>Reviewer: {props.reviewer.full_name}</small>
        <br />
        <small>rating: {props.rating}</small>
        <br />
        <small>Created at: {props.created_at}</small>
      </p>
      <button className="ui right floated red button" onClick={() => props.deleteReview(props.id)}>
        Delete
      </button>
      <StarRating max={5} current={props.rating} />
    </div>
  );
}

export default ReviewDetails;
