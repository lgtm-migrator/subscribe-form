import { Field } from 'formik';
import * as styles from '../../../styles/style.module.css';

const Checkbox = ({ value }) => (
    <span className={styles.checkbox__div}>
        <Field type='checkbox' name='checked' className={styles.checkbox__input} value={value} />
        <span className={styles.checkbox__box}></span>
    </span>
)

export default Checkbox;