import ItemListContainer from "../ItemListContainer/ItemListContainer"
import SideBar from "../SideBar/SideBar"
import Banner from "../Banner/Banner"

const Hero = () => {
    return (
        <div>
            <div className="flex justify-center">
                <SideBar></SideBar>
                <ItemListContainer></ItemListContainer>
            </div>
            <Banner></Banner>   
        </div>

    )
}

export default Hero