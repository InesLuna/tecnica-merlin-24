import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './breadcrumb.css';

const Breadcrum = (props) => {

  const { generalView, errorView } = props;
  const actualProductState = (state) => state.detailList.actualProduct;
  const actualProduct = useSelector(actualProductState);

  return (
    <div className='breadcrumb'>
      <Link to='/' className='breadcrumb__link'>Home</Link>
      {
        !generalView ?( 
          <>
            {
              errorView ? <Link to='/' className='breadcrumb__link'><span className='breadcrumb__separator'>/</span>Error</Link> : (
                <>
                  {
                    actualProduct ? <Link to={`detail/${actualProduct?.id}`} className='breadcrumb__link'><span className='breadcrumb__separator'>/</span>{actualProduct?.model}</Link> : null
                  }
                </>
              )
            }
          </>
        ): null
      }
    </div>
  );
};

export default Breadcrum;