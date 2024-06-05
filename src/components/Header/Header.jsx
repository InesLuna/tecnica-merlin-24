
import Logo from '../Logo/Logo';
import Breadcrum from '../Breadcrumb/Breadcrum';
import SearchInput from '../SearchInput/SearchInput';
import './header.css';

const Header = (props) => {
  const { generalView, handleChange, errorView } = props;
  

  return (
    <>
      <div className='logo-section'>
        <Logo/>
      </div>
      <div className='navigation-section'>
        <Breadcrum generalView={generalView} errorView={errorView} />
        {
          generalView ? <SearchInput handleChange={handleChange}/> : null
        }
        
      </div>
    </>
    
  );
};

export default Header;
