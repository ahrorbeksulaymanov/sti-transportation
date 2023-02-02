import './style.scss'
const SecondBlock = () => {

    return (
        <section className="second-block lg:mt-[250px] md:mt-[100px] mt-[10px] text-white">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h1 className="lg:text-[140px] md:text-[100px] text-[36px]">WE ARE <span className="text-[#EE3532]">TRUCKING</span></h1>
                <h1 className="lg:text-[140px] md:text-[100px] text-[36px]">INDUSTRY <span className="text-[#EE3532]">EXPERTS</span></h1>
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='lg:text-[22px] md:text-[20px] text-[12px] md:w-[670px] sm:w-[60%] w-[80%]  mx-auto text-center mt-[20px] leading-[132%]'>To get fast and reliable for your cargo with our loyal and experienced drivers where everyone treated as a family member. Learn more in a detaile I wav here</p>
            <button data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='md:text-[16px] text-[12px] bg-[#EE3532] hover:bg-[#cb2c29] md:px-[51px] px-[22px] md:py-[14px] py-[12px] rounded-[100px] flex mx-auto font-[500] md:mt-[35px] mt-[51px]' style={{alignItems:"center"}}>LEARN MORE 
                <svg className='md:ml-[30px] ml-[20px] md:w-[18px] w-[16px] h-[18px] ' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2071 8.70711C17.5976 8.31658 17.5976 7.68342 17.2071 7.29289L10.8431 0.928933C10.4526 0.538409 9.81946 0.538409 9.42893 0.928933C9.03841 1.31946 9.03841 1.95262 9.42893 2.34315L15.0858 8L9.42893 13.6569C9.03841 14.0474 9.03841 14.6805 9.42893 15.0711C9.81946 15.4616 10.4526 15.4616 10.8431 15.0711L17.2071 8.70711ZM0.5 9L16.5 9L16.5 7L0.5 7L0.5 9Z" fill="white"/>
                </svg>
            </button>
        </section>
    )
}
export default SecondBlock