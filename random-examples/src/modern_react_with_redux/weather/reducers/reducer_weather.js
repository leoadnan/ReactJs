import {FETCH_WEATHER} from '../actions'
export default function(state=[], action){
   switch(action.type){
      case FETCH_WEATHER : 
			// console.log(action)
        //  return state.concat([action.payload.data]);
         return [...state, action.payload.data];
   }
   return state;
}