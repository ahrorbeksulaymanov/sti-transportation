import {Form, Input, message, Modal, Radio } from "antd";
import { useEffect } from "react";
import instance from "../../configs/axios_config";


const UpdateData = ({isOpenEdit, setIsOpenEdit, refresh, setrefresh, selectedItem}:any) => {

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({...selectedItem})
    }, [selectedItem?.id])
        
    const onFinish = (values: any) => {
        instance({
            url: `/v1/blog/${selectedItem?.id}`,
            method: "PATCH",
            data: {
                title: values?.title
            }
        }).then((res:any) => {
            if(res?.data?.data){
                message.success("Ma'lumot o'zgartirildi!")
                setIsOpenEdit(false)
                setrefresh(!refresh)
                form.setFieldsValue({})
            }
        });
    };

      

    return(
        <Modal title="Blog edit" footer={false} width={1000} open={isOpenEdit} onOk={() => setIsOpenEdit(false)} onCancel={() => setIsOpenEdit(false)}>
            <hr className="mb-4" />

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
                            label="Blog title"
                            name="title"
                            rules={[{ required: true, message: 'Please input Truck name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div className="col-span-3">
                        <Form.Item
                            label="Blog link (instagram, facebook, telegram, website ...)"
                            name="link"
                            rules={[{ required: true, message: 'Please input link!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div className="col-span-3">
                        <Form.Item
                            label="Blog description"
                            name="description"
                            rules={[{ required: true, message: 'Please input description!' }]}
                        >
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </div>
                    <div className="col-span-3">
                        <Form.Item
                            label="Hashtags"
                            name="hashtag"
                            rules={[{ required: true, message: 'Please input hashtag!' }]}
                        >
                            <Input />
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