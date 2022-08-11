import actionTypes from "./types";



export const addToCart = (product:any) => { 
    return { 
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (productID:number) => { 
    return { 
        type: actionTypes.REMOVE_FROM_CART,
        payload: productID
    }
}

export const increaseItem = (productID:any) => {
    return { 
        type: actionTypes.INCREASE_ITEM,
        payload: productID
    }
}

export const loadCurrentItem = (product:any) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: product,
  };
};