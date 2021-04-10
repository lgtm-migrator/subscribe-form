import Image from 'next/image';
import Checkbox from '../Checkbox';
import { Formik, Field, Form } from 'formik';

const Preferences = () => {
    return (
        <section style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <div style={{ width: '450px', paddingTop: '80px' }}>
                <Image
                    src='/images/email-pre.jpg'
                    alt='cat'
                    width={450}
                    height={300}
                />
                <h1>Newsletters</h1>
                <h2>Receive the latest emerging technology news in your inbox.</h2>
                <p>Select the newsletters you’d like to receive and enter your email below to sign up.<a href='#'><u>Sign in</u></a> to manage your existing preferences.</p>
            </div>
            <div style={{ marginLeft: '50px' }}>
                <Formik
                    initialValues={{
                        checked: []
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ errors, touched, isValidating }) => (
                        <Form>
                            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px' }}>
                                <div style={{ display: 'flex', margin: '20px' }}>
                                    <Checkbox content='' value='thematics' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Weekdays</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Thematics</p>
                                        <p>Your daily dose of what's up in emerging technology</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', margin: '20px' }}>
                                    <Checkbox content='' value='techbrief' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Fridays</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>TechBrief</p>
                                        <p>Your daily dose of what's up in emerging technology</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', margin: '20px' }}>
                                    <Checkbox content='' value='podcasts' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Mondays</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Podcasts</p>
                                        <p>Your daily dose of what's up in emerging technology</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', margin: '20px' }}>
                                    <Checkbox content='' value='gaming' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Monthly</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Gaming</p>
                                        <p>Your daily dose of what's up in emerging technology</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', margin: '20px' }}>
                                    <Checkbox content='' value='blockchain&cryptocurrencies' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Saturdays</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Blockchain & Cryptocurrencies</p>
                                        <p>Your daily dose of what's up in emerging technology</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', margin: '20px' }}>
                                    <Checkbox content='' value='coding' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Saturdays</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Coding</p>
                                        <p>Your daily dose of what's up in emerging technology</p>
                                    </div>
                                </div>
                            </div>
                            <h3 style={{ marginTop: '50px' }}>More from MIT Technology Review</h3>
                            <hr />
                            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px' }}>
                                <div style={{ display: 'flex', margin: '20px', maxWidth: '400px' }}>
                                    <Checkbox content='' value='special-offers' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Occasionally</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Updates and special offers</p>
                                        <p>Get special discounts, top stories, & information on other initiatives</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', margin: '20px', maxWidth: '400px' }}>
                                    <Checkbox content='' value='startups' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Occasionally</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Startups</p>
                                        <p>Learn about our virtual and in-person events</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', margin: '20px', maxWidth: '400px' }}>
                                    <Checkbox content='' value='glob-panel' />
                                    <div>
                                        <strong style={{ color: '#757575', fontSize: '13px' }}>Occasionally</strong>
                                        <p style={{ fontSize: '20px', marginBottom: '3px' }}>Global Panel</p>
                                        <p>Examine today's technology trends & contribute to our custom research</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='subs-form__btn'
                                style={{ display: 'block', margin: '20px auto' }}
                            >Submit subscription</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default Preferences;