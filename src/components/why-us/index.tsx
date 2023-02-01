
const WhyUs = () => {

    const data1 = [
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
    const data2 = [
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
            <div className="my-card">
                <p className="text-[#D94747] text-[24px] mb-[8px]">Lorem</p>
                <h4 className="text-[52px]  font-[700] leading-[63px] mb-[44px]">WHY CHOOSE US?</h4>
                <div className="grid grid-cols-12 gap-[30px]">
                    {data1.map((item, index) => (
                        <div data-aos={index == 0 ? "fade-right" : "fade-left"} key={index} className="col-span-6 rounded-[24px] bg-[#353535] hover:bg-[#D94747] cursor-pointer duration-[0.2s] py-[24px] px-[24px]">
                            <h3 className="text-[42px] font-[800]">{item.num}</h3>
                            <h4 className="text-[24px] font-[700]">{item.title}</h4>
                            <p className="font-[400] text-[16px] mt-[14px]">{item.description}</p>
                        </div>
                    ))}
                    {data2.map((item, index) => (
                        <div data-aos={index == 0 ? "fade-up-right" : index == 1 ? "zoom-in-up" : "fade-up-left"} key={index} className="col-span-4 rounded-[24px] bg-[#353535] hover:bg-[#D94747] cursor-pointer duration-[0.2s] py-[24px] px-[24px]">
                            <h3 className="text-[42px] font-[800]">{item.num}</h3>
                            <h4 className="text-[24px] font-[700]">{item.title}</h4>
                            <p className="font-[400] text-[16px] mt-[14px]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WhyUs;