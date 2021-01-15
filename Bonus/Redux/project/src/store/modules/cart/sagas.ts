import { all, takeLatest } from 'redux-saga/effects';

function checkProductStock() {
  console.log('Added');
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock),
]);