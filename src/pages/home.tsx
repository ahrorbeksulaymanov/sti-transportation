import AboutPage from '../components/about-us';
import FirstComp from '../components/first-comp';
import Partners from '../components/partners';
import SecondBlock from '../components/second-block';
import ToPurchase from '../components/toPurchase';
import WhySTI from '../components/why-sti';
import WhyUs from '../components/why-us';

function Home() {
  return (
    <div>
      <FirstComp />
      <SecondBlock />
      <AboutPage />
      <WhyUs />
      <WhySTI />
      <ToPurchase />
      <Partners />
    </div>
  );
}

export default Home;