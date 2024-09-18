import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
    const dispatch = useDispatch();
    const nameField = 'name-field';
    const numberField = 'numbre-field'

    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
        number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required')
    });

    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            name: values.name,
            number: values.number,
        }));
        actions.resetForm();
    }

    return(
        <Formik 
         initialValues={{
            id: '',
            name: '',
            number: '',
         }}
         onSubmit={handleSubmit}
         validationSchema={ContactSchema}
         >
            <Form className={css.form}>
            <label className={css.name} htmlFor={nameField}>Name</label>
            <Field className={css.field} type='text' name='name' id={nameField}/>
            <ErrorMessage className={css.error} name='name' component='span'/>

            <label className={css.name} htmlFor={numberField}>Number</label>
            <Field className={css.field} type='text'name='number'id={numberField}/>
            <ErrorMessage className={css.error} name='number' component='span'/>

            <button type='submit' className={css.btn}>Add Contact</button>
            </Form>
         </Formik>
    )
}
export default ContactForm