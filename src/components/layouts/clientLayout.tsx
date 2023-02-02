import Header from "../header";

const ClientLayout = ({children}: any) => {

    return(
        <>
            <Header />
            <section>{children}</section>
        </>
    )
}
export default ClientLayout;