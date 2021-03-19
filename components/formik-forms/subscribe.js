import React from 'react';
import { Formik, Field, Form } from 'formik';
import { SUBSCRIBE_ACTION } from '../../constants/path';

const SignupForm = () => (
    <div className="subs-form">
        <div className="subs-form__wrapper">
            <div className="subs-form__logo">
                <a href="https://hackernoon.com">
                    <img src="images/hackernoon.png" alt="Hackernoon logo" />
                </a>
            </div>
            <div className="subs-form__inner">
                <p className="subs-form__text">
                    be the first to read the freshest tech stories from <a className="subs-form__link"
                        href="http://hackernoon.com/">hackernoon.com</a>
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
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    checked: []
                }}
                onSubmit={(values) => {
                    console.log(JSON.stringify(values));
                    fetch(SUBSCRIBE_ACTION, {
                        headers: {
                            "Content-type": "application/json"
                        },
                        method: "POST",
                        mode: "no-cors",
                        body: JSON.stringify(values)
                    }).then(res => console.log(res))
                }}
            >
                <Form className="subs-form__form" action="">
                    <div className="subs-form__inputs">
                        <label className="subs-form__labels" htmlFor="email">
                            <span>Email Address</span>
                            <Field
                                id="email"
                                name="email"
                                placeholder="your email"
                                type="email"
                            />
                        </label>
                        <label className="subs-form__labels" htmlFor="firstName">
                            <span>First Name</span>
                            <Field
                                id="name"
                                name="name"
                                placeholder="your first name"
                                type="text"
                            />
                        </label>
                    </div>

                    <div role="group" aria-labelledby="checkbox-group"
                        className="subs-form_checkboxes">
                        <p >how can hacker noon improve your inbox?</p>
                        <label className="subs-form__check-label">
                            <Field className="subs-form__checkbox" type="checkbox" name="checked" value="gdpr" id="gdpr" />
                            <span className="subs-form__checkbox-text">I concent to receive promotional emails about your products and services
						            </span>
                        </label>
                        <label className="subs-form__check-label">
                            <Field className="subs-form__checkbox" type="checkbox" name="checked" value="bruh" id="featured" />
                            <span className="subs-form__checkbox-text">gimme the techbrief</span>
                        </label>
                        <label className="subs-form__check-label">
                            <Field className="subs-form__checkbox" type="checkbox" name="checked" value="blockchain&cryptocurrency" id="blockchain&cryptocurrency" />
                            <span className="subs-form__checkbox-text">do you even blockchain/crypto bruh</span>
                        </label>
                        <label className="subs-form__check-label">
                            <Field className="subs-form__checkbox" type="checkbox" name="checked" value="cleancode" id="programming" />
                            <span className="subs-form__checkbox-text">I like clean code and I cannot lie</span>
                        </label>
                        <label className="subs-form__check-label">
                            <Field className="subs-form__checkbox" type="checkbox" name="checked" value="stories" id="startups&feature&technology" />
                            <span className="subs-form__checkbox-text">send me stories about startups and the future of
							        everything</span>
                        </label>
                    </div>

                    <div style={{ display: 'none' }}>
                        <label htmlFor="hp">HP</label><br />
                        <input id="hp" name="hp" type="text" />
                    </div>
                    <input name="list" type="hidden" value="OMTKMVEF3BfWHMve4EY8925g" />
                    <input name="subform" type="hidden" value="yes" />

                    <button
                        id="submit"
                        name="submit"
                        type="submit"
                        className="subs-form__btn"
                    >Get great stories by email</button>
                </Form>
            </Formik>
        </div>
    </div >
)

export default SignupForm;