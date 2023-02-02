import FirstComp from './components/first-comp';
import './App.css';
import AboutPage from './components/about-us';
import WhyUs from './components/why-us';
import RoutesMiddleware from './routes/routerMiddleware';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      {/* <FirstComp />
      <AboutPage />
      <WhyUs /> */}
      <ParallaxProvider>
        <RoutesMiddleware />
      </ParallaxProvider>
    </div>
  );
}

export default App;
