import { nanoid } from "nanoid";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorNotification, FormBtn, FormInput, FormLabel, FormWrapper } from "./ContactForm.styled";
 

const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .required('This field is required!'),
    number: Yup.string()
        .min(4, 'Too Short!')
        .required('This field is required!'),
});

export const ContactForm = ({ getContact }) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
                getContact({
                    id: nanoid(),
                    name: values.name,
                    number: values.number,
                });
                actions.resetForm();
            }}
        >
            <FormWrapper>
                <FormLabel htmlFor="contactFormikInput">Name</FormLabel>
                <FormInput
                    name="name"
                    id="contactFormikInput"
                    type="text"
                    
                />
                <ErrorNotification name="name" component="div" />

                <FormLabel htmlFor="contactFormikNumber">Number</FormLabel>
                <FormInput
                    name="number"
                    id="contactFormikNumber"
                    type="tel"
                />
                <ErrorNotification name="number" component="div" />

                <FormBtn type="submit">Add contact</FormBtn>
            </FormWrapper>
        </Formik>
    );
};