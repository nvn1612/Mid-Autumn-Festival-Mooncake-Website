import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import TopProducts from './components/topProducts/TopProducts';
import Banner from './components/banner/Banner';
import Subscribe from './components/subscribe/subscribe';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 '>
      {/* <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts />
      <Banner/>
      <Subscribe/>
      <Products />
      <Testimonials /> 
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      <LoginPage />
    </div>
  )
}

export default App