import React, { Component } from 'react';
import productsIndexData from '../productsIndexData';

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsIndexData,
    };

    // this.createProduct = this.createQuestion.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    console.log('Productindex Component initialized');
  }

  //   createProduct(params) {
  //     this.setState(state => {
  //       return {
  //         prodcuts: [
  //           ...state.prodcuts,
  //           {
  //             id: Math.max(...state.prodcuts.map(q => q.id)) + 1,
  //             title: params.title,
  //             body: params.body,
  //           },
  //         ],
  //       };
  //     });
  //   }

  deleteProduct(id) {
    this.setState(state => {
      return {
        prodcuts: this.state.prodcuts.filter(p => p.id !== id),
      };
    });
  }

  render() {
    console.log('Product index page rendered');
    return (
      <main>
        <h1>Products</h1>
        <ul>
          {this.state.products.map((product, index) => (
            <li key={index}>
              <p>
                <h2>{product.title}</h2>
                <button
                  className="ui right floated red button"
                  onClick={() => this.deleteProduct(product.id)}
                >
                  Delete
                </button>
                <p>Price: {product.price} </p>
                <p>Created at: {new Date(product.created_at).toLocaleDateString()}</p>
                <p>Seller: {product.seller.full_name}</p>
                <br />
              </p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
