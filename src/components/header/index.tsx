import Logo from '../../assets/images/logo.png'
const Header = () => {

    return(
        <header className="md:py-[40px] py-[20px] text-white">
            <div className="my-container">
                <div className="flex justify-between" style={{alignItems:"center"}}>
                    <div className="flex justify-start" style={{alignItems:"center"}}>
                        <svg className='sm:w-[25px] w-[20px] mr-[13px] md:hidden block' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path>
                        </svg>
                        <img className='lg:w-[230px] sm:w-[180px] w-[148px]' src={Logo} alt="" />
                    </div>
                    <div className="flex justify-end" style={{alignItems:"center"}} >
                        <p className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden'>About</p>
                        <p className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden'>Why STI</p>
                        <p className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden'>Lease to purchase</p>
                        <p className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden'>Contact</p>
                        <button className='bg-[#EE3532] lg:px-[21px] sm:px-[18px] px-[10px] lg:py-[12px] py-[10px] rounded-[100px] lg:text-[16px] sm:text-[14px] text-[12px] hover:bg-[#c02c29]'>Become a driver</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;