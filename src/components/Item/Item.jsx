import { Link } from "react-router-dom"

const Item = ({ id, img, name, type, price }) => {
    return (
        <Link to={`/Nike-clon/category/categoryId/item/${id}`}>
            <img className="w-[600px] laptop:w-96" src={img} />
            <div className="mt-2">
                <h1 className="font-medium">{name}</h1>
                <h2 className=" text-gray-500">{type}</h2>
                <h3 className="font-bold font-sans">${price}</h3>  
            </div>
        </Link>
    )
}

export default Item