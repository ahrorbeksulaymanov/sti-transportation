import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../configs/axios_config';
import { userContext } from '../../context';
import './style.scss'


const Login = () => {

    const [error, setError] = useState({msg: "", isError:false})
    let navigate = useNavigate();

    const {setUser}:any = useContext(userContext);

    const loginFunc = (e:any) => {
        try {
            e.preventDefault();
            instance({
                url: "/v1/login",
                method: "POST",
                data:{
                    email: e.target.username.value,
                    password: e.target.password.value
                }
              }).then((res:any) => {
                if(res?.data){
                    localStorage.setItem("access_token", res?.data?.data?.access_token)
                    localStorage.setItem("refresh_token", res?.data?.data?.refresh_token)
                    setUser(res?.data?.data?.user)
                    setError({msg: '', isError: false})
                    navigate('/admin')
                }else{
                    setError({msg: res?.response?.data?.detail?.message, isError: true})
                }
              });
        } catch (error:any) {
            setError({msg: error.message, isError: true})
        }
    }

    return (
        <section className="login-page h-[100vh] relative">
            <div className="text-black login-form-wrapper absolute top-[50%] left-[50%] w-[600px] rounded-xl p-10">
                <h1 className='font-[700] text-[24px]'>Wellcome to login page</h1>
                {error.isError ? <p className='text-[red]'>{error.msg}</p>:""}
                <form onSubmit={loginFunc}>
                    <input name='username' className='w-[100%] block p-2 rounded-md mt-3' type="text" placeholder='Login' required /><br />
                    <input name='password' className='w-[100%] block p-2 rounded-md' type="text" placeholder='Password' required />
                    <button className='bg-orange px-6 py-3 text-white font-bold mt-4 rounded-md hover:bg-orange_hover'>Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Login;