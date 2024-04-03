import {Formik, Form, Field} from 'formik';
import React, { useCallback } from 'react';
import Container from './container';

const Lab5Component=()=>{
    const handleSubmit=useCallback((values, actions)=>{
        console.log(values);
        actions.setSubmitting(false);
    }, []);

    return(
        <>
            <Container>
                <h1>Лабараторная №5</h1>
                <Formik initialValues={{userName: '', email: '', password: '', sex: ''}}
                onSubmit={handleSubmit}
                >
                    {
                        ({values, handleChange, handleSubmit, isSubmitting})=> (
                            <Form style={{ width: '200px', margin: '0 auto' }}>
                                <div style={{ display: 'flex', flexDirection: 'column'}}>
                                <Field
                                    label="User Name"
                                    name="userName"
                                    type="text"
                                    placeholder="your name"
                                    onChange={handleChange}
                                    value={values.userName}
                                /> 
                                <Field
                                    label="Email"
                                    name="email"
                                    type="text"
                                    placeholder="something@gmail.com"
                                    onChange={handleChange}
                                    value={values.email}
                                /> 
                                <Field
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="********"
                                    onChange={handleChange}
                                    value={values.password}
                                /> 
                                <label htmlFor="sex">Ваш пол:</label>
                                <Field
                                    as="select"
                                    name="sex"
                                    id="sex"
                                >
                                    <option value="">Выберите пол</option>
                                    <option value="male">Мужской</option>
                                    <option value="female">Женский</option>
                                </Field>
                                <button type='submit' disabled={isSubmitting}>Submit</button>
                                </div>


                            </Form>
                        )
                    }
                    
                </Formik>
            </Container>
        </>
    );
};

export default Lab5Component;
