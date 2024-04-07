import initialState from "../initialState";

export default function feedbackReducer(state=initialState, action){
    switch(action.type){
        case 'ADDFEEDBACK': return {...state, 
            feedbacks: [...action.payload]
            };
        default: return state
    }

}