import propTypes from 'prop-types';
import { Formik } from 'formik';
import { Input, FormInput, AddButton } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const initialValues = { name: '', number: '' };

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({
      id: nanoid(),
      ...values,
    });

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormInput autoComplete="off">
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <AddButton type="submit">Add contact</AddButton>
      </FormInput>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
