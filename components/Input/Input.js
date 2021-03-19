import React from 'react';

const Input = (
    { htmlFor, spanLabel, id, type, name, placeholder, onChange, value }
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
        />
    </label>
)

export default Input;