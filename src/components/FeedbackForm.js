import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useGetFeedbacksQuery, useAddFeedbackMutation, useDeleteFeedbackMutation } from '../store/apiSlice';

const FeedbackForm = () => {
    const { data: feedbacks, isLoading, isError, error, refetch } = useGetFeedbacksQuery();

    const [addFeedback] = useAddFeedbackMutation();
    const [deleteFeedback] = useDeleteFeedbackMutation();

    useEffect(() => {
        if (isError) {
            console.error('Failed to fetch feedbacks:', error);
        }
    }, [isError, error]);

    const submitFeedback = async (values, { resetForm }) => {
        try {
            await addFeedback(values).unwrap();
            resetForm();
            refetch(); // Повторно загрузить обратную связь после успешной отправки
        } catch (error) {
            console.error('Failed to submit feedback:', error);
        }
    };

    const handleDeleteFeedback = async (email) => {
        try {
            await deleteFeedback(email).unwrap();
            refetch(); // Повторно загрузить обратную связь после успешного удаления
        } catch (error) {
            console.error('Failed to delete feedback:', error);
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
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: Failed to fetch feedbacks</div>
            ) : (
                <div>
                    {feedbacks.map(feedback => (
                        <div key={feedback.email}>
                            <button onClick={() => handleDeleteFeedback(feedback.email)}>Delete</button>
                            <strong>Email:</strong> {feedback.email}, <strong>Feedback:</strong> {feedback.feedback}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeedbackForm;