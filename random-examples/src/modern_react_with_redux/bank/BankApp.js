import React, {Component} from 'react';
import PropTypes from 'prop-types';
import bankStore from './bankStore';
import constants from './constants/constants';
import { connect } from 'react-redux';
import ActionCreator from './actions/bankActionCreators';

class BankApp extends Component {
   handleWithdraw() {
      this.props.onWithdraw(this.refs.abcxyz.value);
      this.refs.abcxyz.value = '';
   }
   handleDeposit() {
      this.props.onDeposit(this.refs.abcxyz.value);
      this.refs.abcxyz.value = '';
   }
   render() {
      return (
         <div>
            <link rel="stylesheet" href="/flux.css"/>
            <header>
               <img src="//www.pro-react.com/logos/redux-bank.svg" width="150"/>Redux Bank
            </header>
            <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
            <div className="atm">
               <input type="text" placeholder="Enter Ammount" ref="abcxyz" name="abcxyz" id="abcxyz"/>
               <button onClick ={this.handleWithdraw.bind(this)}>Withdraw</button>
               <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
            </div>
            <br/>
            <br/>
            <div className="exchange" onClick={this.props.onToggle}>
               <strong>Exchange Rates:</strong>
               <div style={this.props.showExchange ? {display: 'none'} : {display: 'block'}}>
                  <strong>$1 USD =</strong>
                  <span className="rate">0.9990 EUR</span> <span className="rate">0.7989 GBP</span> <span className="rate">710.15 JPY</span>
               </div>
            </div>
         </div>
      );
   }
}

BankApp.propTypes = {
   balance: PropTypes.number,
   onDeposit: PropTypes.func,
   onWithdraw: PropTypes.func,
   onToggle: PropTypes.func
};

const mapStateToProps = (state) => {
   return {
      balance: state.balance.balance,
      showExchange: state.ui.showInfo
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      onDeposit: (amount) => dispatch(ActionCreator.depositIntoAccount(amount)),
      onWithdraw: (amount) => dispatch(ActionCreator.withdrawFromAccount(amount)),
      onToggle: () => dispatch(ActionCreator.toggleInfo())
   }
}
const BankAppConnect = connect(mapStateToProps, mapDispatchToProps)(BankApp)

export default BankAppConnect;