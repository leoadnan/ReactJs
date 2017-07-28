import React, {Component} from 'react';
import $ from 'jquery';

class BootstrapAlert extends Component {

   componentDidMount() {
      // When the component is mount into the DOM
      $(this.refs.alertMsg).hide();
      // Bootstrap's alert class exposes a few events for hooking into modal
      // functionality. Lets hook into one of them:
      $(this.refs.alertMsg).on('closed.bs.alert', this.handleClose.bind(this));
   }
   componentWillUnmount() {
      $(this.refs.alertMsg).off('close.bs.alert', this.handleClose.bind(this));
   }
   show() {
      $(this.refs.alertMsg).show();
   }
   hide() {
      $(this.refs.alertMsg).hide();
   }
   close() {
      $(this.refs.alertMsg).alert('close');
   }
   handleClose(event) {
      //this.refs.alertBox.close();
   }
   render() {
      return (
         <div
            className={(this.props.className) + ' alert'}
            role="alert"
            ref="alertMsg"
            id="alertMsg">
            <button
               type="button"
               className="close"
               data-dismiss="alert"
               aria-label="Close"
               onClick={this.handleClose.bind(this)}>
               <span aria-hidden="true">&times;</span>
            </button>
            <strong>Ooops!</strong>
            You reached the max limit
         </div>
      );
   }
}

export default BootstrapAlert;