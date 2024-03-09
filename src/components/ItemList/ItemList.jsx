import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className=" grid grid-cols-3">
            {
                products.map((product => {
                    return (
                        <Item key={product.id} {...product} ></Item>
                    )
                }))
            }
        </div>
    )
}

export default ItemList