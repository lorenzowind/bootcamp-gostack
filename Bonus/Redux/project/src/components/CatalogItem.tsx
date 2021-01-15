import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IProduct } from '../store/modules/cart/types';

import { addProductToCartRequest } from '../store/modules/cart/action';
import { IState } from '../store';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
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

      { hasFailedStockCheck && 
        <span style={{ color: 'red' }}>
          Falta de estoque
        </span> 
      }
    </article>
  )
};

export default CatalogItem;