import { Empty, message, Popconfirm } from "antd";
import { useEffect, useState } from "react"
import instance from "../../configs/axios_config";
import Loader from "../loader";
import CreateData from "./create";
import UpdateData from "./edit";
import ViewItem from "./view";

const BlogsTable = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [refresh, setrefresh] = useState(false)
    const [isOpenView, setIsOpenView] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState<any>([])
    const [selectedItem, setselectedItem] = useState<any>({})

    useEffect(() => {
        setloading(true)
        instance({
            url: "/v1/blog/list",
            method: "get",
          }).then((res:any) => {
            if(res?.data?.data){
                setdata(res?.data?.data?.items);
            }
            setloading(false)
          });
    }, [refresh])

    const deleteItem = (id:number) => {
        instance({
            url: `/v1/blog/${id}`,
            method: "delete",
          }).then((res:any) => {
            setrefresh(!refresh)
            message.success("Ma'lumot o'chirildi!")
          });
    }
    
    const viewItem = (item:any) => {
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
                <h3 className="font-bold">Blogs list</h3>
                <button onClick={() => setIsOpen(true)} className="bg-orange rounded-md px-6 py-2 hover:bg-orange_hover">Add + </button>
            </div>
            {loading ? <Loader /> : data?.length != 0 ?
            <table className="table-striped table-hover text-left w-[100%]">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Blog title</th>
                        <th>Blog hashtags</th>
                        <th>Blog link</th>
                        <th>Blog description</th>
                        <th>File type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item:any, index:number) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item?.title}</td>
                                <td>{item?.hashtag}</td>
                                <td>{item?.link}</td>
                                <td>{item?.description}</td>
                                <td>{item?.type == 1 ? "Image" : "Video"} </td>
                                <td>
                                    <div className="flex">
                                        <svg onClick={() => viewItem(item)} className='cursor-pointer text-[#95de64]' width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                                                <svg className="mx-4 cursor-pointer text-[#ff7875]" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
                                                </svg>
                                            </Popconfirm>
                                            <svg onClick={() => editItem(item)} className='cursor-pointer text-[#ffc069]' width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
            <UpdateData isOpenEdit={isOpenEdit} setIsOpenEdit={setIsOpenEdit} refresh={refresh} setrefresh={setrefresh} selectedItem={selectedItem} />

            <ViewItem isOpenView={isOpenView} setIsOpenView={setIsOpenView} selectedItem={selectedItem} />
        </section>
    )
}
export default BlogsTable