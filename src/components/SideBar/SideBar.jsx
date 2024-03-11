const SideBar = () => {
    return (
        <div className="hidden laptop:block laptop:min-w-72">
            <div className=" laptop:mx-6 grid gap-4">
                <div >
                    <h1 className=" text-xl">Filtros</h1>
                </div>
                <hr />
                <div>
                    <h2 className="text-base font-medium">Categorías</h2>
                </div>
                <hr />

            </div>
        </div>
    )
}

export default SideBar