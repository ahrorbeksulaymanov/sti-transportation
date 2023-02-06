import purchase from '../../assets/images/to-purchase-img.png'

const ToPurchase = () => {

    return (
        <section className="my-container text-white">
            <div className="md:pt-[140px] pt-[60px]">
                <p className="text-[#D94747] text-center text-[24px] mb-[8px]">Lorem</p>
                <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px]">Lease to <span className="text-orange">purchase</span></h4>
                <p className="mt-[16px] md:mb-[30px] mb-[20px] text-center md:text-[16px] text-[12px] font-[400] md:w-[55%] w-[100%] mx-auto">The biggest achievement of 2023 for the company was the start of lease to purchase offers where we have all types of trucks starting from 2019 Volvo, Freightliner and Kenworths up to 2023 ones.</p>
                
                <img className='w-[1079px] mx-auto' data-aos="fade-up"  src={purchase} alt="" />
               
                <button data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='learn-more-btn md:text-[16px] text-[12px] bg-orange hover:bg-orange_hover md:px-[65px] px-[20px] md:py-[14px] py-[12px] rounded-[100px] flex mx-auto font-[500] md:mt-[30px] mt-[55px] uppercase' style={{alignItems:"center"}}>Purchase 
                <svg className='md:ml-[30px] ml-[20px] md:w-[18px] w-[16px] h-[18px] ' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2071 8.70711C17.5976 8.31658 17.5976 7.68342 17.2071 7.29289L10.8431 0.928933C10.4526 0.538409 9.81946 0.538409 9.42893 0.928933C9.03841 1.31946 9.03841 1.95262 9.42893 2.34315L15.0858 8L9.42893 13.6569C9.03841 14.0474 9.03841 14.6805 9.42893 15.0711C9.81946 15.4616 10.4526 15.4616 10.8431 15.0711L17.2071 8.70711ZM0.5 9L16.5 9L16.5 7L0.5 7L0.5 9Z" fill="white"/>
                </svg>
            </button>
            </div>
        </section>
    )
}
export default ToPurchase;