import { Drawer } from 'antd';

const MobileSidebar = ({setOpen, open}:any) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default MobileSidebar;
