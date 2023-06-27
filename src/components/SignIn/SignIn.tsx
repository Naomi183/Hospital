import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    // Redirect to the dashboard and pass user information
    navigate('/dashboard', { state: { user: values } });
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="signin-body">
      <div className="signin-container">
        <h2 className="signin-title">Sign In to Carefinder</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          <Form className="signin-form">
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" className="signin-input" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" className="signin-input" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" className="signin-submit">Sign In</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
