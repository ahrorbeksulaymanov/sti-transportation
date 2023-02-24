import { message } from 'antd';
import { useState } from 'react';
import instance from '../../configs/axios_config';
import purchase from '../../assets/images/map.png'
  
const ContactPage = () => {

    const [isAgree, setIsAgree] = useState<boolean>(false)
    const [isAgreeCheck, setIsAgreeCheck] = useState<boolean>(false)

    const submitData = (e:any) => {
        setIsAgreeCheck(false)
        e.preventDefault()
        if(isAgree){
            instance({
                url: `/v1/comment`,
                method: "POST",
                data: {
                    "your_name": e.target.your_name.value,
                    "company_name": e.target.company_name.value,
                    "email_address": e.target.email_address.value,
                    "phone_number": e.target.phone_number.value,
                    "comment": e.target.comment.value
                  }
            }).then((res:any) => {
                if(res?.data?.data){
                    message.success("Request sent!")
                    e.target.reset()
                }
            });
        } else {
            setIsAgreeCheck(true)
            setTimeout(() => {
                setIsAgreeCheck(false)
            }, 100);
        }
    }

    return (
        <div className='my-container'>
            <section className="purchase-first-block mt-[80px] mb-[110px]">
                <h1 data-aos="fade-up" className="lg:text-[140px] md:text-[100px] text-[36px] second-text uppercase">Let's work <br /> <span className="text-orange">together!</span></h1>
                <p data-aos="fade-up" className='lg:text-[22px] md:text-[20px] text-[12px] md:w-[498px] sm:w-[60%] w-[80%]  mx-auto text-center mt-[20px] leading-[132%]'>Send info to our email hr@stitruckers.com or Fill out the form, and we will reach you</p>
            </section>
            <form onSubmit={submitData} className='lg:w-[788px] md:w-[708px] mx-auto'>
                    <div className="grid grid-cols-12 gap-x-[22px] sm:gap-y-[20px] gap-y-[24px]">
                        <div className="sm:col-span-6 col-span-12">
                            <input name='your_name' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="text" required placeholder='YOUR NAME *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <input name='company_name' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="text" required placeholder='COMPANY NAME *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <input name='email_address' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="email" required placeholder='EMAIL ADRESS *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <input name='phone_number' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="text" required placeholder='YOUR PHONE NUMBER' />
                        </div>
                        <div className="col-span-12">
                            <textarea name='comment' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' rows={4} style={{border: '1px solid #353535'}} required placeholder='COMMENT *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12 sm:hidden block">
                            <div className="flex pl-[14px]">
                                <label className="form-checkbox2">
                                    <p className={`text-[14px] leading-[18px] ml-[14px] text-[#fff] opacity-[0.6] ${isAgreeCheck ? " check-comment-agree" : ""}`}>“I agree to the <a className='text-[#0078BC]' href="#">terms and conditions</a> <br /> as set out by the user agreement.”</p>
                                    <input type="checkbox" />
                                    <span className="form-checkbox2-span"></span>
                                </label>
                            </div>
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <button className='w-[100%] learn-more-btn text-[14px] leading-[114%] bg-orange hover:bg-orange_hover py-[20px] rounded-[4px] font-[500] uppercase' style={{alignItems:"center"}}>REQUEST A CALL</button>
                        </div>
                        <div className="sm:col-span-6 col-span-12 sm:block hidden">
                            <div className="flex pl-[30px] mt-2">
                                <label className="form-checkbox2">
                                    <p className={`text-[14px] leading-[18px] ml-[14px] text-[#fff] opacity-[0.6] ${isAgreeCheck ? " check-comment-agree" : ""}`}>“I agree to the <a className='text-[#0078BC] hover:underline' href="#">terms and conditions</a> <br /> as set out by the user agreement.”</p>
                                    <input onChange={(e) => setIsAgree(e.target.checked)} type="checkbox" />
                                    <span className="form-checkbox2-span"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>

                <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px] md:mb-[80px] mb-[52px] md:mt-[140px] mt-[100px]">Our <span className='text-orange'>Address</span> </h4>
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
    )
}
export default ContactPage