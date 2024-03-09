const Item = ({ id, img, name, price}) => {
    return (
        <div>
            <img className="w-96" src={img} />
            <h2>{name}</h2>
            <h3 className=" font-bold font-sans">${price}</h3>
        </div>
    )
}

export default Item