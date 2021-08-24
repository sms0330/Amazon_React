import React, { Component } from 'react';
import FormErrors from './FormErrors';

export default class NewProductForm extends Component {
  render() {
    return (
      <form className="ui form" onSubmit={this.props.createProduct}>
        <div className="field">
          <label htmlFor="title">Title</label>

          <FormErrors errors={this.props.errors} formField="title" />
          <input
            type="text"
            onChange={e => {
              this.props.onChange({ title: e.target.value });
            }}
            value={this.props.product.title}
            name="title"
            id="title"
            placeholder="Please Enter Title"
          />
        </div>
        <div className="field">
          <label htmlFor="price">Price</label>

          <FormErrors errors={this.props.errors} formField="price" />
          <input
            type="number"
            onChange={e => {
              this.props.onChange({ price: e.target.value });
            }}
            value={this.props.product.price}
            name="price"
            id="price"
            placeholder="Please Enter Price"
          />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>

          <FormErrors errors={this.props.errors} formField="description" />
          <input
            type="text"
            onChange={e => {
              this.props.onChange({ description: e.target.value });
            }}
            value={this.props.product.description}
            name="description"
            id="description"
            placeholder="Please Enter Description"
          />
        </div>
        <button className="ui primary button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
