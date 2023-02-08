import React from 'react';
import './style.scss'
import mainTruck from '../../assets/images/main-trucks.png'
import { Parallax } from 'react-scroll-parallax';

const FirstComp:React.FC = ():JSX.Element => {

    return (
        <div className="first-component md:mt-[105px] mt-[170px] xxl:pb-[200px] pb-[100px] sm:mb-[100px] ">
            <div className='relative'>
                <div className="my-container">
                    <div className="main-blur-back absolute lg:w-[728px] sm:w-[476px] w-[100%] lg:h-[700px] sm:h-[500px] h-[300px] xl:top-[180px] lg:top-[120px] sm:top-[-50px] top-[-100px]"></div>
                    <Parallax speed={40}>
                        <h1 className='xxl:text-[490px] lg:text-[450px] md:text-[360px] sm:text-[300px] text-[121px] xl:leading-[360px] md:leading-[320px] sm:leading-[200px] leading-[90px]' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">STI</h1>
                        <h3 className='xxl:text-[200px] lg:text-[190px] md:text-[150px] sm:text-[100px] text-[50px] xl:leading-[170px] md:leading-[140px] sm:leading-[80px] leading-[45px]' data-aos="fade-up" data-aos-duration="1500">TRANSPORTATION</h3>
                    </Parallax>
                </div>
                <img data-aos="fade-up" data-aos-duration="3000" className='md:w-[94%] w-[100%] absolute md:left-[3%] left-0 md:top-[300px] sm:top-[150px] top-[-30px] z-[1]' src={mainTruck} alt="" />
              </div>
        </div>
    )
}
export default FirstComp;