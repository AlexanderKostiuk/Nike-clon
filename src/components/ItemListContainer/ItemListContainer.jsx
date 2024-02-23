const ItemListContainer = (props) => {
    return (
        <div className="min-h-screen w-full  flex justify-center text-center text-wrap text-sm items-center mobile:text-xl laptop:text-2xl">
            <div className="mb-20">
                <h1 className="text-wrap" >{props.greeting} </h1>
                <p>Con la ayuda de <span className=" text-cyan-400">React</span> + <span className="text-cyan-400">Tailwind</span></p>
                <p className="text-xs m-4">(recomiendo ver la página oficial de nike y comparar)</p>
            </div>
        </div>
    )
}

export default ItemListContainer