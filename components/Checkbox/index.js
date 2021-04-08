import { Field } from 'formik';

const Checkbox = ({
    value, content
}) => (
    <label className='subs-form__check-label'>
        <Field className="subs-form__checkbox" type="checkbox" name="checked" value={value} />
        {content}
    </label>
)

export default Checkbox;