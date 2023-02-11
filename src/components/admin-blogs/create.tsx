import { Input, message, Modal, Segmented } from "antd";
import { useState } from "react"
import instance from "../../configs/axios_config";
import PicturesWall from "../imageUploader";


const CreateData = ({isOpen, setIsOpen, refresh, setrefresh}:any) => {

    const [image, setimage] = useState<any>([])
    const [is_active, setis_active] = useState<any>("1")

    const saveItem = (e:any) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("title", e.target.title.value)
        formdata.append("type", is_active)
        for (let item of image) {
            formdata.append("file", item.originFileObj)
        }
        instance({
            url: `/v1/blog`,
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

            <Modal title="Blog add" footer={false} width={1000} open={isOpen} onOk={() => setIsOpen(false)} onCancel={() => setIsOpen(false)}>
                <hr className="mb-4" />
                <PicturesWall setimages={setimage} images={image} maxCount={1} />
                <form onSubmit={saveItem}>
                    <div className="grid grid-cols-6 gap-3">
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Blog title</label>
                            <Input required name='title' className="w-[100%] block" placeholder="Name" />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">File</label>
                            <Segmented onChange={(e) => setis_active(e)} options={[{ label: (<div>Image or gif</div>), value: '1'}, { label: (<div>Video</div>), value: '2'}]} />
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