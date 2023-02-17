import { Input, message, Modal, Segmented } from "antd";
import { useEffect, useRef, useState } from "react"
import instance from "../../configs/axios_config";
import PicturesWall from "../imageUploader";


const CreateData = ({isOpen, setIsOpen, refresh, setrefresh}:any) => {

    const form:any = useRef();
    const [image, setimage] = useState<any>([])
    const [is_active, setis_active] = useState<any>(true);

    useEffect(() => {
        form?.current?.reset()
        setimage([])
    }, [isOpen])

    const saveItem = (e:any) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("name", e.target.name.value)
        formdata.append("description", e.target.description.value)
        formdata.append("price", e.target.price.value)
        formdata.append("is_active", is_active)
        for (let item of image) {
            formdata.append("images", item.originFileObj)
        }
        instance({
            url: `/v1/track`,
            method: "POST",
            data: formdata
        }).then((res:any) => {
            if(res?.data?.data){
                message.success("Ma'lumot yaratildi!")
                setIsOpen(false)
                setrefresh(!refresh)
                e.target.reset()
            }
        });
    }

    return(

            <Modal title="Truck add" footer={false} width={1000} open={isOpen} onOk={() => setIsOpen(false)} onCancel={() => setIsOpen(false)}>
                <hr className="mb-4" />
                <PicturesWall setimages={setimage} images={image} maxCount={3} />
                <form ref={form} onSubmit={saveItem}>
                    <div className="grid grid-cols-6 gap-3">
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Truck name</label>
                            <input required name='name' className="w-[100%] block rounded-md px-2 py-1" style={{border:"1px solid #f0f0f0"}} placeholder="Name" />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Description</label>
                            <input name='description' className="w-[100%] block rounded-md px-2 py-1" style={{border:"1px solid #f0f0f0"}} placeholder="Description" />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Price ($)</label>
                            <input required name='price' className="w-[100%] block rounded-md px-2 py-1" style={{border:"1px solid #f0f0f0"}} placeholder="Price" type="number" />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Status</label>
                            <Segmented onChange={(e) => setis_active(e == 1)} options={[{ label: (<div>Active</div>), value: '1'}, { label: (<div>Sold out</div>), value: '2'}]} />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={() => setIsOpen(false)} className="bg-orange px-4 py-2 ml-3 rounded-md text-white">Cancel</button>
                        <button className="bg-[blue] px-4 py-2 ml-3 rounded-md text-white">Save</button>
                    </div>
                </form>
            </Modal>

    )
}
export default CreateData