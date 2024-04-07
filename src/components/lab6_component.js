import React, { useCallback } from 'react';
import Container from './container';
import {Formik, Form, Field} from 'formik';
import FeedbackForm from './FeedbackForm';


const Lab6Component =()=>{

    const handleSubmit=useCallback((values, actions)=>{
        console.log(values);
        actions.setSubmitting(false);
    }, []);


    return(
        <>
            
            <Container>
                <h1>Лабараторная №6</h1>
                <FeedbackForm></FeedbackForm>
                {/* <Formik initialValues={{email: '', feedback: ''}}
                onSubmit={handleSubmit}
                >
                    {
                        ({values, handleChange, isSubmitting})=> (
                            <Form style={{ width:'300px', margin: '0' }}>
                                <div style={{ display: 'block'}}>
                                <Field
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="something@gmail.com"
                                    onChange={handleChange}
                                    value={values.email}
                                    style={{display:'block'}}
                                /> 
                                <Field
                                    label="Feedback"
                                    name="feedback"
                                    type="text"
                                    placeholder="ваше обращение"
                                    onChange={handleChange}
                                    value={values.feedback}
                                    style={{display:'block', height:'200px', width:'400px', margin: '30px 0 0 0'}}
                                /> 
                                <button type='submit' disabled={isSubmitting}>Submit</button>
                                </div>


                            </Form>
                        )
                    }
                    
                </Formik> */}
                
            </Container>
        </>
    );
}


export default Lab6Component;