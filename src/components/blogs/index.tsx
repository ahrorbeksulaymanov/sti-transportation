import { useEffect, useState } from 'react';
import instance from '../../configs/axios_config';
import { PATH_FILE } from '../../constants';
import Loader from '../loader';

  
const AllBlogs = () => {

    const [data, setData] = useState([1,1, 1, 1, 1, 1, 1])
    const [loading, setloading] = useState(true)
    const [refresh, setrefresh] = useState(false)
    const [pageSize, setpageSize] = useState(2)
    const [currentPage, setcurrentPage] = useState(1)
    const [pageCount, setpageCount] = useState(1)
    const [total, settotal] = useState(10)

    useEffect(() => {
        setloading(true)
        instance({
            url: "/v1/blog/list",
            method: "get",
            params:{
                page:currentPage,
                size:11
            }
          }).then((res:any) => {
            if(res?.data?.data){
                setData(res?.data?.data?.items);
                setpageSize(res?.data?.data?.pages)
                settotal(res?.data?.data?.total)
            }
            setloading(false)
          });
    }, [refresh])

    const parseDate = (time:any) => {        
        let a = time.split("-")
        let year = a[0];
        let month = a[1];
        let day = a[2].slice(0, 2);
        const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
        const month2Name = formatter.format(new Date(year, month-1, day));
        return `${a[1]} ${month2Name} ${a[2].slice(0, 2)}`
    }

    return (
        <div>
            <section className="purchase-first-block mt-[80px] mb-[110px]">
                <h1 data-aos="fade-up" className="lg:text-[140px] md:text-[100px] text-[36px] second-text uppercase">Our <span className="text-orange">Blog</span></h1>
                <p data-aos="fade-up" className='lg:text-[22px] md:text-[20px] text-[12px] md:w-[736px] sm:w-[60%] w-[80%]  mx-auto text-center mt-[20px] leading-[132%]'>Lorem ipsum dolor sit amet consectetur. Et risus vulputate lorem praesent viverra lectus. Aliquet ipsum pretium felis rutrum tortor suspendisse sed tincidunt. Pulvinar aliquet.</p>
            </section>
                <div className="my-container">    
                    <p className='md:text-[24px] text-[16px] md:text-left text-center font-[400] md:mb-[25px] mb-[20px]'>Resent blog posts</p>
            {
                loading ? <Loader /> :
                    
                    <>
                        <div className="grid grid-cols-6 gap-[30px]">
                            {
                                data?.slice(0, 2).map((item:any, index:number) => (
                                    <div data-aos="fade-up"  key={index} className="md:col-span-3 col-span-6">
                                        <img className='w-[100%] xl:h-[437px] h-[320px] object-cover' src={PATH_FILE + item.file_url} alt="" />
                                        <span className='md:text-[16px] text-[12px] inline-block font-[400] mt-[20px] mb-[10px]'>{parseDate(item?.created_at)}</span>
                                        <div className="flex justify-between md:mb-[20px] mb-[10px]" style={{alignItems:"center"}}>
                                            <h4 className='md:text-[28px] text-[18px] font-[600] md:leading-[33px] leading-[22px] w-[70%] '>{item?.title}</h4>
                                            <svg className='md:inline-block hidden' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.585786 20.5858C-0.195262 21.3668 -0.195262 22.6332 0.585786 23.4142C1.36683 24.1953 2.63317 24.1953 3.41421 23.4142L0.585786 20.5858ZM24 2C24 0.89543 23.1046 0 22 0H4C2.89543 0 2 0.89543 2 2C2 3.10457 2.89543 4 4 4H20V20C20 21.1046 20.8954 22 22 22C23.1046 22 24 21.1046 24 20V2ZM3.41421 23.4142L23.4142 3.41421L20.5858 0.585786L0.585786 20.5858L3.41421 23.4142Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <p className='md:text-[18px] text-[14px] font-[400] md:leading-[22px] leading-[17px] mb-[26px] line-count-3'>{item?.description}</p>
                                        <div className="flex justify-start" style={{alignItems:"center"}}>
                                            {
                                                item?.hashtag?.split("#")?.map((h:string, i:number) => (
                                                    h?.length > 0 ? <span key={i} className='inline-block text-orange rounded-full px-[13px] py-[6px] text-[14px] leading-[14px] mr-[15px]' style={{border:"1px solid #EE3532"}}>#{h}</span> : ""
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <p className='md:text-[24px] text-[16px] md:text-left text-center font-[400] md:mb-[25px] mb-[20px] md:mt-[80px] mt-[50px]'>All blog posts</p>
                        <div className="grid grid-cols-12 gap-x-[20px] gap-y-[71px]">
                            {
                                data?.slice(2).map((item:any, index:number) => (
                                    <div data-aos="fade-up"  key={index+3} className="lg:col-span-4 md:col-span-6 col-span-12">
                                        <div className='duration-200 cursor-pointer hover:translate-y-[-10px]'>
                                            <img className='w-[100%] xl:h-[300px] md:h-[200px] h-[320px] object-cover' src={PATH_FILE + item?.file_url} alt="" />
                                            <span className='md:text-[16px] text-[12px] inline-block font-[400] mt-[20px] mb-[10px]'>{parseDate(item?.created_at)}</span>
                                            <div className="flex justify-between md:mb-[20px] mb-[10px]" style={{alignItems:"center"}}>
                                                <h4 className='md:text-[24px] text-[18px] font-[600] md:leading-[33px] leading-[22px] w-[90%] '>{item?.title}</h4>
                                                <svg className='md:inline-block hidden' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.585786 20.5858C-0.195262 21.3668 -0.195262 22.6332 0.585786 23.4142C1.36683 24.1953 2.63317 24.1953 3.41421 23.4142L0.585786 20.5858ZM24 2C24 0.89543 23.1046 0 22 0H4C2.89543 0 2 0.89543 2 2C2 3.10457 2.89543 4 4 4H20V20C20 21.1046 20.8954 22 22 22C23.1046 22 24 21.1046 24 20V2ZM3.41421 23.4142L23.4142 3.41421L20.5858 0.585786L0.585786 20.5858L3.41421 23.4142Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <p className='md:text-[16px] text-[14px] font-[400] md:leading-[20px] leading-[17px] mb-[26px] line-count-3'>{item?.description}</p>
                                            <div className="flex justify-start" style={{alignItems:"center"}}>
                                                {
                                                    item?.hashtag?.split("#")?.map((h:string, i:number) => (
                                                        h?.length > 0 ? <span key={i} className='inline-block text-orange rounded-full px-[13px] py-[6px] text-[14px] leading-[14px] mr-[15px]' style={{border:"1px solid #EE3532"}}>#{h}</span> : ""
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>}
                    <div className='text-center mt-[50px] text-white blog-pagination flex justify-between'>
                        {
                            currentPage > 1 ?
                        <a onClick={() => {setcurrentPage(currentPage-1); setrefresh(!refresh)}} className='flex md:text-[16px] text-[12px] hover:translate-x-[-4px]' style={{alignItems:"center", transition:"0.2s"}}>
                            <svg className='md:mr-[18px] mr-[10px] rotate-180' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" fill="white"/>
                            </svg>Previous
                        </a>:<p className='md:w-[102px] w-[77px]'></p>
                        }
                        
                        <div className='flex'>
                            {[...Array(pageSize)].map((item, index) => ( 
                                <span onClick={() => {setcurrentPage(index+1); setrefresh(!refresh)}} className={`inline-block md:text-[16px] text-[12px] md:px-[19px] px-[13px] md:py-[12px] py-[8px] mx-[2px] cursor-pointer rounded-[6px] ${currentPage == (index+1) ? "bg-orange" : "" }`}>{index+1}</span> 
                                ) 
                            )}
                        </div>
                        {
                            currentPage != pageSize ? 
                            <a onClick={() => {setcurrentPage(currentPage+1); setrefresh(!refresh)}} className='flex hover:translate-x-[4px] md:text-[16px] text-[12px]' style={{alignItems:"center", transition:"0.2s"}}>Next 
                                <svg className='md:ml-[18px] ml-[10px]' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" fill="white"/>
                                </svg>
                            </a> : <p className='md:w-[70px] w-[54px]'></p>
                        }
                    </div>
                </div>
            
        </div>
    )
}
export default AllBlogs