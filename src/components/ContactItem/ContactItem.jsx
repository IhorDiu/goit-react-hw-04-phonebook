import propTypes from 'prop-types';
import { Item, ButtonDelete, Name } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      <Name>
        {name}:
      </Name>
      <p>
        {number}
      </p>

      <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ButtonDelete>
    </Item>
  );
};



ContactItem.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    onDeleteContact: propTypes.func.isRequired,
  };