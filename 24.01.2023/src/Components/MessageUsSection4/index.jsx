import React from 'react'
import './style.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function MessageUsSection4() {
    return (

        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>
            <div className='form'>
                <Form>
                    <div className='first-last'>
                        <label htmlFor="firstName" ></label>
                        <Field className='firstname' placeholder='First Name' name="firstName" type="text" />
                        

                        <label htmlFor="lastName"></label>
                        <Field name="lastName" className='firstname' placeholder='Last Name' type="text" />
                        
                    </div>

                    <div className='subj-email'>
                        <label htmlFor="Subject"></label>
                        <Field name="Subject" className='Subject' placeholder='Subject' type="text" />


                        <label htmlFor="email"></label>
                        <Field name="email" className='Subject' placeholder='Email Address' type="email" />
                        <ErrorMessage className='error' name="email" />

                        <label htmlFor="description"></label>
                        <Field name="description" className='Subject' placeholder='description' type="description" />
                        
                    </div>
                    <button className='btn1' type="submit">Submit</button>
                </Form>
            </div>
        </Formik>
    )
}

export default MessageUsSection4