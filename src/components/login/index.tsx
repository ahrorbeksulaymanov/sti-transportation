import './style.scss'

const Login = () => {
    return (
        <section className="login-page h-[100vh] relative">
            <div className="login-form-wrapper absolute top-[50%] left-[50%] w-[600px] bg-white rounded-xl p-10">
                <h1 className='font-[700] text-[24px]'>Wellcome to login page</h1><br />
                <form>
                    <input className='w-[100%] block p-2 rounded-md' type="text" placeholder='Login' /><br />
                    <input className='w-[100%] block p-2 rounded-md' type="text" placeholder='Password' />
                    <button className='bg-[#8350a4] px-6 py-3 text-white font-bold mt-4 rounded-md hover:bg-[#7a38a5]'>Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Login;