const products = [
    // Accesorios
    {
        id: '1',
        name: "Nike Dri-FIT Club",
        price: '42.000',
        category: "Accesorios",
        type: "Gorras",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/762567-1000-1000?v=638316092662730000&width=1000&height=1000&aspect=true",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/763614-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion Nike Dri-FIT Club"
    },

    //Hombre

    {
        id: '2',
        name: "Nike airforce 1 Low Retro ",
        price: '188.999',
        category: "Hombre",
        type: "Zapatillas hombre",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/629702-1000-1000?v=638210601567970000&width=1000&height=1000&aspect=true",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/631869-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion airforce 1 low retro"
    },
    {
        id: '3',
        name: "Air Jordan 4 Retro",
        price: '359.000',
        category: "Hombre",
        type: "Zapatillas hombre",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/730761-1000-1000?v=638308271599930000&width=1000&height=1000&aspect=true",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/732764-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion jordan 4 retro"
    },
    {
        id: '4',
        name: "Air jordan 1 Mid",
        price: 1000,
        category: "Hombre",
        type: "Zapatillas hombre",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/731268-1000-1000?v=638308279292400000&width=1000&height=1000&aspect=true",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/733271-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion jordan 1 mid"
    },
    {
        id: '5',
        name: "ACG Lowcate",
        price: 1000,
        category: "Hombre",
        type: "Zapatillas hombre",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/659087/DM8019_300_A_PREM.jpg?v=638221816032930000",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/661695-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion de ACG Lowcate marrones"
    },
    {
        id: '6',
        name: "ACG Lowcate",
        price: '199.000',
        category: "Hombre",
        type: "Zapatillas hombre",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/731122-1000-1000?v=638308276905170000&width=1000&height=1000&aspect=true",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/733125-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion ACG Lowcate bordó"
    },
    {
        id: '7',
        name: "Air Jordan 2 Retro Low",
        price: '199.000',
        category: "Hombre",
        type: "Zapatillas hombre",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/762306-1000-1000?v=638316088757300000&width=1000&height=1000&aspect=true",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/763353-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion Air Jordan 2 Retro Low"
    },
    
    // kids
    {
        id: '8',
        name: "Nike Pico 5",
        price: '49.000',
        category: "Kids",
        type: "Zapatillas kids",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/700084-800-800?width=800&height=800&aspect=true",
        img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/700197-800-800?width=800&height=800&aspect=true",
        stock: 25,
        description: "Descripcion Nike Pico 5"
    },

        // Mujer
        {
            id: '9',
            name: "Nike Calm",
            price: '49.000',
            category: "Mujer",
            type: "Sandalias para mujer",
            img: "https://nikearprod.vtexassets.com/arquivos/ids/773420-800-800?width=800&height=800&aspect=true",
            img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/774813-800-800?width=800&height=800&aspect=true",
            stock: 25,
            description: "Descripcion Nike Calm"
        },
        {
            id: '10',
            name: "Nike Zoom Fly 5",
            price: '284.999',
            category: "Mujer",
            type: "Zapatillas Mujer",
            img: "https://nikearprod.vtexassets.com/arquivos/ids/762105-800-800?width=800&height=800&aspect=true",
            img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/763152-800-800?width=800&height=800&aspect=true",
            stock: 25,
            description: "Descripcion Nike Zoom Fly 5"
        },
        {
            id: '11',
            name: "Nike Air Winflo 9",
            price: '284.999',
            category: "Mujer",
            type: "Zapatillas Mujer",
            img: "https://nikearprod.vtexassets.com/arquivos/ids/311208-800-800?width=800&height=800&aspect=true",
            img_sec: "https://nikearprod.vtexassets.com/arquivos/ids/312000-800-800?width=800&height=800&aspect=true",
            stock: 25,
            description: "Descripcion Nike Air Winflo 9"
        },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    } )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}