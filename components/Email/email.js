import Input from '../Input';

const Email = ({ value, onBlur, onChange }) => (
    <Input
        id="email"
        type="email"
        name="email"
        placeholder="your email"
        htmlFor="email"
        spanLabel="Email Address"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
    />
)

export default Email;