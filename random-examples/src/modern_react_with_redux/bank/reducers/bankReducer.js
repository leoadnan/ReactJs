import constants from '../constants/constants';
import {combineReducers} from 'redux';
import update from 'react-addons-update';

const initialState = {
   initialBalance: {
      balance: 0
   },
   initialUI: {
      showInfo: true
   }
}

const balanceReducer = (state = initialState.initialBalance, action) => {
   switch (action.type) {
         // case constants.CREATE_ACCOUNT :    return state;
      case constants.DEPOSIT_INTO_ACCOUNT:
         return {
            balance: state.balance + parseFloat(action.payload)
         };
      case constants.WITHDRAW_FROM_ACCOUNT:
         return {
            balance: state.balance - parseFloat(action.payload)
         };
      default:
         return state;
   }
}

const uiReducer = (state = initialState.initialUI, action) => {
   switch(action.type){
      case constants.TOGGLE_INFO:
         return update(state, {showInfo: {$apply: currentState=>!currentState}});
      default:
         return state;
   }
};
const bankReducer = combineReducers({balance: balanceReducer, ui: uiReducer});

export default bankReducer;