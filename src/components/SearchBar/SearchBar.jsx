import { useState } from 'react';

const SearchBar = ({ getInputData }) => {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    getInputData(value);

    reset();
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          onChange={onChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
