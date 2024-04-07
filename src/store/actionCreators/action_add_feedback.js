function add_feedback(value){
    return{
        type: 'ADDFEEDBACK',
        payload: value,
    };
}

export default add_feedback;