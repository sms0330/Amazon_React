import React from 'react';
import FormErrors from './FormErrors';

const NewProductForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      description: formData.get('description'),
      price: formData.get('price'),
    };

    props.createQuestion(params);
  };
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Please Enter Title" />
        <FormErrors forField="title" errors={props.errors} />
        <br />
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Please Enter Description"
        />
        <FormErrors forField="description" errors={props.errors} />
        <br />
      </div>
      <div className="field">
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" placeholder="Please Enter Price" />
        <FormErrors forField="price" errors={props.errors} />
        <br />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewProductForm;
