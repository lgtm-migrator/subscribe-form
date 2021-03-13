
const Subscribe = () => (
    <div className="subs-form">
        <div className="subs-form__wrapper">
            <div className="subs-form__logo">
                <a href="https://hackernoon.com">
                    <img src="images/hackernoon.png" alt="Hackernoon logo" />
                </a>
            </div>
            <form className="subs-form__form" action="https://www.noonifications.tech/subscribe" method="POST" acceptCharset="utf-8">
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
                    <label className="subs-form__labels" htmlFor="email">
                        <span>Email Address</span>
                        <input type="email" name="email" id="email" placeholder="your email" />
                    </label>

                    <label className="subs-form__labels" htmlFor="name">
                        <span>First Name</span>
                        <input type="text" name="name" id="name" placeholder="your first name" />
                    </label>
                </div>

                <div className="subs-form__checkboxes">
                    <p>how can hacker noon improve your inbox?</p>

                    <label className="subs-form__check-label">
                        <input type="checkbox" name="gdpr" id="gdpr" />
                        <span className="subs-form__checkbox"></span>
                        <span className="subs-form__checkbox-text">I concent to receive promotional emails about your products and services
						</span>
                    </label>

                    <label className="subs-form__check-label">
                        <input type="checkbox" name="bruh" id="featured" />
                        <span className="subs-form__checkbox"></span>
                        <span className="subs-form__checkbox-text">gimme the techbrief</span>
                    </label>

                    <label className="subs-form__check-label">
                        <input type="checkbox" name="bruh" id="blockchain&cryptocurrency" />
                        <span className="subs-form__checkbox"></span>
                        <span className="subs-form__checkbox-text">do you even blockchain/crypto bruh</span>
                    </label>

                    <label className="subs-form__check-label">
                        <input type="checkbox" name="cleancode" id="programming" />
                        <span className="subs-form__checkbox"></span>
                        <span className="subs-form__checkbox-text">I like clean code and I cannot lie</span>
                    </label>

                    <label className="subs-form__check-label">
                        <input type="checkbox" name="stories" id="startups&feature&technology" />
                        <span className="subs-form__checkbox"></span>
                        <span className="subs-form__checkbox-text">send me stories about startups and the future of
							everything</span>
                    </label>
                </div>

                <div style={{ display: 'none' }}>
                    <label htmlFor="hp">HP</label><br />
                    <input type="text" name="hp" id="hp" />
                </div>
                <input type="hidden" name="list" value="OMTKMVEF3BfWHMve4EY8925g" />
                <input type="hidden" name="subform" value="yes" />

                <button className="subs-form__btn" type="submit" name="submit" id="submit">Get great stories by email</button>
            </form>
        </div>
    </div>
)

export default Subscribe;