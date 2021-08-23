import React from 'react';

export default function NewReviewForm(props) {
  const { body, onChange, createReview, rating, review } = props;
  return (
    <form className="ui form" onSubmit={createReview}>
      <div className="field">
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          id="body"
          value={body}
          onChange={e => {
            onChange({ ...review, body: e.target.value });
          }}
          placeholder="Please Enter Body"
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          id="rating"
          value={rating}
          onChange={e => {
            onChange({ ...review, rating: e.target.value });
          }}
        />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}
