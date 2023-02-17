import { Input, message, Modal, Segmented } from "antd";
import { useEffect, useRef, useState } from "react"
import instance from "../../configs/axios_config";
import PicturesWall from "../imageUploader";


const CreateData = ({isOpen, setIsOpen, refresh, setrefresh}:any) => {

    const [image, setimage] = useState<any>([])
    const [is_active, setis_active] = useState<any>("1")
    const form:any = useRef();

    useEffect(() => {
        form?.current?.reset()
        setimage([])
    }, [isOpen])

    const saveItem = (e:any) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("title", e.target.title.value)
        formdata.append("link", e.target.link.value)
        formdata.append("description", e.target.description.value)
        formdata.append("hashtag", e.target.hashtag.value)
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
                form.current.reset()
            }
        });
    }

    return(

            <Modal title="Blog add" footer={false} width={1000} open={isOpen} onOk={() => {setIsOpen(false); form?.current?.reset()}} onCancel={() => {setIsOpen(false); form?.current?.reset()}}>
                <hr className="mb-4" />
                <PicturesWall setimages={setimage} images={image} maxCount={1} />
                <form onSubmit={saveItem} ref={form}>
                    <div className="grid grid-cols-6 gap-3">
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Blog title</label>
                            <input required name='title' className="w-[100%] block rounded-md px-2 py-1" style={{border:"1px solid #f0f0f0"}} placeholder="Name" />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Blog link (instagram, facebook, telegram, website ...)</label>
                            <input required name='link' className="w-[100%] block rounded-md px-2 py-1" style={{border:"1px solid #f0f0f0"}} placeholder="Link" />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Blog description</label>
                            <textarea required name='description' className="w-[100%] block rounded-md px-2 py-1" style={{border:"1px solid #f0f0f0"}} placeholder="Description" rows={4} />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="" className="mt-3 mb-2 block">Hashtags</label>
                            <input required name='hashtag' className="w-[100%] block rounded-md px-2 py-1" style={{border:"1px solid #f0f0f0"}} placeholder="Hashtags" />
                            <label htmlFor="" className="mt-3 mb-2 block">File type</label>
                            <Segmented onChange={(e) => setis_active(e)} options={[{ label: (<div>Image or gif</div>), value: '1'}, { label: (<div>Video</div>), value: '2'}]} />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={() => setIsOpen(false)} className="bg-orange px-4 py-2 ml-3 rounded-md text-white">Cancel</button>
                        <button type="submit" className="bg-[blue] px-4 py-2 ml-3 rounded-md text-white">Save</button>
                    </div>
                </form>
            </Modal>

    )
}
export default CreateData