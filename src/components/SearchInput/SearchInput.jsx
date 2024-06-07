import magnifying from '../../icons/magnifying.png'
import './searchInput.css';

const SearchInput = (props) => {

  const { handleChange } = props;

  return (
    <div className='search-input'>
      <div className="search-input__wrapper">
        <input 
          className="search-input__input" 
          placeholder="Search" 
          type="text" 
          name="search"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="search-input__icon">
          <img src={magnifying} alt='magnifier' className='h-5' />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
