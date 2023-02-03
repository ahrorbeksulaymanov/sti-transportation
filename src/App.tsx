import './App.css';
import RoutesMiddleware from './routes/routerMiddleware';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'swiper/css';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <RoutesMiddleware />
      </ParallaxProvider>
    </div>
  );
}

export default App;
