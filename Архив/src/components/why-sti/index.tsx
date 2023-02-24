import { useState } from 'react'
import whyImg from '../../assets/images/why-sti-img.png'
const WhySTI:React.FC = ():JSX.Element => {

    const [data, setData] = useState([
        {
          id: 1,
          title: "Power only Loads",
          description: "On time pickups and deliveries while remaining safe driving and keeping the safety of the trailer at any destination. Moreover controlling the tires and mud-flaps before leaving the facility with providing actual pictures of a trailer with seal to sustain transparency between broker and customer",
          isOpen: true
        },
        {
          id: 2,
          title: "Dry van Loads",
          description: "New and clean 53 ft dry van trailers, whilst driver keep securing the load with the shipper and controlling the loads weight in each axle to sustain safe deliveries. Our drivers check the seals with BOL and you can be safe even if you do not have any seal as we do have lock-pads for every trailer and we keep washing trailers after each delivery to maintain the clean inside for the next load",
          isOpen: false
        },
        {
          id: 3,
          title: "Refrigerated loads",
          description: "Experienced drivers with the years of experience to maintain the required temperature during the road and surely new, ideally working refrigerated trailers ready for work",
          isOpen: false
        }
    ])

    const toggleCollapse = (id:number) => {
        let newData = data.map(item => {
            if(item.id == id){
                item.isOpen = !item.isOpen
            }else{
                item.isOpen = false
            }
            return item
        })        
        setData(newData)
    }

    return (
        <section id='why-sti' className="my-container text-white">
            <div className="md:pt-[140px] pt-[60px]">
                <p className="text-[#D94747] text-center text-[24px] mb-[8px]">Why STI ?</p>
                <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px]">Manage your package All over <span className="text-orange">48 states</span></h4>
                <p className="mt-[16px] md:mb-[60px] mb-[80px] text-center md:text-[16px] text-[12px] font-[400] md:w-[70%] w-[100%] mx-auto">To get fast and reliable for your cargo with our loyal and experienced drivers where everyone treated as a family member</p>
                <div className="grid grid-cols-12 md:gap-[60px] gap-y-[36px]">
                    <div data-aos='fade-right' className="md:col-span-6 col-span-12">
                        <img className='w-[100%]' src={whyImg} alt="" />
                    </div>
                    <div data-aos='fade-left' className="md:col-span-6 col-span-12">
                        {
                            data.map((item, index) => (
                                <div onClick={() => toggleCollapse(item.id)} key={index} className={`md:py-[36px] py-[24px] cursor-pointer ${index == 0 ? "border-y-[1px]" : "border-b-[1px]"}`} style={{borderColor:"rgba(255, 255, 255, 0.2)"}}>
                                    <div className='flex justify-between'>
                                        <h3 className='font-babes uppercase md:text-[36px] text-[18px]  font-[400] md:leading-[43px] leading-[22px]' ><span className='text-orange'>{item.title.split(" ")[0]}</span> {item.title.split(" ").slice(1).join(" ")}</h3>
                                        <svg className={`md:w-[36px] md:h-[37px] w-[22px] h-[22px] collapse-arrow duration-200 ${item.isOpen ? "rotate-0" :"rotate-90"}`} viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.37868 29.8787C0.207107 31.0503 0.207107 32.9497 1.37868 34.1213C2.55025 35.2929 4.44975 35.2929 5.62132 34.1213L1.37868 29.8787ZM35.5 3C35.5 1.34315 34.1569 0 32.5 0H5.5C3.84315 0 2.5 1.34315 2.5 3C2.5 4.65685 3.84315 6 5.5 6H29.5V30C29.5 31.6569 30.8431 33 32.5 33C34.1569 33 35.5 31.6569 35.5 30V3ZM5.62132 34.1213L34.6213 5.12132L30.3787 0.87868L1.37868 29.8787L5.62132 34.1213Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <p className={`collapse-description text-[14px] font-[400] overflow-hidden w-[90%] ${item.isOpen ? "h-[80px] mt-[16px]" : "h-0" }`}>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhySTI;