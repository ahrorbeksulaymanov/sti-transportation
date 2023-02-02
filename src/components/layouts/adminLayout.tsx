
const AdminLayout = ({children}: any) => {

    return(
        <section className="bg-white">
            <header className="text-white text-center bg-zinc-400 py-5">
                <h1>Header</h1>
            </header>
            {children}
            <footer className="text-white text-center bg-zinc-400 py-5">
                <h1>Footer</h1>
            </footer>
        </section>
    )
}
export default AdminLayout;