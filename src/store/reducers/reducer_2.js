import initialState from "../initialState";


export default function changeColorReducer(state=initialState, action){
    switch(action.type){
        case 'CHANGECOLOR': return {...state, color: action.playback};
        case 'DEFAULTCOLOR': return {...state, color: '#007bff'};
        default: return state
    }

}