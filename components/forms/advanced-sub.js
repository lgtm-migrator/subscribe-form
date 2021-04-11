import Image from 'next/image';
import Checkbox from '../Checkbox';
import { Formik, Form } from 'formik';
import * as styles from '../../styles/style.module.css';

const AdvancedSubPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.left}>
                    <div className={styles.left__wrapper}>
                        <div className={styles.left__img}>
                            <img src="/adv-page-cat.jpg" alt="cat" />
                        </div>
                        <h1 className={styles.left__title}>
                            Newsletters
					    </h1>
                        <p className={styles.left__subtitle}>
                            Receive the latest emerging technology news in your inbox.
					    </p>
                        <p className={styles.left__text}>
                            Select the newsletters you’d like to receive and enter your email below to sign up. <a className={styles.link} style={styled_a}
                                href="#">Sign in</a> to manage your existing AdvancedSubPage.
					    </p>
                    </div>
                </div>

                <form className={styles.form}>
                    <div className={styles.form__body}>

                        <div className={styles.form__top}>
                            <ul className={styles.checkbox__list}>

                                <li className={styles.checkbox__item}>
                                    <label className={styles.checkbox__label}>

                                        <span className={styles.checkbox__div}>
                                            <input type='checkbox' className={styles.checkbox__input} />
                                            <span className={styles.checkbox__box}></span>
                                        </span>

                                        <span className={styles.checkbox__content}>
                                            <h6 className={styles.checkbox__period}>
                                                Weekdays
										</h6>
                                            <h4 className={styles.checkbox__title}>
                                                Thematics
										</h4>
                                            <span className={styles.checkbox__description}>
                                                Your daily dose of what's up in emerging technology
										</span>
                                        </span>
                                    </label>
                                </li>

                                <li className={styles.checkbox__item}>
                                    <label className={styles.checkbox__label}>

                                        <span className={styles.checkbox__div}>
                                            <input type='checkbox' className={styles.checkbox__input} />
                                            <span className={styles.checkbox__box}></span>
                                        </span>

                                        <span className={styles.checkbox__content}>
                                            <h6 className={styles.checkbox__period}>
                                                Mondays
										    </h6>
                                            <h4 className={styles.checkbox__title}>
                                                Podcasts
										    </h4>
                                            <span className={styles.checkbox__description}>
                                                Your daily dose of what's up in emerging technology
										</span>
                                        </span>
                                    </label>
                                </li>

                                <li className={styles.checkbox__item}>
                                    <label className={styles.checkbox__label}>

                                        <span className={styles.checkbox__div}>
                                            <input type='checkbox' className={styles.checkbox__input} />
                                            <span className={styles.checkbox__box}></span>
                                        </span>

                                        <span className={styles.checkbox__content}>
                                            <h6 className={styles.checkbox__period}>
                                                Saturdays
										    </h6>
                                            <h4 className={styles.checkbox__title}>
                                                Blockchain & Cryptocurrencies
										    </h4>
                                            <span className={styles.checkbox__description}>
                                                Your daily dose of what's up in emerging technology
										</span>
                                        </span>
                                    </label>
                                </li>
                            </ul>

                            <ul className={styles.checkbox__list}>

                                <li className={styles.checkbox__item}>
                                    <label className={styles.checkbox__label}>

                                        <span className={styles.checkbox__div}>
                                            <input type='checkbox' className={styles.checkbox__input} checked readOnly />
                                            <span className={styles.checkbox__box}></span>
                                        </span>

                                        <span className={styles.checkbox__content}>
                                            <h6 className={styles.checkbox__period}>
                                                Fridays
										    </h6>
                                            <h4 className={styles.checkbox__title}>
                                                TechBrief
										    </h4>
                                            <span className={styles.checkbox__description}>
                                                Your daily dose of what's up in emerging technology
										</span>
                                            <span className={styles.checkbox__mark}>
                                                <span className={`${styles.checkbox__span} ${styles.green}`}>
                                                    subscriber exclusive
											</span>
                                            </span>
                                        </span>
                                    </label>
                                </li>

                                <li className={styles.checkbox__item}>
                                    <label className={styles.checkbox__label}>

                                        <span className={styles.checkbox__div}>
                                            <input type='checkbox' className={styles.checkbox__input} />
                                            <span className={styles.checkbox__box}></span>
                                        </span>

                                        <span className={styles.checkbox__content}>
                                            <h6 className={styles.checkbox__period}>
                                                Monthly
										    </h6>
                                            <h4 className={styles.checkbox__title}>
                                                Gaming
										    </h4>
                                            <span className={styles.checkbox__description}>
                                                Your daily dose of what's up in emerging technology
										</span>
                                        </span>
                                    </label>
                                </li>

                                <li className={styles.checkbox__item}>
                                    <label className={styles.checkbox__label}>

                                        <span className={styles.checkbox__div}>
                                            <input type='checkbox' className={styles.checkbox__input} />
                                            <span className={styles.checkbox__box}></span>
                                        </span>

                                        <span className={styles.checkbox__content}>
                                            <h6 className={styles.checkbox__period}>
                                                Saturdays
										    </h6>
                                            <h4 className={styles.checkbox__title}>
                                                Coding
										    </h4>
                                            <span className={styles.checkbox__description}>
                                                Your daily dose of what's up in emerging technology
										</span>
                                        </span>
                                    </label>
                                </li>
                            </ul>

                        </div>


                        <div className={styles.form__middle}>
                            <div className={styles.form__middle_title}>
                                More from MIT Technology Review
						    </div>

                            <div className={styles.form__middle_checkboxes}>

                                <ul className={styles.checkbox__list}>

                                    <li className={styles.checkbox__item}>
                                        <label className={styles.checkbox__label}>

                                            <span className={styles.checkbox__div}>
                                                <input type='checkbox' className={styles.checkbox__input} checked readOnly />
                                                <span className={styles.checkbox__box}></span>
                                            </span>

                                            <span className={styles.checkbox__content}>
                                                <h6 className={styles.checkbox__period}>
                                                    Occasionally
											    </h6>
                                                <h4 className={styles.checkbox__title}>
                                                    Updates and special offers
											    </h4>
                                                <span className={styles.checkbox__description}>
                                                    Get special discounts, top stories, & information on other initiatives
											</span>
                                                <span className={styles.checkbox__mark}>
                                                    <span className={`${styles.checkbox__span} ${styles.gray}`}>
                                                        by application only
												</span>
                                                </span>
                                            </span>
                                        </label>
                                    </li>

                                    <li className={styles.checkbox__item}>
                                        <label className={styles.checkbox__label}>

                                            <span className={styles.checkbox__div}>
                                                <input type='checkbox' className={styles.checkbox__input} />
                                                <span className={styles.checkbox__box}></span>
                                            </span>

                                            <span className={styles.checkbox__content}>
                                                <h6 className={styles.checkbox__period}>
                                                    Occasionally
											    </h6>
                                                <h4 className={styles.checkbox__title}>
                                                    Global Panel
											    </h4>
                                                <span className={styles.checkbox__description}>
                                                    Examine today's technology trends & contribute to our custom research
											</span>
                                            </span>
                                        </label>
                                    </li>

                                </ul>

                                <ul className={styles.checkbox__list}>

                                    <li className={styles.checkbox__item}>
                                        <label className={styles.checkbox__label}>

                                            <span className={styles.checkbox__div}>
                                                <input type='checkbox' className={styles.checkbox__input} />
                                                <span className={styles.checkbox__box}></span>
                                            </span>

                                            <span className={styles.checkbox__content}>
                                                <h6 className={styles.checkbox__period}>
                                                    Occasionally
											    </h6>
                                                <h4 className={styles.checkbox__title}>
                                                    Startups
											    </h4>
                                                <span className={styles.checkbox__description}>
                                                    Learn about our virtual and in-person events
											</span>
                                            </span>
                                        </label>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className={styles.form__bottom}>
                            <div className={styles.form__bottom_wrapper}>
                                <div className={styles.form__bottom_email}>
                                    <span className={styles.form__bottom_email_text}>Email</span>
                                    <input type='email' className={styles.form__bottom_input} />
                                </div>
                                <div className={styles.form__bottom_btn}>
                                    <button type='submit'>Submit subscription</button>
                                </div>
                            </div>

                        </div>

                        <div className={styles.form__bottom_terms}>
                            <a className={styles.link} style={styled_a} href="#">Terms of Service</a> and <a className={styles.link} style={styled_a} href="#">Privacy Policy</a>
                        </div>

                    </div>
                </form>
            </div>
        </div >
    );
}

const styled_a = {
    color: '#3b3b3b',
    textDecoration: 'none',
    transition: 'all 0.2s linear'
}

export default AdvancedSubPage;