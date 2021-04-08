import React from 'react';
import { SubscribeValidationSchema } from '../../utils/validation';
import { Formik, Field, Form } from 'formik';
import SubCheckboxGroup from '../Checkbox/Subscribe';
import Email from '../Email';
import Logo from '../../UI/Logo';

const SubscribeForm = () => {
    return (
        <div className="subs-form">
            <div className="subs-form__wrapper">
                <Logo />
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        checked: []
                    }}
                    validationSchema={SubscribeValidationSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ errors, touched, isValidating }) => (
                        <Form>
                            <div className="subs-form__inner">
                                <p className="subs-form__text">
                                    be the first to read the freshest tech stories from <a className="subs-form__link"
                                        href="http://hackernoon.com/">hackernoon.com </a>
                                    by subscribing to <a className="subs-form__link" href="https://www.techbrief.hackernoon.com/">the tech
                                        brief</a>:
                                    an indiscriminate daily digest from our RSS feed for your reading pleasure and professional
                                    development.
                                </p>

                                <p className="subs-form__text">
                                    oh! and if you let us know which of our editorial streams most floats your boat,
                                    we'll also send you the occasional curated letter from one of the humans on
                                    our team of editors - all of whom are far too busy
                                    publishing stories to spam you in any way, we promise.
					            </p>
                            </div>

                            <div className="subs-form__inputs" style={{ marginTop: '30px' }}>
                                <Email />
                                {touched.email && errors.email && (
                                    <div className="error-msg" style={{ marginBottom: '10px' }}>{errors.email}</div>
                                )}

                                <label className="subs-form__labels" htmlFor='name'>
                                    <span>First Name</span>
                                    <Field
                                        name="name"
                                        type="text"
                                        placeholder="your first name"
                                        required
                                    />
                                </label>
                                {touched.name && errors.name && (
                                    <div className="error-msg">{errors.name}</div>
                                )}
                            </div>

                            <div className="subs-form__checkboxes">
                                <p>how can hacker noon improve your inbox?</p>
                                <div role="group" aria-labelledby="checkbox-group"
                                    className="subs-form__checkboxes" style={{ padding: '0 0 0 5px', marginBottom: '5px' }}>
                                    <SubCheckboxGroup />
                                </div>
                            </div>

                            <div style={{ display: 'none' }}>
                                <label htmlFor="hp">HP</label><br />
                                <input type="text" name="hp" id="hp" />
                            </div>
                            <input type="hidden" name="list" value="OMTKMVEF3BfWHMve4EY8925g" />
                            <input type="hidden" name="subform" value="yes" />

                            <button
                                id="submit"
                                type="submit"
                                name="submit"
                                className="subs-form__btn"
                                style={{ display: 'block', margin: '0 auto' }}
                                disabled={errors.name || errors.email}
                            >Get great stories by email</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
};

export default SubscribeForm;