import { Carousel, Modal } from "antd";
import { useRef } from "react";
import { PATH_FILE } from "../../constants";


const ViewItem = ({isOpenView, setIsOpenView, selectedItem}:any) => {

    const caruselRef:any = useRef(null)

    return(

            <Modal title="Truck View" footer={[
                <button onClick={() => setIsOpenView(false)} className="bg-orange px-4 py-2 ml-3 rounded-md text-white">Cancel</button>
            ]} width={1000} open={isOpenView} onOk={() => setIsOpenView(false)} onCancel={() => setIsOpenView(false)}>
                <Carousel ref={caruselRef}>
                    {
                        selectedItem?.images?.map((item:any, index:number) => (
                            <div key={index}>
                                <img src={PATH_FILE + item?.file_name} alt="" />
                            </div>
                        ))
                    }
                </Carousel>
                <div className="flex justify-center">
                    <button className="mr-4" onClick={() => caruselRef.current.next()}>
                    <svg width={30}  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
                    </svg>
                    </button>
                    <button className="ml-4" onClick={() => caruselRef.current.prev()}>
                        <svg width={30} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-6">
                    <div className="col-span-3">
                        <label htmlFor="" className="font-bold mt-5 mb-0 block">Truck name</label>
                        <p>{selectedItem?.name}</p>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="" className="font-bold mt-5 mb-0 block">Price</label>
                        <p>{selectedItem?.price}</p>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="" className="font-bold mt-5 mb-0 block">Description</label>
                        <p>{selectedItem?.description}</p>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="" className="font-bold mt-5 mb-0 block">Status</label>
                        <p>{selectedItem?.is_active ? "Active" : "Sold out"}</p>
                    </div>
                </div>
            </Modal>
    )
}
export default ViewItem