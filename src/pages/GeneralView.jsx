/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { getProductsList } from '../apiServices/getProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { listAdd, timestampAdd } from '../reducer/listSlice';
import Header from '../components/Header/Header';
import ItemCard from '../components/ItemCard/ItemCard';
import GoTopButton from '../components/GoTopButton/GoTopButton';
import Loader from '../components/Loader/Loader';
import './pages.css';

const GeneralView = () => {

  const dispatch = useDispatch();
  const productListSelector = (state) => state.list.value;
  const productList = useSelector(productListSelector);
  const timestampListSelector = (state) => state.list.timestamp;
  const timestampList = useSelector(timestampListSelector);

  const [ filterProductList, setFilterProductList ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ showButton, setShowButton ] = useState(false);

  const dataList = async () => {
    const date = new Date();
    await getProductsList().then((data) => {
      const dataParse = JSON.parse(data);
      dispatch(listAdd([...dataParse.feed.entry]));
      dispatch(timestampAdd(JSON.stringify(date)));
    });
  };

  useEffect(()=> {
    const date = new Date();
    const oneHour = 60 * 60 * 1000;
    if((timestampList && (date - timestampList) > oneHour )|| productList.length <= 0 ) {
      dataList(); 
    }
  }, [timestampList, productList]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  useEffect(()=> {
    setFilterProductList(filterList(inputValue));
  }, [productList, inputValue]);

  const filterList = (text) => {
    let list = productList;
    const lowerText = text.toLowerCase();
    if (lowerText !== '') {
      list = productList.filter((p) => {
        return p.model.toLowerCase().includes(lowerText) || p.brand.toLowerCase().includes(lowerText);
      });
    }
    return list;
  };
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 1000) {
      setShowButton('block');
    } else {
      setShowButton('hidden');
    }
  };


  return ( 
    <div className='page-layout'>
      <Header generalView handleChange={handleChange}/>
      {
        productList && productList.length > 0 ? (
          <div className='cards-layout'>
            {
              productList.map((p) => <ItemCard key={p.id.attributes['im:id']} podcast={p} /> )
            }
            {
              showButton ? <GoTopButton showButton={showButton}/> : null
            }
          </div>
        ) : <Loader/>
      } 
    </div>
      
  )
};

export default GeneralView;
