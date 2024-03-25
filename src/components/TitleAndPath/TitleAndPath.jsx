import { useLocation } from 'react-router-dom'


const TitleAndPath = () => {    
    let location = useLocation().pathname;

    const locationFormatted = location.slice(1)
    console.log(locationFormatted)
    
    return(
        <div className="mt-4 mb-12 ml-10">
            <p className="text-base font-normal ">{locationFormatted}</p>
            <h1 className="text-3xl font-semibold ">Nike</h1>
        </div>
    )
}

export default TitleAndPath