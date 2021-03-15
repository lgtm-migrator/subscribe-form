import SubscribeForm from '../forms/subscribe-form'

const Subscribe = () => (
    <div className="subs-form">
        <div className="subs-form__wrapper">
            <div className="subs-form__logo">
                <a href="https://hackernoon.com">
                    <img src="images/hackernoon.png" alt="Hackernoon logo" />
                </a>
            </div>
            <SubscribeForm />
        </div>
    </div>
)

export default Subscribe;