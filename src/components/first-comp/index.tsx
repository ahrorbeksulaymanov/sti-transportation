import React from 'react';
import './style.scss'
import mainTruck from '../../assets/images/main-trucks.png'
import { Parallax } from 'react-scroll-parallax';

const FirstComp:React.FC = ():JSX.Element => {

    return (
        <div className="relative first-component pt-[100px] pb-[300px]">
            <div className="my-container md:pt-0 sm:pt-14 pt-8">
                <div className="main-blur-back absolute lg:w-[728px] sm:w-[576px] w-[100%] lg:h-[728px] sm:h-[600px] h-[400px] lg:top-[260px] sm:top-[200px] top-[120px]"></div>
                <Parallax speed={40}>
                    <h1 className='xxl:text-[490px] lg:text-[450px] md:text-[380px] sm:text-[300px] text-[121px] xl:leading-[360px] md:leading-[300px] sm:leading-[200px] leading-[90px]' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">STI</h1>
                    <h3 className='xxl:text-[200px] lg:text-[190px] md:text-[150px] sm:text-[100px] text-[50px] xl:leading-[140px] md:leading-[120px] sm:leading-[80px] leading-[45px]' data-aos="fade-up" data-aos-duration="1500">TRANSPORTATION</h3>
                </Parallax>
            </div>
            <img data-aos="fade-up" data-aos-duration="3000" className='md:w-[94%] w-[100%] absolute md:left-[3%] left-0 xl:top-[270px] md:top-[330px] sm:top-[240px] top-[130px] z-[1]' src={mainTruck} alt="" />
        </div>
    )
}
export default FirstComp;