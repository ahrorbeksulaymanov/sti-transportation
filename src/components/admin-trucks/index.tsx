import { Empty, message, Modal, Popconfirm } from "antd";
import { useEffect, useState } from "react"
import instance from "../../configs/axios_config";
import CreateData from "./create";
import UpdateData from "./edit";

const TruckTable = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [refresh, setrefresh] = useState(false)
    const [isOpenView, setIsOpenView] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [image, setimage] = useState<any>([])
    const [data, setdata] = useState<any>([])
    const [selectedItem, setselectedItem] = useState<any>({})

    useEffect(() => {
        instance({
            url: "/v1/track/list",
            method: "get",
          }).then((res:any) => {
            console.log(res?.data?.data);
            setdata(res?.data?.data);
          });
    }, [refresh])

    const deleteItem = (id:number) => {
        instance({
            url: `/v1/track/${id}`,
            method: "delete",
          }).then((res:any) => {
            setrefresh(!refresh)
            message.success("Ma'lumot o'chirildi!")
          });
    }

    const ViewItem = (item:any) => {
        setIsOpenView(true)
        setselectedItem(item)
    }

    const editItem = (item:any) => {
        setIsOpenEdit(true)
        setselectedItem(item)
    }

    return(
        <section className="my-8 my-container">
            <div className="flex justify-between mb-3" style={{alignItems:"center"}}>
                <h3 className="font-bold">Trucks list</h3>
                <button onClick={() => setIsOpen(true)} className="bg-orange rounded-md px-6 py-2 hover:bg-orange_hover">Add + </button>
            </div>
            {[{}].length != 0 ? 
            <table className="table-striped table-hover text-left w-[100%]">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item:any, index:number) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item?.name}</td>
                                <td>
                                    {
                                        item.is_active ? 
                                        <span className="bg-[#52c41a] text-[14px] text-white px-3 py-1 rounded-full">Active</span>
                                        :<span className="bg-[#faad14] text-[14px] text-white px-3 py-1 rounded-full">Sold out</span>
                                    }
                                </td>
                                <td>{item?.description}</td>
                                <td>
                                    <div className="flex">
                                        <svg onClick={() => ViewItem(item)} className='cursor-pointer' width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                            <Popconfirm
                                                placement="top"
                                                title={'Do you want to delete?'}
                                                description={"Deleted data cannot be recovered"}
                                                onConfirm={() => deleteItem(item?.id)}
                                                okText="Yes"
                                                cancelText="No"
                                                okButtonProps={<button className="bg-orange">Ok</button>}
                                            >
                                                <svg className="mx-4 cursor-pointer" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
                                                </svg>
                                            </Popconfirm>
                                            <svg onClick={() => editItem(item)} className='cursor-pointer' width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                                            </svg>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>:
            <Empty />
            }

            <CreateData isOpen={isOpen} setIsOpen={setIsOpen} refresh={refresh} setrefresh={setrefresh} />
            <UpdateData isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} refresh={refresh} setrefresh={setrefresh} selectedItem={selectedItem} />

            {/* view modal  */}
            <Modal title="Truck View" footer={[
                <button onClick={() => setIsOpenView(false)} className="bg-orange px-4 py-2 ml-3 rounded-md text-white">Cancel</button>
            ]} width={1000} open={isOpenView} onOk={() => setIsOpenView(false)} onCancel={() => setIsOpenView(false)}>
                <img src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="grid grid-cols-6">
                    <div className="col-span-3">
                        <label htmlFor="" className="font-bold mt-3 mb-2 block">Truck name</label>
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="" className="font-bold mt-3 mb-2 block">Status</label>
                        <p>Not sale</p>
                    </div>
                </div>
            </Modal>
        </section>
    )
}
export default TruckTable