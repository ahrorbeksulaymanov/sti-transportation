import { useState } from "react";
import Footer from "../footer";
import Header from "../header";
import MobileSidebar from "../header/sidebarMobile";

const ClientLayout = ({children}: any) => {
    const [open, setOpen] = useState<boolean>(false);


    return(
        <>
            <Header setOpen={setOpen} open={open} />
            <MobileSidebar setOpen={setOpen} open={open} />
            <section>{children}</section>
            <Footer />
        </>
    )
}
export default ClientLayout;