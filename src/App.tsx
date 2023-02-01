import FirstComp from './components/first-comp';
import './App.css';
import AboutPage from './components/about-us';
import WhyUs from './components/why-us';
import RoutesMiddleware from './routes/routerMiddleware';

function App() {
  return (
    <div>
      {/* <FirstComp />
      <AboutPage />
      <WhyUs /> */}
      <RoutesMiddleware />
    </div>
  );
}

export default App;
