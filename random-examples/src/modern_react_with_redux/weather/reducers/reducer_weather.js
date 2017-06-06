import {FETCH_WEATHER} from '../actions'
export default function(state=[], action){
   switch(action.type){
      case FETCH_WEATHER : 
			//console.log(action)
         return state.concat([action.payload.data]);
         //return [action.playload.data, ...state];
   }
   return state;
}