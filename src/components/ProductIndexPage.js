import React, { Component } from 'react';
import prodcutsIndexData from '../prodcutsIndexData';

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodcuts: prodcutsIndexData,
    };

    // this.createProduct = this.createQuestion.bind(this);
    // this.deleteProduct = this.deleteProduct.bind(this);
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

  //   deleteProduct(id) {
  //     this.setState(state => {
  //       return {
  //         prodcuts: this.state.prodcuts.filter(q => q.id != id),
  //       };
  //     });
  //   }

  render() {
    console.log('Product index page rendered');
    return (
      <main>
        {this.state.prodcuts.map(p => {
          return (
            <div key={p.id}>
              <h1>
                {p.id} - {p.title}
              </h1>
              <h4>Price: ${p.price}</h4>
              <h5>Create Date: {new Date(p.created_at).toLocaleDateString()}</h5>
              <p>
                <small>Seller: {p.seller.full_name} </small>
              </p>
              {/* {<button onClick={() => this.deleteProduct(p.id)}>Delete</button>} */}
            </div>
          );
        })}
      </main>
    );
  }
}
