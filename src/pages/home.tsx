import AboutPage from '../components/about-us';
import FirstComp from '../components/first-comp';
import SecondBlock from '../components/second-block';
import WhyUs from '../components/why-us';

function Home() {
  return (
    <div>
      <FirstComp />
      <SecondBlock />
      <AboutPage />
      <WhyUs />
    </div>
  );
}

export default Home;