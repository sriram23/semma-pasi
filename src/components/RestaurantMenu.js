import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

const RestaurantMenu = () => {
    const {resId} = useParams();
    const {lat, lon} = useLocation().state
    const [resData, setResData] = useState()
    useEffect(() => {
        fetchResMenu()
    }, [])

    const fetchResMenu = async () => {
        console.log("Fetching restaurant menu ...")
        const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&&submitAction=ENTER&restaurantId=${resId}`)
        const json = await data?.json();
        setResData(json)
      }
    return (
        <div className="menu">
            <h1>{resData?.data?.cards[0]?.card?.card?.text}</h1>
            {resData?.data?.cards[1]?.card?.card?.tabs?.map(tab => (
                <li>{tab.title}</li>
            ))}
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>Rating: {resData?.data?.cards[2]?.card?.card?.info?.avgRatingString}</p>
                <p>Cuisines: {resData?.data?.cards[2]?.card?.card?.info?.cuisines?.toString()}</p>
                <p>{resData?.data?.cards[2]?.card?.card?.info?.multiOutlet && "Outlet: "+ resData?.data?.cards[2]?.card?.card?.info?.locality}</p>
                <p>{resData?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
                <p>{resData?.data?.cards[2]?.card?.card?.info?.feeDetails?.message}</p>
            </div>
             
        </div>
    )
}

export default RestaurantMenu