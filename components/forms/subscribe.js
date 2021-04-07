import React from 'react';
import { useFormik } from 'formik';
import { SUBSCRIBE_ACTION } from '../../constants/path';
import Input from '../Input';
import Email from '../Email';
import Checkbox from '../Checkbox';
import { SubscribeValidationSchema } from '../../utils/validation';

const SubscribeForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: ''
        },
        validationSchema: SubscribeValidationSchema
    });
    return (
        <div className="subs-form">
            <div className="subs-form__wrapper">
                <div className="subs-form__logo">
                    <a href="https://hackernoon.com">
                        <img src="images/hackernoon.png" alt="Hackernoon logo" />
                    </a>
                </div>
                <form className="subs-form__form" action={SUBSCRIBE_ACTION} method="POST" acceptCharset="utf-8">
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

                    <div className="subs-form__inputs">
                        <Email
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-msg" style={{ marginBottom: '10px' }}>{formik.errors.email}</div>
                        ) : null}

                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="your first name"
                            htmlFor="name"
                            spanLabel="First Name"
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error-msg">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="subs-form__checkboxes">
                        <p>how can hacker noon improve your inbox?</p>
                        <Checkbox
                            id="gdpr"
                            name="gdpr"
                            text="I concent to receive promotional emails about your products and services"
                        />

                        <Checkbox
                            id="featured"
                            name="bruh"
                            text="gimme the techbrief"
                        />

                        <Checkbox
                            id="blockchain&cryptocurrency"
                            name="bruh"
                            text="do you even blockchain/crypto bruh"
                        />

                        <Checkbox
                            id="programming"
                            name="cleancode"
                            text="I like clean code and I cannot lie"
                        />

                        <Checkbox
                            id="startups&feature&technology"
                            name="stories"
                            text="send me stories about startups and the future of
							everything"
                        />
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
                        disabled={formik.errors.name || formik.errors.email}
                    >Get great stories by email</button>
                </form>
            </div>
        </div >
    )
};

export default SubscribeForm;