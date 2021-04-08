import { Field } from 'formik';

const Email = () => (
    <label className="subs-form__labels" htmlFor='email'>
        <span>Email Address</span>
        <Field
            name="email"
            type="email"
            placeholder="your email"
            required
        />
    </label>
)

export default Email;