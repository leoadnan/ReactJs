import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions';
import BookDetail from './book_detail';

class BookList extends Component {
   renderList() {
      return this.props.books
         .map(book => {
            return <li
               onClick={() => this.props.selectBook(book)}
               className="list-group-item"
               key={book.title}>
               {book.title}
            </li>
         })
   }
   render() {
      return (
         <div>
            <ul className="list-group col-lg-4">
               {this.renderList()}
            </ul>
            <BookDetail/>
         </div>
      );
   }
}

function mapStateToProps(state) {
   //whatever it returns will show up as props inside of booklist
   return {books: state.books}
}
function mapDispatchToProps(dispatch) {
   // whenever selectbook is called, the result should be passed too all of our
   // reducers
   return bindActionCreators({
      selectBook: selectBook
   }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);