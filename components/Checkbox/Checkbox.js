import React from 'react';

const Checkbox = (
    { id, name, text }
) => (
    <label className="subs-form__check-label">
        <input type="checkbox" name={name} id={id} />
        <span className="subs-form__checkbox"></span>
        <span className="subs-form__checkbox-text">
            {text}
        </span>
    </label>
)

export default Checkbox;