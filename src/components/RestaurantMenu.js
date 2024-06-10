import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"

const RestaurantMenu = () => {
    const {resId} = useParams();
    const {lat, lon} = useLocation().state
    useEffect(() => {
        fetchResMenu()
    }, [])

    const fetchResMenu = async () => {
        console.log("Fetching restaurant menu ...")
        const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&&submitAction=ENTER&restaurantId=${resId}`)
        const json = await data?.json();
        const contents = json
        console.log("Contents: ",contents)
        // setListOfRestaurants(contents?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(contents?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
    return (
        <div className="menu">
            {resId}<br/>
            {lat}<br/>
            {lon}<br/>
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
             
        </div>
    )
}

export default RestaurantMenu