import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../configs/axios_config";

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
                    <div className="flex">
                        <Link to='/admin'>Trucks</Link>
                        <Link className="mx-8" to='/comments'>Comments</Link>
                        <Link to='/blogs'>Blogs</Link>
                    </div>
                </div>
            </header>
            {children}
            <footer className="bg-seriy py-5">
                <div className="my-container">
                    <h1>Footer</h1>
                </div>
            </footer>
        </section>
    )
}
export default AdminLayout;