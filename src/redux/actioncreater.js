import {product} from './actiontype'

export const productActionCreator = (data) => {
  return {
    type: product,
    payload: data,
  };
};