const products = [
    {
        id: '1',
        name: "Nike Dri-FIT Club",
        price: 1000,
        category: "gorras",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/762567-1000-1000?v=638316092662730000&width=1000&height=1000&aspect=true",
        stock: 25,
        description: "descripcion Nike Dri-FIT Club"
    },
    {
        id: '2',
        name: "Nike airforce 1 Low Retro ",
        price: 1000,
        category: "Calzado",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/629702-1000-1000?v=638210601567970000&width=1000&height=1000&aspect=true",
        stock: 25,
        description: "descripcion airforce 1 low retro"
    },
    {
        id: '3',
        name: "Air Jordan 4 Retro",
        price: 359000,
        category: "Calzado",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/730761-1000-1000?v=638308271599930000&width=1000&height=1000&aspect=true",
        stock: 25,
        description: "descripcion jordan 4 retro"
    },
    {
        id: '4',
        name: "Air jordan 1 Mid",
        price: 1000,
        category: "Calzado",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/731268-1000-1000?v=638308279292400000&width=1000&height=1000&aspect=true",
        stock: 25,
        description: "descripcion jordan 1 mid"
    },
    {
        id: '5',
        name: "ACG Lowcate",
        price: 1000,
        category: "Calzado",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/659087-1000-1000?v=638221816032930000&width=1000&height=1000&aspect=true",
        stock: 25,
        description: "descripcion jordan 1 mid"
    },
    {
        id: '6',
        name: "ACG Lowcate",
        price: '199.000',
        category: "Calzado",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/731122-1000-1000?v=638308276905170000&width=1000&height=1000&aspect=true",
        stock: 25,
        description: "descripcion jordan 1 mid"
    },
    {
        id: '7',
        name: "Air Jordan 2 Retro Low",
        price: '199.000',
        category: "Calzado",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/762306-1000-1000?v=638316088757300000&width=1000&height=1000&aspect=true",
        stock: 25,
        description: "descripcion jordan 1 mid"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    } )
}