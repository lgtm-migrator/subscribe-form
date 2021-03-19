import React from 'react';
import { useFormik } from 'formik';
import Input from '../Input';

const UnsubscribeForm = () => {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    });
    return (
        <div className="subs-form">
            <div className="subs-form__wrapper"></div>
            <div className="subs-form__logo">
                <a href="https://hackernoon.com">
                    <img src="images/hackernoon.png" alt="Hackernoon logo" />
                </a>
            </div>
            <form className="subs-form__form" onSubmit={formik.handleSubmit}>
                <div className="subs-form__inner">
                    <p className="subs-form__text left strong">Unsubscribe</p>
                    <p className="subs-form__text left">
                        We're sorry to see you go! Enter your email address to unsubscribe from this list.
			    </p>
                </div>
                <div className="subs-form__inputs">
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your email"
                        htmlFor="email"
                        spanLabel="Email Address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
                <button className="subs-form__btn unsubscribe" type="submit">Unsubscribe</button>
            </form>
        </div>
    )
}

export default UnsubscribeForm;