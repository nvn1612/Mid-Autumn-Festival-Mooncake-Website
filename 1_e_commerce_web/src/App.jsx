import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import TopProducts from './components/topProducts/TopProducts';
import Banner from './components/banner/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
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
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner/>
    </div>
  )
}

export default App