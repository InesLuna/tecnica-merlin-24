
import Logo from '../Logo/Logo';
import Breadcrum from '../Breadcrumb/Breadcrum';
import SearchInput from '../SearchInput/SearchInput';
import './header.css';

const Header = (props) => {
  const { generalView, handleChange, errorView, detailView } = props;
  

  return (
    <>
      <div className='logo-section box-shadow-class'>
        <Logo/>
        {
          generalView ? <SearchInput handleChange={handleChange}/> : null
        }
      </div>
      <div className='navigation-section'>
        <Breadcrum view={generalView ? 'generalView' : detailView ? 'detailView' : 'episodeView'} />
      </div>
    </>
    
  );
};

export default Header;
