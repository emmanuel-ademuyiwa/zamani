import actionTypes from "./types";

export const addToCart = (product: any) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const getRemoveFromCartId = (itemId:number) => {
  return {
    type: actionTypes.GET_REMOVE_FROM_CART_ID,
    payload: itemId
  };
};

export const removeFromCart = (productID: number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: productID,
  };
};

export const increaseItem = (productID: number) => {
  return {
    type: actionTypes.INCREASE_ITEM,
    payload: productID,
  };
};

export const decreaseItem = (productID: number) => {
  return {
    type: actionTypes.DECREASE_ITEM,
    payload: productID,
  };
};

export const loadCurrentItem = (product: any) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: product,
  };
};

export const getSize = (itemSize: string) => {
  return {
    type: actionTypes.GET_SIZE,
    payload: itemSize,
  };
};

export const dropSize = (itemSize: string) => {
  return {
    type: actionTypes.DROP_SIZE,
    payload: itemSize,
  };
};

export const displayItem = () => {
  return {
    type: actionTypes.DISPLAY_ITEM,
  };
};

export const updateCart = (itemID: number) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: itemID,
  };
};

export const checkAddress = () => {
  return {
    type: actionTypes.CHECK_ADDRESS,
  };
};

export const checkDelivery = () => {
  return {
    type: actionTypes.CHECK_DELIVERY,
  };
};

export const handleModal = () => { 
  return { 
    type: actionTypes.CLOSE_MODAL
  }
}