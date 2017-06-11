import constants from '../constants/constants';

const bankActionCreators = {
   depositIntoAccount(amount) {
      return {type: constants.DEPOSIT_INTO_ACCOUNT, payload: amount};
   },
   withdrawFromAccount(amount) {
      return {type: constants.WITHDRAW_FROM_ACCOUNT, payload: amount};
   },
   toggleInfo() {
      return {type: constants.TOGGLE_INFO};
   }
};
export default bankActionCreators;
