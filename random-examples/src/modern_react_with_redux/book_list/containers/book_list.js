import React, { Component } from 'react';

class BookList extends Component {
   renderList() {
      return this.props.books.map(book => {
         return <li className="list-group-item" key={book.title}>{book.title}</li>
      })
   }
   render() {
      return (
         <ul className="list-group col-lg-8">
            {this.renderList()}
         </ul>
      );
   }
}

export default BookList;