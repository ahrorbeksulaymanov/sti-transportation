import useWindowSize from "../../custom-hooks/useWindowSize/useWindowSize"

type Data = {
    num: String
    title: String
    description: String
}
const WhyUs:React.FC = ():JSX.Element => {

    const {width} = useWindowSize()
    

    const data1:Data[] = [
        {
            num: "01",
            title:"New equipped trucks",
            description: "STI Transportation currently has over 50 equipped 2020-2022 Volvo, Freightliner and Kenworth trucks that are ready to roll. Moreover, our maintenance team always here to help and support with even any minor issues that may occur over the road."
        },
        {
            num: "02",
            title:"Best rates in the market",
            description: "STI has Amazon and broker owned lanes to keep the drivers busy with safe routes. Moreover, STI works only with approved and big brokerage companies in order to keep nationwide deliveries which also enables a company to hire drivers all over 48states"
        }
    ]
    const data2:Data[] = [
        {
            num: "03",
            title:"Safety & Compliance",
            description: "STI keep enlarging its borders and horizons and now offering Lease for rent or Lease to purchase options for their drivers so that way, drivers can work and earn not only money but a truck as well."
        },
        {
            num: "04",
            title:"24/7 monitoring",
            description: "STI treats every driver as a family member and therefore provides 24 hour dispatch and log book services to keep the drivers satisfied with the job."
        },
        {
            num: "05",
            title:"Lease offers",
            description: "STI keep enlarging its borders and horizons and now offering Lease for rent or Lease to purchase options for their drivers so that way, drivers can work and earn not only money but a truck as well."
        }
    ]
    return (
        <section className="my-container text-white">
            <div className="md:pt-[140px] pt-[60px]">
                <p className="text-[#D94747] text-center text-[24px] mb-[8px]">Lorem</p>
                <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px] mb-[44px]">WHY CHOOSE <span className="text-orange">US?</span></h4>
                <div className="grid grid-cols-12 md:gap-[30px] gap-[14px]">
                    {data1.map((item:Data, index:number) => (
                        <div data-aos={width > 768 ? (index === 0 ? "fade-right" : "fade-left") : "zoom-in-up"} key={index} style={{borderColor:"rgba(255, 255, 255, 0.05)"}} className="md:col-span-6 col-span-12 rounded-[4px] bg-[#111] border-[1px] border-solid hover:bg-[#D94747] cursor-pointer duration-[0.2s] py-[24px] px-[20px]">
                            <h3 className="md:text-[42px] text-[36px] font-[800]">{item.num}</h3>  
                            <h4 className="md:text-[24px] text-[18px] font-[700]">{item.title}</h4>
                            <p className="font-[400] md:text-[16px] text-[14px] mt-[14px]">{item.description}</p>
                        </div>
                    ))}
                    {data2.map((item:Data, index:number) => (
                        <div data-aos={width > 768 ? (index === 0 ? "fade-up-right" : index === 1 ? "zoom-in-up" : "fade-up-left") : "zoom-in-up"} key={index} style={{borderColor:"rgba(255, 255, 255, 0.05)"}} className="lg:col-span-4 md:col-span-6 col-span-12  rounded-[4px] bg-[#111] border-[1px] border-solid hover:bg-[#D94747] cursor-pointer duration-[0.2s] py-[24px] px-[20px]">
                            <h3 className="md:text-[42px] text-[36px] font-[800]">{item.num}</h3>
                            <h4 className="md:text-[24px] text-[18px] font-[700]">{item.title}</h4>
                            <p className="font-[400] md:text-[16px] text-[14px] mt-[14px]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WhyUs;