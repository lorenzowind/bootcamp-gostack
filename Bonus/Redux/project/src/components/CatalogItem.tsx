import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../store/modules/cart/types';

import { addProductToCart } from '../store/modules/cart/action';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      <strong>{` - ${product.title} `}</strong>
      
      <span>{product.price}</span>
    </article>
  )
};

export default CatalogItem;