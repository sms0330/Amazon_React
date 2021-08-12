import React from 'react';

const NewProductForm = ({ createProduct }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      price: formData.get('price'),
    };

    createProduct(params);
  };
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Please Enter Title" />
      </div>
      <div className="field">
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" placeholder="Please Enter Price" />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewProductForm;
