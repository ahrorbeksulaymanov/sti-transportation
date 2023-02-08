import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
                localStorage.clear();
              }
            })
            .catch((err) => {
              navigate('/login')
              localStorage.clear();
            });
      } else {
        localStorage.clear();
        navigate('/login') 
      }
    }, [])

    return(
        <section className="bg-black min-h-[100vh]">
            <header className="bg-seriy py-5">
                <div className="my-container">
                    <div className="flex">
                        <h1 className="mr-8">Trucks</h1>
                        <h1>Blogs</h1>
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