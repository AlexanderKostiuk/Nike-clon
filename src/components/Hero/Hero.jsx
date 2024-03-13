import ItemListContainer from "../ItemListContainer/ItemListContainer"
import SideBar from "../SideBar/SideBar"

const Hero = () => {
    return (
        <div className="mt-20">
            <div className="flex justify-center">
                <SideBar></SideBar>
                <ItemListContainer props={"PRODUCTOS"}></ItemListContainer>
            </div>
        </div>

    )
}

export default Hero