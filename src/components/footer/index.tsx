import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-text.png'

const Footer = () => {

    const navigate = useNavigate()
    
    const relocate = async (id:string) => {
        await navigate("/");
        window.location.href = id;
    }

    return(
        <footer className="md:mt-[270px] mt-[180px] text-[#fff]">
            <div className="my-container">

                {/* footer menu */}
                {/* <div className="md:flex justify-between" style={{alignItems:"center"}}>
                    <div className="md:flex grid text-center md:justify-start">
                        <p onClick={() => relocate("#about-us")} className="md:text-[18px] text-[14px] md:leading-[22px] leading-[17px] md:mr-[40px] md:text-left text-center md:mb-0 mb-[12px] cursor-pointer header-menu-effect inline-block">About</p>
                        <p onClick={() => relocate("#why-sti")} className="md:text-[18px] text-[14px] md:leading-[22px] leading-[17px] md:mr-[40px] md:text-left text-center md:mb-0 mb-[12px] cursor-pointer header-menu-effect inline-block">Why STI</p>
                        <Link to='/purchase' className="md:text-[18px] text-[14px] md:leading-[22px] leading-[17px] md:mr-[40px] md:text-left text-center md:mb-0 mb-[12px] cursor-pointer header-menu-effect inline-block">Lease to purchase</Link>
                        <p onClick={() => relocate("#contact")} className="md:text-[18px] text-[14px] md:leading-[22px] leading-[17px] md:mr-[40px] md:text-left text-center cursor-pointer header-menu-effect inline-block">Contact</p>
                    </div>
                </div> */}

                {/* footer links */}
                <div className="md:flex justify-between mb-[65px] mt-[42px]" style={{alignItems:"center"}}>
                    <div className="md:flex hidden justify-start" style={{alignItems:"end"}}>
                        <img className='xl:w-[164px] w-[144px]' src={logo} alt="" />
                        <p className='text-[16px] font-[400] leading-[13px] ml-[10px]' >2023. All rights reserved.</p>
                    </div>
                    <div className="md:flex justify-end md:mx-0 mx-auto" style={{alignItems:"center"}}>
                        <div className='lg:hidden block w-[280px] md:text-left text-center mx-auto'>
                            <svg className='inline-block md:w-[20px] md:h-[18px] w-[15px] h-[13px]' viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                <path fill='white' d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z"/>
                            </svg>
                            <a target={'_blank'} href='mailto:info@stitruckers.com' className='xl:mr-[42px] lg:mr-[32px] mr-[12px] ml-[9px] font-[400] md:text-[16px] text-[12px] md:leading-[20px] leading-[15px] inline-block cursor-pointer hover:underline'>info@stitruckers.com</a>
                            <br />
                            <svg className='inline-block md:w-[20px] md:h-[18px] w-[15px] h-[13px]' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z" fill="white"/>
                            </svg>
                            <a target={'_blank'} href='mailto:accounting@stitruckers.com' className='xl:mr-[42px] lg:mr-[32px] mr-[12px] ml-[9px] font-[400] md:text-[16px] text-[12px] md:leading-[20px] leading-[15px] inline-block md:my-0 my-[15px] cursor-pointer hover:underline'>accounting@stitruckers.com</a>
                        </div>
                        <div className='lg:flex hidden'>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z" fill="white"/>
                            </svg>
                            <a target={'_blank'} href='mailto:info@stitruckers.com' className='xl:mr-[42px] mr-[32px] ml-[9px] font-[400] text-[16px] leading-[20px] cursor-pointer hover:underline'>info@stitruckers.com</a>

                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z" fill="white"/>
                            </svg>
                            <a target={'_blank'} href='mailto:accounting@stitruckers.com' className='xl:mr-[42px] mr-[32px] ml-[9px] font-[400] text-[16px] leading-[20px] cursor-pointer hover:underline'>accounting@stitruckers.com</a>
                        </div>
                        <div className="flex md:justify-end justify-center" style={{alignItems:"center"}}>
                            <svg className='footer-madia-icon md:w-[30px] md:h-[30px] w-[20px] h-[20px]' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10.5C13.8065 10.5 12.6619 10.9741 11.818 11.818C10.9741 12.6619 10.5 13.8065 10.5 15C10.5 16.1935 10.9741 17.3381 11.818 18.182C12.6619 19.0259 13.8065 19.5 15 19.5C16.1935 19.5 17.3381 19.0259 18.182 18.182C19.0259 17.3381 19.5 16.1935 19.5 15C19.5 13.8065 19.0259 12.6619 18.182 11.818C17.3381 10.9741 16.1935 10.5 15 10.5ZM15 7.5C16.9891 7.5 18.8968 8.29018 20.3033 9.6967C21.7098 11.1032 22.5 13.0109 22.5 15C22.5 16.9891 21.7098 18.8968 20.3033 20.3033C18.8968 21.7098 16.9891 22.5 15 22.5C13.0109 22.5 11.1032 21.7098 9.6967 20.3033C8.29018 18.8968 7.5 16.9891 7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5ZM24.75 7.125C24.75 7.62228 24.5525 8.0992 24.2008 8.45083C23.8492 8.80246 23.3723 9 22.875 9C22.3777 9 21.9008 8.80246 21.5492 8.45083C21.1975 8.0992 21 7.62228 21 7.125C21 6.62772 21.1975 6.15081 21.5492 5.79918C21.9008 5.44754 22.3777 5.25 22.875 5.25C23.3723 5.25 23.8492 5.44754 24.2008 5.79918C24.5525 6.15081 24.75 6.62772 24.75 7.125ZM15 3C11.289 3 10.683 3.0105 8.9565 3.087C7.7805 3.1425 6.9915 3.3 6.2595 3.585C5.6085 3.837 5.139 4.1385 4.6395 4.6395C4.17001 5.0931 3.80903 5.64688 3.5835 6.2595C3.2985 6.9945 3.141 7.782 3.087 8.9565C3.009 10.6125 3 11.1915 3 15C3 18.711 3.0105 19.317 3.087 21.0435C3.1425 22.218 3.3 23.0085 3.5835 23.739C3.8385 24.3915 4.1385 24.861 4.6365 25.359C5.142 25.863 5.6115 26.1645 6.2565 26.4135C6.9975 26.7 7.7865 26.859 8.9565 26.913C10.6125 26.991 11.1915 27 15 27C18.711 27 19.317 26.9895 21.0435 26.913C22.2165 26.8575 23.007 26.7 23.739 26.4165C24.3885 26.163 24.861 25.8615 25.359 25.3635C25.8645 24.858 26.166 24.3885 26.415 23.7435C26.7 23.004 26.859 22.2135 26.913 21.0435C26.991 19.3875 27 18.8085 27 15C27 11.289 26.9895 10.683 26.913 8.9565C26.8575 7.7835 26.7 6.9915 26.415 6.2595C26.1889 5.6475 25.8286 5.09394 25.3605 4.6395C24.9071 4.16977 24.3533 3.80875 23.7405 3.5835C23.0055 3.2985 22.2165 3.141 21.0435 3.087C19.3875 3.009 18.8085 3 15 3ZM15 0C19.0755 0 19.584 0.0149999 21.183 0.0899999C22.7805 0.165 23.868 0.4155 24.825 0.7875C25.815 1.1685 26.649 1.6845 27.483 2.517C28.2457 3.26684 28.8359 4.17388 29.2125 5.175C29.583 6.1305 29.835 7.2195 29.91 8.817C29.9805 10.416 30 10.9245 30 15C30 19.0755 29.985 19.584 29.91 21.183C29.835 22.7805 29.583 23.868 29.2125 24.825C28.837 25.8267 28.2467 26.7339 27.483 27.483C26.7329 28.2455 25.826 28.8356 24.825 29.2125C23.8695 29.583 22.7805 29.835 21.183 29.91C19.584 29.9805 19.0755 30 15 30C10.9245 30 10.416 29.985 8.817 29.91C7.2195 29.835 6.132 29.583 5.175 29.2125C4.17349 28.8367 3.26629 28.2464 2.517 27.483C1.75411 26.7333 1.1639 25.8262 0.7875 24.825C0.4155 23.8695 0.165 22.7805 0.0899999 21.183C0.0194999 19.584 0 19.0755 0 15C0 10.9245 0.0149999 10.416 0.0899999 8.817C0.165 7.218 0.4155 6.132 0.7875 5.175C1.16285 4.17327 1.75321 3.26598 2.517 2.517C3.26651 1.75385 4.17364 1.16359 5.175 0.7875C6.132 0.4155 7.218 0.165 8.817 0.0899999C10.416 0.0194999 10.9245 0 15 0Z" />
                            </svg>
                            <svg className='footer-madia-icon xl:mx-[46px] mx-[36px] md:w-[30px] md:h-[30px] w-[20px] h-[20px]' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 27C18.1826 27 21.2348 25.7357 23.4853 23.4853C25.7357 21.2348 27 18.1826 27 15C27 11.8174 25.7357 8.76516 23.4853 6.51472C21.2348 4.26428 18.1826 3 15 3C11.8174 3 8.76516 4.26428 6.51472 6.51472C4.26428 8.76516 3 11.8174 3 15C3 18.1826 4.26428 21.2348 6.51472 23.4853C8.76516 25.7357 11.8174 27 15 27ZM15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30ZM10.335 16.755L6.588 15.5865C5.778 15.339 5.7735 14.781 6.7695 14.3805L21.369 8.7405C22.2165 8.3955 22.6965 8.832 22.422 9.9255L19.9365 21.6555C19.7625 22.491 19.26 22.6905 18.5625 22.305L14.736 19.473L12.9525 21.195C12.7695 21.372 12.621 21.5235 12.339 21.561C12.0585 21.6 11.8275 21.516 11.658 21.051L10.353 16.7445L10.335 16.755Z"/>
                            </svg>
                            <svg className='footer-madia-icon md:mr-2 md:w-[30px] md:h-[30px] w-[20px] h-[20px]' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 26.907C19.5259 26.522 22.2917 24.9992 24.2352 22.6482C26.1787 20.2971 27.1541 17.2943 26.9631 14.25C26.7721 11.2056 25.429 8.34823 23.2069 6.25857C20.9848 4.16891 18.0503 3.00378 15 3C11.9459 2.99773 9.00592 4.16001 6.77901 6.25002C4.55209 8.34003 3.20586 11.2005 3.01462 14.2486C2.82337 17.2966 3.80151 20.3029 5.74972 22.6549C7.69793 25.0069 10.4696 26.5275 13.5 26.907V18H10.5V15H13.5V12.519C13.5 10.5135 13.71 9.786 14.1 9.0525C14.4842 8.32678 15.0779 7.73353 15.804 7.35C16.377 7.0425 17.0895 6.858 18.3345 6.7785C18.828 6.747 19.467 6.786 20.2515 6.8985V9.7485H19.5C18.1245 9.7485 17.556 9.813 17.217 9.9945C17.0147 10.0985 16.85 10.2632 16.746 10.4655C16.566 10.8045 16.5 11.1405 16.5 12.5175V15H20.25L19.5 18H16.5V26.907ZM15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30Z"/>
                            </svg>
                        </div>
                    </div>
                    {/* mobile logo */}

                    {/* <svg onClick={() => window.scrollTo(0, 0)} className="w-[46px] h-[46px] cursor-pointer md:hidden block mx-auto mt-[37px] mb-[34px]" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="black"/>
                        <circle cx="35" cy="35" r="34.5" stroke="white" strokeOpacity="0.6"/>
                        <path d="M36.7678 17.2322C35.7915 16.2559 34.2085 16.2559 33.2322 17.2322L17.3223 33.1421C16.346 34.1184 16.346 35.7014 17.3223 36.6777C18.2986 37.654 19.8816 37.654 20.8579 36.6777L35 22.5355L49.1421 36.6777C50.1184 37.654 51.7014 37.654 52.6777 36.6777C53.654 35.7014 53.654 34.1184 52.6777 33.1421L36.7678 17.2322ZM32.5 51C32.5 52.3807 33.6193 53.5 35 53.5C36.3807 53.5 37.5 52.3807 37.5 51H32.5ZM32.5 19V35H37.5V19H32.5ZM32.5 35V51H37.5V35H32.5Z" fill="white" fillOpacity="0.6"/>
                    </svg> */}
                    <div className="md:hidden flex justify-center mt-4" style={{alignItems:"end"}}>
                        <img className='w-[76px]' src={logo} alt="" />
                        <p className='text-[12px] font-[400] leading-[15px] ml-[10px]' >2023. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
export default Footer;