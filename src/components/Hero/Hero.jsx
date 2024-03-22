import ItemListContainer from "../ItemListContainer/ItemListContainer"
import SideBar from "../SideBar/SideBar"

const Hero = () => {
    return (
        <div>
            <div className="flex justify-center">
                <SideBar></SideBar>
                <ItemListContainer></ItemListContainer>
            </div>
        </div>

    )
}

export default Hero