import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import useScrollTop from '../../custom-hooks/useOnscrollTopHeight';


const Header = ({setOpen}:any) => {

    const topScroll = useScrollTop()

    const navigate = useNavigate()
    
    const relocate = async (id:string) => {
        await navigate("/");
        window.location.href = id;
    }

    return(
        <>
            <header className={`text-white md:py-[40px] py-[20px]`}>
                <div className="my-container">
                    <div className="flex justify-between" style={{alignItems:"center"}}>
                        <div className="flex justify-start" style={{alignItems:"center"}}>
                            <svg onClick={() => setOpen(true)} className='sm:w-[25px] w-[20px] mr-[13px] md:hidden block cursor-pointer' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path>
                            </svg>
                            <Link to='/'>
                                <img className='lg:w-[230px] sm:w-[180px] w-[148px]' src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="flex justify-end" style={{alignItems:"center"}} >
                            <p onClick={() => relocate("#about-us")} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>About</p>
                            <p onClick={() => relocate("#why-sti")} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Why STI</p>
                            <Link to={'/purchase'} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Lease to purchase</Link>
                            <Link to={'/blogs'} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Blogs</Link>
                            <Link to={'/contact'} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Contact</Link>
                            <a target={'_blank'} href='https://intelliapp.driverapponline.com/c/stitransportationinc?uri_b=ia_stitransportationinc_740871219' className='bg-orange lg:px-[21px] sm:px-[18px] px-[10px] lg:py-[12px] py-[10px] rounded-[100px] lg:text-[16px] sm:text-[14px] text-[12px] hover:bg-orange_hover'>Become a driver</a>
                        </div>
                    </div>
                </div>
            </header>
            {
                <header className={`text-white fixed left-0 right-0 z-10 header-blur-class md:py-[15px] py-[10px] duration-[0.2s] ${topScroll > 1000 ? "top-0 " : "top-[-90px]"}`}>
                <div className="my-container">
                    <div className="flex justify-between" style={{alignItems:"center"}}>
                        <div className="flex justify-start" style={{alignItems:"center"}}>
                            <svg className='sm:w-[25px] w-[20px] mr-[13px] md:hidden block' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path>
                            </svg>
                            <Link to='/'>
                                <img className='lg:w-[230px] sm:w-[180px] w-[148px]' src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="flex justify-end" style={{alignItems:"center"}} >
                            <p onClick={() => relocate("#about-us")} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>About</p>
                            <p onClick={() => relocate("#why-sti")} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Why STI</p>                            
                            <Link to='/purchase' className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Lease to purchase</Link>
                            <Link to={'/blogs'} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Blogs</Link>
                            <Link to={'/contact'} className='lg:text-[18px] md:text-[15px] lg:mr-[40px] md:mr-[20px] md:block hidden header-menu-effect'>Contact</Link>
                            <a target={'_blank'} href='https://intelliapp.driverapponline.com/c/stitransportationinc?uri_b=ia_stitransportationinc_740871219' className='bg-orange lg:px-[21px] sm:px-[18px] px-[10px] lg:py-[12px] py-[10px] rounded-[100px] lg:text-[16px] sm:text-[14px] text-[12px] hover:bg-orange_hover'>Become a driver</a>
                        </div>
                    </div>
                </div>
            </header>
            }
        </>
    )
}
export default Header;