import {lightTheme} from '../styles/theme';
export const initialState = {
  cart: [],
  user: [],
  theme: lightTheme,
  userToken: '',
  baseurl: 'http://192.168.1.95:8085/',
  location: 1,
  quickView: false,
};
export const getSalesProductsCount = salesProducts => salesProducts.length();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return {...state, theme: action.themeName};
    case 'ADD_SALES_PRODUCT':
      return {
        ...state,
        salesProducts: [...state.salesProducts, action.item],
      };
    case 'REMOVE_SALES_PRODUCT':
      let newSalesProducts = [...state.salesProducts];
      const index = state.salesProducts.findIndex(
        salesItem => salesItem.contextId === action.id,
      );
      if (index >= 0) {
        newSalesProducts.splice(index, 1);
      }
      return {...state, salesProducts: newSalesProducts};

    case 'REMOVE_ALL_SALES_PRODUCT':
      return {
        ...state,
        salesProducts: [],
      };
    case 'RESET_PRODUCT_COUNT':
      return {
        ...state,
        salesProducts: [...action.item],
      };
    case 'UPDATE_SALES_PRODUCT':
      let updateSalesProducts = [...state.salesProducts];
      const uItems = state.salesProducts.findIndex(
        salesItem => salesItem.contextId === action.item.contextId,
      );
      if (uItems >= 0) {
        updateSalesProducts.splice(uItems, 1);
      }
      updateSalesProducts.push(action.item);
      return {
        ...state,
        salesProducts: updateSalesProducts,
      };
    case 'ADD_USER_DETAILS':
      return {...state, user: action.details};
    case 'USER_TOKEN':
      return {...state, userToken: action.details};
    case 'SET_QUICKVIEW':
      return {...state, quickView: action.details};
    default:
      return state;
  }
};
