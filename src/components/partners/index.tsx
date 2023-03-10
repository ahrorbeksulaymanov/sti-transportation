
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from '../../assets/images/partner-logo1.png'
import logo2 from '../../assets/images/partner-logo2.png'
import logo3 from '../../assets/images/partner-logo3.png'
import logo4 from '../../assets/images/partner-logo4.png'
import { Autoplay } from 'swiper';
import 'swiper/css';


const Partners = () => {

    return (
        <section className="text-white">
            <div className="my-container">
                <div className="md:pt-[200px] pt-[100px]">
                    <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px] mb-[60px]">Our Partners</h4>
                </div>
            </div>
            <div className="bg-[#111] py-[37px]">
                <div className="my-container">
                    <Swiper
                        loop={true}
                        loopedSlides={3}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 60,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 100,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 100,
                            },
                        }}
                        className="mySwiper"
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <img className="w-[279px]" src={logo1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-[233px]" src={logo2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-[279px]" src={logo3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-[246px]" src={logo4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-[279px]" src={logo1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-[233px]" src={logo2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-[279px]" src={logo3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-[246px]" src={logo4} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Partners;