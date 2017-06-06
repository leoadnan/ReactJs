import React, {Component} from 'react';

class SearchBar extends Component {
   constructor(props){
      super(props);
      this.state = {
         term: ''
      }      
   }
   onInputChange(event){
      this.setState({
         term: event.target.value
      });
      event.preventDefault();
   }
   render() {
      return (
         <form className="input-group">
            <input 
               type="text" 
               name="search" 
               className="form-control" 
               placeholder="Get a five-day forecast in your favourite cities" 
               value={this.state.term}
               onChange={this.onInputChange.bind(this)}
            />
            <div className="input-group-btn">
               <button className="btn btn-default" type="submit">
                  <span className="glyphicon glyphicon-search"></span>
               </button>
            </div>
         </form>
      );
   }
}

export default SearchBar;