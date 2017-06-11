import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bankStore from './bankStore';
import constants from './constants/constants';
import BankApp from './BankApp';
import ActionsCreator from './actions/bankActionCreators';
import {Provider} from 'react-redux';

class BankAppContainer extends Component {
   // constructor(...args){
      // super(...args);
      // bankStore.dispatch({
      //    type:constants.CREATE_ACCOUNT
      // });
      // this.state = {
      //    balance: bankStore.getState().balance
      // }
   // }

   // componentDidMount() {
   //    this.unsubscribe = bankStore.subscribe(()=>{
   //       this.setState({
   //          balance: bankStore.getState().balance
   //       })
   //    });
   // }

   // componentWillUnmount() {
   //    this.unsubscribe();
   // }
   render() {
      return (
         <Provider store={bankStore}>
         <BankApp
            //balance={bankStore.getState().balance}
            //onDeposit={(amount)=> {
               //bankStore.dispatch({type: constants.DEPOSIT_INTO_ACCOUNT, payload:amount})
              // bankStore.dispatch(ActionsCreator.depositIntoAccount(amount))
            //}}
            //onWithdraw={(amount)=> {
               //bankStore.dispatch({type: constants.WITHDRAW_FROM_ACCOUNT, payload:amount})
              // bankStore.dispatch(ActionsCreator.withdrawFromAccount(amount))
            //}}
         />
         </Provider>
      );
   }
}

BankAppContainer.propTypes = {

};

export default BankAppContainer;