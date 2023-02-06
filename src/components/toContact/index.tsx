import purchase from '../../assets/images/to-purchase-img.png'

const ToContact = () => {

    return (
        <section className="my-container text-white">
            <div className="md:pt-[140px] pt-[60px]">
                <p className="text-[#D94747] text-center text-[24px] mb-[8px]">Contact</p>
                <h4 className="font-babes md:text-[52px] text-[36px] text-center font-[400] md:leading-[63px] leading-[43px]">Have any questions? <span className="text-orange">contact us!</span></h4>
                <p className="mt-[16px] md:mb-[90px] mb-[82px] text-center md:text-[20px] text-[14px] leading-[130%] text-[#fff] opacity-[0.7] font-[400] md:w-[48%] w-[100%] mx-auto">Send info to our email hr@stitruckers.com or Fill out the form, and we will reach you.</p>
                
                <form className='lg:w-[788px] md:w-[708px] mx-auto'>
                    <div className="grid grid-cols-12 gap-x-[22px] sm:gap-y-[20px] gap-y-[24px]">
                        <div className="sm:col-span-6 col-span-12">
                            <input name='name' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="text" required placeholder='YOUR NAME *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <input name='company-name' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="text" required placeholder='COMPANY NAME *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <input name='email' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="text" required placeholder='EMAIL ADRESS *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <input name='phone' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' style={{border: '1px solid #353535'}} type="text" required placeholder='YOUR PHONE NUMBER' />
                        </div>
                        <div className="col-span-12">
                            <textarea name='comment' className='text-[14px] leading-[114%] w-[100%] px-[15px] py-[20px] rounded-[4px] bg-[#141414]' rows={4} style={{border: '1px solid #353535'}} required placeholder='COMMENT *' />
                        </div>
                        <div className="sm:col-span-6 col-span-12 sm:hidden block">
                            <div className="flex pl-[14px]">
                                <label className="form-checkbox2">
                                    <p className='text-[14px] leading-[18px] ml-[14px] text-[#fff] opacity-[0.6]'>“I agree to the <a className='text-[#0078BC]' href="#">terms and conditions</a> <br /> as set out by the user agreement.”</p>
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
                                    <p className='text-[14px] leading-[18px] ml-[14px] text-[#fff] opacity-[0.6]'>“I agree to the <a className='text-[#0078BC] hover:underline' href="#">terms and conditions</a> <br /> as set out by the user agreement.”</p>
                                    <input type="checkbox" />
                                    <span className="form-checkbox2-span"></span>
                                </label>
                                {/* <input className='form-checkbox w-[24px]' type="checkbox" />
                                <p className='text-[14px] leading-[18px] ml-[14px] text-[#fff] opacity-[0.6]'>“I agree to the <a className='text-[#0078BC]' href="#">terms and conditions</a> <br /> as set out by the user agreement.”</p> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default ToContact;