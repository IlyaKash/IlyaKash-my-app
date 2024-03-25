import initialState from "../initialState";
import ACTION_1 from '../actions/action_1'

export default function countReducer(state=initialState, action){
    switch(action.type){
        case 'INCREMENT': return {...state, count: state.count+1};
        case 'DECREMENT': return {...state, count: state.count-1};
        default: return state
    }

}