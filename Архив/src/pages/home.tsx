import { useEffect } from 'react';
import AboutPage from '../components/about-us';
import FirstComp from '../components/first-comp';
import Footer from '../components/footer';
import Location from '../components/location';
import Partners from '../components/partners';
import SecondBlock from '../components/second-block';
import ToContact from '../components/toContact';
import ToPurchase from '../components/toPurchase';
import ToTop from '../components/toTopButton';
import WhySTI from '../components/why-sti';
import WhyUs from '../components/why-us';

function Home() {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  
  return (
    <div>
      <FirstComp />
      <SecondBlock />
      <AboutPage />
      <WhyUs />
      <WhySTI />
      <ToPurchase />
      <Partners />
      <Location />
      <ToContact />
      <ToTop />
    </div>
  );
}

export default Home;