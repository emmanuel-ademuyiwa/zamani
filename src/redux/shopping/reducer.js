import actionTypes from "./types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "",
      price: "",
    },
    {
      id: 2,
      title: "",
      price: "",
    },
    {
      id: 3,
      title: "",
      price: "",
    },
    {
      id: 4,
      title: "",
      price: "",
    },
    {
      id: 5,
      title: "",
      price: "",
    },
    {
      id: 6,
      title: "",
      price: "",
    },
    {
      id: 7,
      title: "",
      price: "",
    },
    {
      id: 8,
      title: "",
      price: "",
    },
  ], // {id, title, desc, price}
  cart: [], // {id, title, desc, price, qty}
  currentItem: {},
  size: "null",
  removeItemId: null,
  sizeList: [
    {
      size: "XS",
      text: "25.6inch / 65cm",
    },
    {
      size: "S",
      text: "27.2inch / 69cm",
    },
    {
      size: "M",
      text: "28.7inch / 73cm",
    },
    {
      size: "L",
      text: "230.7inch / 78cm",
    },
    {
      size: "XL",
      text: "32.7inch / 83cm",
    },
  ],
  address: false,
  delivery: false,
  display: false,
  modal: false,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get the Item data from the products
      // const item = state.products.filter(product => product.id === action.payload.id)
      // Check if the item is already in the cart
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, qty: 1, size: state.size }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case actionTypes.GET_REMOVE_FROM_CART_ID:
      return {
        ...state,
        removeItemId: action.payload,
      };
    case actionTypes.INCREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case actionTypes.DECREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case actionTypes.GET_SIZE:
      return {
        ...state,
        size: action.payload,
      };

    case actionTypes.DROP_SIZE:
      return {
        ...state,
        size: action.payload,
      };

    case actionTypes.DISPLAY_ITEM:
      return {
        ...state,
        display: !state.display,
      };
    case actionTypes.UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, size: state.size } : item
        ),
      };
    case actionTypes.CHECK_ADDRESS:
      return {
        ...state,
        address: true,
      };
    case actionTypes.CHECK_DELIVERY:
      return {
        ...state,
        address: true,
        delivery: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
