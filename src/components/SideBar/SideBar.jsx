import AccordionUi from "../Accordion/Accordion"

const SideBar = () => {
    return (
        <div className="hidden laptop:block laptop:min-w-72">
            <div className=" laptop:mx-6 grid gap-3">
                <div>
                    <h1 className="text-xl ml-4">Filtros</h1>
                </div>
                <hr />
                <div>
                    <AccordionUi></AccordionUi>
                </div>
                <hr />

            </div>
        </div>
    )
}

export default SideBar