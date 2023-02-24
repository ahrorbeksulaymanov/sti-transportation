import {Form, Input, message, Modal, Radio } from "antd";
import { useEffect } from "react";
import { useState } from "react"
import instance from "../../configs/axios_config";
import { PATH_FILE } from "../../constants";
import PicturesWall from "../imageUploader";


const UpdateData = ({isOpenEdit, setIsOpenEdit, refresh, setrefresh, selectedItem}:any) => {

    const [image, setimage] = useState<any>([])
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({...selectedItem})
        let newImages = selectedItem?.images?.map((item:any) => {
            return {
                uid: item.id,
                name: "truck image",
                status: "done",
                url: PATH_FILE + item?.file_name,
              }
            })
        setimage(newImages)
    }, [selectedItem?.id])
    
    const onFinish = (values: any) => {
        const formdata = new FormData();
        formdata.append("name", values?.name)
        formdata.append("description", values?.description)
        formdata.append("price", values?.price)
        formdata.append("is_active", values?.is_active)

        instance({
            url: `/v1/track/${selectedItem?.id}`,
            method: "PUT",
            data: values
        }).then((res:any) => {
            if(res?.data?.data){
                message.success("Ma'lumot o'zgartirildi!")
                setIsOpenEdit(false)
                setrefresh(!refresh)
                form.setFieldsValue({})
            }
        });
    };

    const beforeUpload = (e:any) => {
        const formdata = new FormData()
        formdata.append("image", e)
        instance({
            url: `/v1/track/image/${selectedItem?.id}`,
            method: "POST",
            data: formdata
        }).then((res:any) => {
            if(res?.data?.data){
                setimage([...image, {
                    uid: res?.data?.data.id,
                    name: "truck image",
                    status: "done",
                    url: PATH_FILE + res?.data?.data?.file_name,
                  }])
            }
            
        });
    }

    const onRemove = (e:any) => {
        if(!e.originFileObj){
            instance({
                url: `/v1/track/image/${selectedItem?.id}`,
                method: "DELETE",
                data: {
                    image_id: e.uid
                }
            }).then((res:any) => {
                
            });
        }
        
    }
    
      

    return(
        <Modal title="Truck edit" footer={false} width={1000} open={isOpenEdit} onOk={() => setIsOpenEdit(false)} onCancel={() => setIsOpenEdit(false)}>
            <hr className="mb-4" />

            <PicturesWall setimages={setimage} images={image} maxCount={3} onRemove={onRemove} beforeUpload={beforeUpload} />

            <Form
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
            >
                <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-3">
                        <Form.Item
                            label="Truck name"
                            name="name"
                            rules={[{ required: true, message: 'Please input Truck name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div className="col-span-3">
                        <Form.Item
                            label="Price ($)"
                            name="price"
                            rules={[{ required: true, message: 'Please input Price!' }]}
                        >
                            <Input type="number" />
                        </Form.Item>
                    </div>
                    <div className="col-span-3">
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Please input description!' }]}
                        >
                            <Input.TextArea rows={2} />
                        </Form.Item>
                    </div>
                    <div className="col-span-3">
                        <Form.Item label="Status" name="is_active">
                            <Radio.Group>
                                <Radio.Button value={true}>Active</Radio.Button>
                                <Radio.Button value={false}>Sold out</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                </div>


                <Form.Item>
                    <div className="flex justify-end mt-4">
                        <button onClick={() => setIsOpenEdit(false)} className="bg-orange px-4 py-2 ml-3 rounded-md text-white">Cancel</button>
                        <button className="bg-[blue] px-4 py-2 ml-3 rounded-md text-white">Save</button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default UpdateData