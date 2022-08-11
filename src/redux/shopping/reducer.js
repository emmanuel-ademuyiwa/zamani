import actionTypes from "./types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: '',
            price: ''
        },
        {
            id: 2,
            title: '',
            price: ''
        },
        {
            id: 3,
            title: '',
            price: ''
        },
        {
            id: 4,
            title: '',
            price: ''
        },
        {
            id: 5,
            title: '',
            price: ''
        },
        {
            id: 6,
            title: '',
            price: ''
        },
        {
            id: 7,
            title: '',
            price: ''
        },
        {
            id: 8,
            title: '',
            price: ''
        }
    ],  // {id, title, desc, price}
    cart: [], // {id, title, desc, price, qty}
    currentItem: {},
    address: false,
    delivery: false
}

export const shopReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) { 
        case actionTypes.ADD_TO_CART:
            // Get the Item data from the products
            // const item = state.products.filter(product => product.id === action.payload.id)
            // Check if the item is already in the cart
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(
                        item => item.id === action.payload.id ? 
                        {...item, qty: item.qty + 1} : 
                    item 
                ) : 
                [...state.cart, {...action.payload, qty: 1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.INCREASE_ITEM:
            return {
                ...state,
                cart: state.cart.map(
                    item => item.id === action.payload.id ? 
                    {...item, qty: item.qty + 1} 
                    : 
                    item
                )
            }
        case actionTypes.DECREASE_ITEM:
            return {
                ...state,
                cart: state.cart.map(
                    item => item.id === action.payload.id ? 
                    {...item, qty: item.qty - 1} 
                    : 
                    item
                )
            }

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        
        default:
            return state
    }
}


export default shopReducer;
