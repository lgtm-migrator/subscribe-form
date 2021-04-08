import React from 'react';
import Checkbox from '../Checkbox';
import { SubscribeValidationSchema } from '../../utils/validation';
import { Formik, Field, Form } from 'formik';

const SubscribeForm = () => {
    return (
        <div className="subs-form">
            <div className="subs-form__wrapper">
                <div className="subs-form__logo">
                    <a href="https://hackernoon.com">
                        <img src="images/hackernoon.png" alt="Hackernoon logo" />
                    </a>
                </div>
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
                                <label className="subs-form__labels" htmlFor='email'>
                                    <span>Email Address</span>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="your email"
                                        required
                                    />
                                </label>
                                {touched.email && errors.email && (
                                    <div className="error-msg" style={{ marginBottom: '10px' }}>{errors.email}</div>
                                )}

                                <label className="subs-form__labels" htmlFor='email'>
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
                                    <label className='subs-form__check-label'>
                                        <Field className="subs-form__checkbox" type="checkbox" name="checked" value="gdpr" />
                                        I concent to receive promotional emails about your products and services
                                    </label>
                                    <label className='subs-form__check-label'>
                                        <Field className="subs-form__checkbox" type="checkbox" name="checked" value="featured" />
                                        gimme the techbrief
                                    </label>
                                    <label className='subs-form__check-label'>
                                        <Field className="subs-form__checkbox" type="checkbox" name="checked" value="blockchain&cryptocurrency" />
                                        do you even blockchain/crypto bruh
                                    </label>
                                    <label className='subs-form__check-label'>
                                        <Field className="subs-form__checkbox" type="checkbox" name="checked" value="programming" />
                                        I like clean code and I cannot lie
                                    </label>
                                    <label className='subs-form__check-label'>
                                        <Field className="subs-form__checkbox" type="checkbox" name="checked" value="startups&feature&technology" />
                                        send me stories about startups and the future of everything
                                    </label>
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