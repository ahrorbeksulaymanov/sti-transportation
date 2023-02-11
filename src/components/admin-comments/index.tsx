import { Empty, message, Popconfirm } from "antd";
import { useEffect, useState } from "react"
import instance from "../../configs/axios_config";
import Loader from "../loader";

const CommentsTable = () => {

    const [refresh, setrefresh] = useState(false)
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState<any>([])

    useEffect(() => {
        setloading(true)
        instance({
            url: "/v1/comment/list",
            method: "get",
          }).then((res:any) => {
            if(res?.data?.data){
                setdata(res?.data?.data);
            }
            setloading(false)
          });
    }, [refresh])

    const deleteItem = (id:number) => {
        instance({
            url: `/v1/comment/${id}`,
            method: "delete",
          }).then((res:any) => {
            setrefresh(!refresh)
            message.success("Ma'lumot o'chirildi!")
          });
    }
    

    return(
        <section className="my-8 my-container">
            <div className="flex justify-between mb-3" style={{alignItems:"center"}}>
                <h3 className="font-bold">Comments list</h3>
            </div>
            {loading ? <Loader /> : data?.length != 0 ?
            <table className="table-striped table-hover text-left w-[100%]">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Company name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Comment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item:any, index:number) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item?.your_name}</td>
                                <td>{item?.company_name} </td>
                                <td>{item?.email_address}</td>
                                <td>{item?.phone_number}</td>
                                <td>{item?.comment}</td>
                                <td>
                                    <div className="flex">
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
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>:
            <Empty />
            }
        </section>
    )
}
export default CommentsTable