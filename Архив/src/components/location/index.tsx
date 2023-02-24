import purchase from '../../assets/images/map.png'

const Location = () => {

    return (
        <section className="my-container text-white">
            <div className="md:pt-[200px] pt-[100px]">
                <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px] md:mb-[80px] mb-[52px]">Our main address</h4>
                <div className='relative' data-aos="fade-up">
                    <div className='absolute xl:top-[21%] lg:top-[19%] md:top-[16%] sm:top-[15%] top-[13%] xl:right-[36%] lg:right-[37%] md:right-[39%] sm:right-[40%] right-[41%] rounded-[6px]' style={{boxShadow:"0px 2px 21px rgba(255, 255, 255, 0.1)", border:"1px solid rgba(255, 255, 255, 0.2)"}}>
                        <span className='w-[14px] h-[14px] bg-orange absolute top-[25%] left-[110%] rounded-full' style={{boxShadow:"0px 0 0 3px rgba(217, 71, 71, 0.4)"}}></span>
                        <div className='bg-[#141414] px-[13px] py-[15px] rounded-[6px] w-[227px] border-[1px] left-arrow' style={{borderColor:"rgba(255, 255, 255, 0.05)"}}>
                            <h4 className='md:text-[16px] text-[12px] font-[700] md:mb-[8px] mb-[13px] md:leading-[20px] leading-[15px]'>STI TRANSPORTATIONS OFFICE</h4>
                            <p className='text-[12px] font-[400] leading-[150%]'>US MAP</p>
                            <p className='text-[12px] font-[400] leading-[150%]'>Address: 4163 Teak cir</p>
                            <p className='text-[12px] font-[400] leading-[150%]'>Naperville, IL 60564</p>
                            <a href='https://goo.gl/maps/WqEzMLnGJiEh82Tf8' target={'_blank'} className='text-[12px] font-[400] bg-orange hover:bg-orange_hover rounded-[7px] w-[100%] py-[10px] mt-[10px] text-center inline-block'>Go to map</a>
                        </div>
                    </div>
                    <img className='w-[100%]' src={purchase} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Location;