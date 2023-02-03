import { useEffect } from 'react';
import {initAnimaCounter} from 'anima-counters'
import vidoeBackImg from '../../assets/images/video-back.jpeg';

const AboutPage = () => {

    useEffect(() => {
        let options = {
            start: 0,
            duration: 100,
            style: 'fr-FR',
        }
        initAnimaCounter(options)
    }, [])

    return (
        <section className="md:mt-[140px] mt-[60px] text-white mb-[200px]">
            <div className="my-container">
                <p className="text-[#D94747] text-center text-[24px] mb-[8px]">About US</p>
                <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px] ">STI Transportation</h4>
                <p className="mt-[16px] md:mb-[60px] mb-[34px] text-center md:text-[16px] text-[12px] font-[400] w-[90%] mx-auto">STi Transportation inc is in the market since 2013 and one of the fastest growing companies. Company hauls all types of freight including power only loads, Amazon, UPS, FedEx loads, JB Hunt. At the meantime Company has over 50 dry van trailers to work with big brokerage companies like: C.H. Robbinson, Schneider, Hub Group, NTG Knight and Swift and others. STI Transportation Inc has over 100k miles on a daily basis and keeps on providing safe and on time pick ups and deliveries across the United States.</p>
                <div className="flex justify-center text-center">
                    <div>
                        <h3 className="anima-counter md:text-[36px] text-[24px] font-[700] md:leading-[44px] leading-[30px]">100K+</h3>
                        <p className="text-[16px] font-[400] ">Delivered freights</p>
                    </div>
                    <div className="mx-[52px]">
                        <h3 className="anima-counter md:text-[36px] text-[24px] font-[700] md:leading-[44px] leading-[30px]">10+</h3>
                        <p className="text-[16px] font-[400] ">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="anima-counter md:text-[36px] text-[24px] font-[700] md:leading-[44px] leading-[30px]">3M+</h3>
                        <p className="text-[16px] font-[400] ">Safe Miles</p>
                    </div>
                </div>
            </div>
                <div className="mb-[-200px] mt-[60px] relative" >
                    <svg className='absolute w-[72px] h-[82px] top-[50%] left-[50%] cursor-pointer' style={{transform:"translate(-50%, -50%)"}} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36" cy="36" r="36" fill="white" fill-opacity="0.6"/>
                        <path d="M48.25 32.883C50.9167 34.4226 52.25 35.1924 52.25 36.3471C52.25 37.5018 50.9167 38.2716 48.25 39.8112L31 49.7705C28.3333 51.3101 27 52.0799 26 51.5026C25 50.9252 25 49.3856 25 46.3064L25 26.3878C25 23.3086 25 21.769 26 21.1917C27 20.6143 28.3333 21.3841 31 22.9237L48.25 32.883Z" fill="white"/>
                    </svg>
                    <img className='w-[100%]' src={vidoeBackImg} alt="" />
                </div>
        </section>
    )
}
export  default AboutPage;