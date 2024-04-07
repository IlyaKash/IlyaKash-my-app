import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import add_feedback from '../store/actionCreators/action_add_feedback';
import store from '../store/store';
import { useSelector, useDispatch } from 'react-redux';

const FeedbackForm = () => {
    //const [feedbacks, setFeedbacks] = useState([]);
    const feedbacks=useSelector(state=>state.feedback.feedbacks);
    const dispatch=useDispatch();

    useEffect(() => {
        loadFeedbacks();
    }, []);

    const loadFeedbacks = async () => {
        const response = await fetch('http://localhost:8000/api/feedbacks');
        const data = await response.json();
        
        dispatch(add_feedback(data));
        console.log(store.getState())
        //setFeedbacks(data);
    };

    const submitFeedback = async (values, { resetForm }) => {
        const response = await fetch('http://localhost:8000/api/feedbacks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            loadFeedbacks();
            resetForm();
        } else {
            console.error('Failed to submit feedback');
        }
    };

    return (
        <div>
            <h1>Feedback App</h1>
            <h2>Submit Feedback</h2>
            <Formik
                initialValues={{ email: '', feedback: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    }
                    if (!values.feedback) {
                        errors.feedback = 'Required';
                    }
                    return errors;
                }}
                onSubmit={submitFeedback}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="feedback">Feedback:</label>
                            <Field as="textarea" name="feedback" />
                            <ErrorMessage name="feedback" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

            <h2>All Feedbacks</h2>
            <div>
                {feedbacks.map(feedback => (
                    <div key={feedback.email}>
                        <strong>Email:</strong> {feedback.email}, <strong>Feedback:</strong> {feedback.feedback}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackForm;