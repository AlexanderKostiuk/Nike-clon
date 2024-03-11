const Item = ({ id, img, name, category, price }) => {
    return (
        <div>
            <img className="w-[600px] laptop:w-96" src={img} />
            <div className="mt-2">
                <h1 className="font-medium">{name}</h1>
                <h2 className=" text-gray-500">{category}</h2>
                <h3 className="font-bold font-sans">$ {price}</h3>

            </div>
        </div>
    )
}

export default Item