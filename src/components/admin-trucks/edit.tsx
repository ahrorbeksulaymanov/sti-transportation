import { Input, message, Modal, Segmented } from "antd";
import { useState } from "react"
import instance from "../../configs/axios_config";
import PicturesWall from "../imageUploader";


const UpdateData = ({isOpenEdit, setIsOpenEdit, refresh, setrefresh, selectedItem}:any) => {

    const [image, setimage] = useState<any>([])
    const [is_active, setis_active] = useState<any>(false)

    console.log("selectedItem", selectedItem);
    

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
            url: `/v1/track/${selectedItem?.id}`,
            method: "PUT",
            data: formdata
        }).then((res:any) => {
            if(res?.data?.data){
                message.success("Ma'lumot yaratildi!")
                setIsOpenEdit(false)
                setrefresh(!refresh)
            }
        });
    }

    return(
        <Modal title="Truck edit" footer={false} width={1000} open={isOpenEdit} onOk={() => setIsOpenEdit(false)} onCancel={() => setIsOpenEdit(false)}>
            <hr className="mb-4" />
            <PicturesWall setimages={setimage} images={image} maxCount={3} />
            <form onSubmit={saveItem}>
                <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-3">
                        <label htmlFor="" className="mt-3 mb-2 block">Truck name</label>
                        <Input value={'selectedItem?.name'} required name='name' className="w-[100%] block" placeholder="Name" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="" className="mt-3 mb-2 block">Description</label>
                        <Input name='description' className="w-[100%] block" placeholder="Description" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="" className="mt-3 mb-2 block">Price ($)</label>
                        <Input required name='price' className="w-[100%] block" placeholder="Price" type="number" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="" className="mt-3 mb-2 block">Status</label>
                        <Segmented value={is_active} onChange={(e) => setis_active(e == 1)} options={[{ label: (<div>Active</div>), value: '1'}, { label: (<div>Sold out</div>), value: '2'}]} />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={() => setIsOpenEdit(false)} className="bg-orange px-4 py-2 ml-3 rounded-md text-white">Cancel</button>
                    <button className="bg-[blue] px-4 py-2 ml-3 rounded-md text-white">Save</button>
                </div>
            </form>
        </Modal>
    )
}
export default UpdateData