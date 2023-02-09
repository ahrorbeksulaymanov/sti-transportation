import './App.css';
import RoutesMiddleware from './routes/routerMiddleware';
import { ParallaxProvider } from 'react-scroll-parallax';
import {userContext} from './context/index'
import 'swiper/css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})

  return (
    <div className='text-[#fff]'>
      <ParallaxProvider>
        <userContext.Provider value={{user, setUser}} >
          <RoutesMiddleware />
        </userContext.Provider>
      </ParallaxProvider>
    </div>
  );
}

export default App;
