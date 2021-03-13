
const UnsubscribeForm = () => (
    <form className="subs-form__form">
        <div className="subs-form__inner">
            <p className="subs-form__text left strong">Unsubscribe</p>
            <p className="subs-form__text left">
                We're sorry to see you go! Enter your email address to unsubscribe from this list.
			</p>
        </div>
        <div className="subs-form__inputs">
            <label className="subs-form__labels" htmlFor="email">
                <span>Email Address</span>
                <input type="email" name="email" id="email" placeholder="your email" />
            </label>
        </div>
        <button className="subs-form__btn unsubscribe" type="submit">Unsubscribe</button>
    </form>
)

export default UnsubscribeForm;