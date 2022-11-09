import { Label } from 'components/ContactForm/ContactForm.styled';
import { Input } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    const keyWord = e.target.value.toLowerCase().split(' ').join('');

    dispatch(addFilter(keyWord));
  };

  return (
    <div>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={handleFilter}
      />
    </div>
  );
};
