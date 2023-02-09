import { useEffect, useState } from 'react';
import imgTruck from '../../assets/images/truck-1.png'
import instance from '../../configs/axios_config';

const PurchaseTrucks = () => {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        instance({
            url: "/v1/track/list",
            method: "get",
          }).then((res:any) => {
            if(res?.data?.data){
                setdata(res?.data?.data);
                setloading(false)
            }

          });
    }, [])

    return (
        <section>
            <div className="my-container">
                {
                    data?.map((item:any, index:number) => (
                        index % 2 == 0 ?
                        <div key={item?.id} data-aos="fade-up" className="grid grid-cols-12 xl:gap-0 md:gap-x-[40px] md:mb-[125px] mb-[50px]">
                            {/* first block  */}
                            <div className="md:col-span-4 col-span-12 my-auto">
                                <h3 className="uppercase xl:text-[76px] md:text-[60px] text-[36px] font-babes xl:leading-[91px] md:leading-[70px] leading-[43px]">{item?.name}</h3>
                                <p className="xl:text-[24px] md:text-[20px] text-[12px] md:leading-[29px] leading-[15px] md:mb-0 mb-[24px]">{item?.description}</p>
                            </div>
                            <div className="md:col-span-8 col-span-12">
                                <div className="grid grid-cols-12 md:gap-[20px] gap-[8px]">
                                    <div className="col-span-9 relative">
                                        <div className="sale-badge uppercase font-babes lg:text-[28px] md:text-[22px] text-[16px] lg:leading-[34px] md:leading-[30px] leading-[19px] absolute lg:bottom-[30px] md:bottom-[20px] bottom-[15px] lg:right-[20px] right-[8px] lg:py-[10px] py-[6px] lg:px-[30px] px-[20px] rounded-full bg-orange">{item?.is_active ? "Sold" : "Sale"}</div>
                                        <img className='w-[100%]' src={imgTruck} alt="" />
                                    </div>
                                    <div className="col-span-3">
                                        <img className='w-[100%] xl:h-[47.5%] lg:h-[46.5%] md:h-[46%] h-[48.5%] object-cover md:mb-[20px] mb-[8px]' src={imgTruck} alt="" />
                                        <img className='w-[100%] xl:h-[47.5%] lg:h-[46.5%] md:h-[46%] h-[48.5%] object-cover' src={imgTruck} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>:
                        <div key={item?.id} data-aos="fade-up" className="grid grid-cols-12 xl:gap-[20px] md:gap-x-[40px] gap-0 md:mb-[125px] mb-[50px]">
                            {/* second block  */}
                            <div className="md:col-span-4 col-span-12 my-auto md:hidden block">
                                <div className='xl:pl-[83px] md:pl-[33px]'>
                                    <h3 className="uppercase xl:text-[76px] md:text-[60px] text-[36px] font-babes xl:leading-[91px] md:leading-[70px] leading-[43px]">{item?.name}</h3>
                                    <p className="xl:text-[24px] md:text-[20px] text-[12px] md:leading-[29px] leading-[15px] md:mb-0 mb-[24px]">{item?.description}</p>
                                </div>
                            </div>
                            <div className="md:col-span-8 col-span-12">
                                <div className="grid grid-cols-12 md:gap-[20px] gap-[8px]">
                                    <div className="col-span-9 relative">
                                        <div className="sale-badge uppercase font-babes lg:text-[28px] md:text-[22px] text-[16px] lg:leading-[34px] md:leading-[30px] leading-[19px] absolute lg:bottom-[30px] md:bottom-[20px] bottom-[15px] lg:right-[20px] right-[8px] lg:py-[10px] py-[6px] lg:px-[30px] px-[20px] rounded-full bg-orange">{item?.is_active ? "Sold" : "Sale"}</div>
                                        <img className='w-[100%]' src={imgTruck} alt="" />
                                    </div>
                                    <div className="col-span-3">
                                        <img className='w-[100%] xl:h-[47.5%] lg:h-[46.5%] md:h-[46%] h-[48.5%] object-cover md:mb-[20px] mb-[8px]' src={imgTruck} alt="" />
                                        <img className='w-[100%] xl:h-[47.5%] lg:h-[46.5%] md:h-[46%] h-[48.5%] object-cover' src={imgTruck} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-4 col-span-12 my-auto md:block hidden">
                                <div className='xl:pl-[83px] md:pl-[33px]'>
                                    <h3 className="uppercase xl:text-[76px] md:text-[60px] text-[36px] font-babes xl:leading-[91px] md:leading-[70px] leading-[43px]">{item?.name}</h3>
                                    <p className="xl:text-[24px] md:text-[20px] text-[12px] md:leading-[29px] leading-[15px] md:mb-0 mb-[24px]">{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }


 
            </div>
        </section>
    )
}

export default PurchaseTrucks;