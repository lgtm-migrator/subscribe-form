import React from 'react';

const Input = (
    { htmlFor, spanLabel, id, type, name, placeholder, onChange, value, onBlur }
) => (
    <label className="subs-form__labels" htmlFor={htmlFor}>
        <span>{spanLabel}</span>
        <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            required
        />
    </label>
)

export default Input;