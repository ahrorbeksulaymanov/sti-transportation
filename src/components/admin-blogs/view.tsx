import { Modal } from "antd";
import { PATH_FILE } from "../../constants";


const ViewItem = ({isOpenView, setIsOpenView, selectedItem}:any) => {


    return(

            <Modal title="Blog View" footer={[
                <button onClick={() => setIsOpenView(false)} className="bg-orange px-4 py-2 ml-3 rounded-md text-white">Cancel</button>
            ]} width={1000} open={isOpenView} onOk={() => setIsOpenView(false)} onCancel={() => setIsOpenView(false)}>

                {
                    selectedItem?.type == '1' ?
                    <img src={PATH_FILE + selectedItem?.file_url} alt="" />
                    :<video className="w-[100%]" controls>
                        <source src={PATH_FILE + selectedItem?.file_url} />
                    </video>
                }
                
                <div className="grid grid-cols-6">
                    <div className="col-span-3">
                        <label htmlFor="" className="font-bold mt-5 mb-0 block">Blog title</label>
                        <p>{selectedItem?.title}</p>
                    </div>
                </div>
            </Modal>
    )
}
export default ViewItem