import React from 'react';
import { UnSubscribeValidationSchema } from '../../utils/validation';
import { Formik, Field, Form } from 'formik';

const UnsubscribeForm = () => {
    return (
        <div className="subs-form">
            <div className="subs-form__wrapper"></div>
            <div className="subs-form__logo">
                <a href="https://hackernoon.com">
                    <img src="images/hackernoon.png" alt="Hackernoon logo" />
                </a>
            </div>
            <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={UnSubscribeValidationSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, isValidating }) => (
                    <Form>
                        <div className="subs-form__inner">
                            <p className="subs-form__text left strong">Unsubscribe</p>
                            <p className="subs-form__text left">
                                We're sorry to see you go! Enter your email address to unsubscribe from this list.
			                </p>
                        </div>
                        <div className="subs-form__inputs">
                            <label className="subs-form__labels" htmlFor='email'>
                                <span>Email</span>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    required
                                />
                            </label>
                            {touched.email && errors.email ? (
                                <div className="error-msg">{errors.email}</div>
                            ) : null}
                        </div>
                        <button className="subs-form__btn unsubscribe" type="submit">Unsubscribe</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UnsubscribeForm;