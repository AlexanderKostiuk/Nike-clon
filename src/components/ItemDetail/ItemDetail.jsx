import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, stock, category, price, img, img_sec, description}) => {
    return (
        <div className="grid gap-4 p-4 items-center justify-center laptop:grid-cols-2 desktop-lg:grid-cols-3">
            <img className="w-[600px]" src={img} />
            <img className="hidden laptop:w-[600px] laptop:block" src={img_sec}/>
            <div className="flex-col p-12 ">
                <h1 className="text-3xl font-semibold my-2">{name}</h1>
                <h2 className="text-gray-500 my-2">{category}</h2>
                <p className="my-2">{description}</p>
                <p className="text-lg font-medium my-2" >${price}</p>
                <ItemCount stock={stock} ></ItemCount>

            </div>
        </div>
    )
}

export default ItemDetail