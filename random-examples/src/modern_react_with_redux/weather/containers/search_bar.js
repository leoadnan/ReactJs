import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions'

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
   }
   onFormSubmit(event){
      event.preventDefault();
      
      //We need to go and fetch weather data.
      this.props.fetchWeather(this.state.term);
      this.state.term='';
   }
   render() {
      return (
         <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
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

function mapDispatchToProps(dispatch){
   return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);