import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="grid mobile:grid-cols-2 gap-4 px-6 w-full laptop:grid-cols-3 laptop:gap-6">
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