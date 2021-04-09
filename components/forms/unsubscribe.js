import React from 'react';
import { UnSubscribeValidationSchema } from '../../utils/validation';
import { Formik, Form } from 'formik';
import Email from '../Email';
import Logo from '../../UI/Logo';

const UnsubscribeForm = () => {
    return (
        <div className="subs-form">
            <div className="subs-form__wrapper">
                <Logo />
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
                                <Email />
                                {touched.email && errors.email && (
                                    <div className="error-msg">{errors.email}</div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="subs-form__btn unsubscribe"
                                style={{ display: 'block', margin: '25px auto' }}
                                disabled={errors.email}
                            >Unsubscribe</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default UnsubscribeForm;