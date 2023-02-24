import { Drawer } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

const MobileSidebar = ({setOpen, open}:any) => {
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate()
    
  const relocate = async (id:string) => {
      await navigate("/");
      window.location.href = id;
      onClose()
  }

  return (
    <>
      <Drawer title={<><img className='lg:w-[230px] sm:w-[180px] w-[148px] ml-[20px] ' src={Logo} alt="" /></>} placement="left" style={{background:"#000", color:"#fff"}} onClose={onClose} open={open}>
        <p onClick={() => relocate("#about-us")} className='lg:text-[18px] md:text-[15px] xl:mr-[40px] lg:mr-[30px] md:mr-[15px] py-3 cursor-pointer hover:text-[#fff] hover:translate-x-1' style={{transition:"0.2s"}}>About</p>
        <p onClick={() => relocate("#why-sti")} className='lg:text-[18px] md:text-[15px] xl:mr-[40px] lg:mr-[30px] md:mr-[15px] py-3 cursor-pointer hover:text-[#fff] hover:translate-x-1' style={{transition:"0.2s"}}>Why STI</p>
        <Link onClick={onClose} to={'/purchase'} className='lg:text-[18px] md:text-[15px] xl:mr-[40px] lg:mr-[30px] md:mr-[15px] block py-3 cursor-pointer hover:text-[#fff] hover:translate-x-1' style={{transition:"0.2s"}}>Lease to purchase</Link>
        <Link onClick={onClose} to={'/blogs'} className='lg:text-[18px] md:text-[15px] xl:mr-[40px] lg:mr-[30px] md:mr-[15px] block py-3 cursor-pointer hover:text-[#fff] hover:translate-x-1' style={{transition:"0.2s"}}>Blogs</Link>
        <Link onClick={onClose} to={'/contact'} className='lg:text-[18px] md:text-[15px] xl:mr-[40px] lg:mr-[30px] md:mr-[15px] block py-3 cursor-pointer hover:text-[#fff] hover:translate-x-1' style={{transition:"0.2s"}}>Contact</Link>
      </Drawer>
    </>
  );
};
export default MobileSidebar;
