import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../configs/axios_config";
import Logo from '../../assets/images/logo.png'

const AdminLayout = ({children}: any) => {

    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("access_token");
      if(token){
          instance({
            url: `/v1/user`,
            method: "get"
          })
            .then((res) => {
              if(!res?.data?.data){
                navigate('/login')
                localStorage.removeItem("access_token");
              }
            })
            .catch((err) => {
              navigate('/login')
              localStorage.removeItem("access_token");
            });
      } else {
        localStorage.removeItem("access_token");
        navigate('/login') 
      }
    }, [])

    return(
        <section className="bg-black min-h-[100vh]">
            <header className="bg-seriy py-5">
                <div className="my-container">
                    <div className="flex justify-between" style={{alignItems:"center"}}>
                        <Link to='/'>
                            <img className='lg:w-[200px] sm:w-[160px] w-[128px]' src={Logo} alt="" />
                        </Link>
                        <div className="flex">
                          <Link to='/admin'>Trucks</Link>
                          <Link className="mx-8" to='/comments'>Comments</Link>
                          <Link to='/blogs-list'>Blogs</Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mb-[94px]">
              {children}
            </div>
            <footer className="bg-seriy py-5 fixed right-0 left-0 bottom-0">
                <div className="my-container">
                    <h1>Footer</h1>
                </div>
            </footer>
        </section>
    )
}
export default AdminLayout;