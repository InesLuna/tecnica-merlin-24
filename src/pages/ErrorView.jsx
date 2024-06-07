import Header from '../components/Header/Header';

const ErrorView = () => (
  <>
    <Header errorView/>
    <div className='min-w-full min-h-full flex items-center justify-center flex-col'>
      <p className='text-anton text-3xl text-teal-500 '>Parece que ha habído un error,</p>
      <p className='text-anton text-3xl text-amber-400 '>so sorry!</p>
    </div>
    
  </>
);

export default ErrorView;
