import propTypes from 'prop-types';
import { SearchField } from './Filter.styled';


export const Filter = ({ value, onChange }) => {
  return (
    <SearchField>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={onChange}/>
    </SearchField>
  );
};


Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  
};