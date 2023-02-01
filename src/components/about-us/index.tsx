import vidoeBackImg from '../../assets/images/video-back.png';

const AboutPage = () => {
    return (
        <section className="my-container mt-[60px] text-white mb-[200px]">
            <div className="my-card">
                <p className="text-[#D94747] text-[24px] mb-[8px]">About US</p>
                <h4 className="text-[52px]  font-[700] leading-[63px]">STI Transportation</h4>
                <p className="mt-[16px] mb-[46px]  text-[16px] font-[400] w-[70%]">STi Transportation inc is in the market since 2013 and one of the fastest growing companies. Company hauls all types of freight including power only loads, Amazon, UPS, FedEx loads, JB Hunt. At the meantime Company has over 50 dry van trailers to work with big brokerage companies like: C.H. Robbinson, Schneider, Hub Group, NTG Knight and Swift and others. STI Transportation Inc has over 100k miles on a daily basis and keeps on providing safe and on time pick ups and deliveries across the United States.</p>
                <svg className="absolute top-0 right-0 w-[370px] h-[315px]" viewBox="0 0 379 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.01843 162.951H387M1.01843 162.951C55.9951 161.145 167.751 116.911 211.913 14M1.01843 162.951C55.9951 164.756 166.733 210.089 210.894 313" stroke="white" stroke-opacity="0.1" stroke-width="45" stroke-linecap="square"/>
                </svg>
                <div className="flex ">
                    <div>
                        <h3 className="text-[36px] font-[700] leading-[44px] ">100K+</h3>
                        <p className="text-[16px] font-[400] ">Delivered freights</p>
                    </div>
                    <div className="mx-[36px]">
                        <h3 className="text-[36px] font-[700] leading-[44px] ">10+</h3>
                        <p className="text-[16px] font-[400] ">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-[36px] font-[700] leading-[44px] ">3M+</h3>
                        <p className="text-[16px] font-[400] ">Safe Miles</p>
                    </div>
                </div>
                <div className="mb-[-200px] mt-[44px] relative" >
                    <svg className='absolute w-[72px] h-[72px] top-[50%] left-[50%] cursor-pointer' style={{transform:"translate(-50%, -50%)"}} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36" cy="36" r="36" fill="white" fill-opacity="0.6"/>
                        <path d="M48.25 32.883C50.9167 34.4226 52.25 35.1924 52.25 36.3471C52.25 37.5018 50.9167 38.2716 48.25 39.8112L31 49.7705C28.3333 51.3101 27 52.0799 26 51.5026C25 50.9252 25 49.3856 25 46.3064L25 26.3878C25 23.3086 25 21.769 26 21.1917C27 20.6143 28.3333 21.3841 31 22.9237L48.25 32.883Z" fill="white"/>
                    </svg>
                    <img src={vidoeBackImg} alt="" />
                </div>
            </div>
        </section>
    )
}
export  default AboutPage;