import * as Yup from 'yup';

const ValidationSchema = Yup.object({
    email: Yup.string()
        .min(5, 'Too Short!')
        .email('Invalid email address!')
        .required('Email is required!'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is required!'),
});

export default ValidationSchema;