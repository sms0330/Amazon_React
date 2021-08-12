import React from 'react';

import NewProductForm from './NewProductForm';
import { Product } from '../requests';

const ProductNewPage = props => {
  function createProduct(params) {
    Product.create(params).then(product => {
      const id = product.id;
      props.history.push(`/products/${id}`);
    });
  }

  return (
    <div className="header">
      <NewProductForm createProduct={createProduct} />
    </div>
  );
};

export default ProductNewPage;
