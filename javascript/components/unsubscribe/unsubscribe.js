import UnsubscribeForm from '../forms/unsubscribe-form';

const Unsubscribe = () => (
    <div className="subs-form">
        <div className="subs-form__wrapper">
            <div className="subs-form__logo">
                <img src="images/hackernoon.png" alt="" />
            </div>
            <UnsubscribeForm />
        </div>
    </div>
)

export default Unsubscribe;