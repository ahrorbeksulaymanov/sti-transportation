import './App.css';
import RoutesMiddleware from './routes/routerMiddleware';
import { ParallaxProvider } from 'react-scroll-parallax';
import {userContext} from './context/index'
import 'swiper/css';
import { useEffect, useState } from 'react';
import instance from './configs/axios_config';
import { useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   if (token) {
  //     instance({
  //       url: `/v1/user`,
  //       method: "get"
  //     })
  //       .then((res) => {
  //         console.log("user", res);
          
  //       })
  //       .catch((err) => {
  //         navigate('/')
  //         localStorage.clear();
  //       });
  //   }
  // }, [])

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
