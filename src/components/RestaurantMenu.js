import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const {lat, lon} = useLocation().state
    const [resData, setResData] = useState(null)
    useEffect(() => {
        fetchResMenu()
    }, [])

    const fetchResMenu = async () => {
        console.log("Fetching restaurant menu ...")
        const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&&submitAction=ENTER&restaurantId=${resId}`)
        const json = await data?.json();
        console.log(json)
        setResData(json)
      }

    if(resData === null) return <Shimmer/>
    return (
        <div className="menu">
            <h1>{resData?.data?.cards[0]?.card?.card?.text}</h1>
            {resData?.data?.cards[1]?.card?.card?.tabs?.map(tab => (
                <li key={tab.id}>{tab.title}</li>
            ))}
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>Rating: {resData?.data?.cards[2]?.card?.card?.info?.avgRatingString}</p>
                <p>Cuisines: {resData?.data?.cards[2]?.card?.card?.info?.cuisines?.toString()}</p>
                <p>{resData?.data?.cards[2]?.card?.card?.info?.multiOutlet && "Outlet: "+ resData?.data?.cards[2]?.card?.card?.info?.locality}</p>
                <p>{resData?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
                <p>{resData?.data?.cards[2]?.card?.card?.info?.feeDetails?.message}</p>
            </div>
            <div>
                Offers:
                {resData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map(offer => (
                    <li style={{border: "2px solid "+offer.info.offerTagColor}}><b>{offer?.info?.header}</b> - <span style={{color: offer.info.descriptionTextColor}}>{offer?.info?.description}</span> - {offer?.info?.couponCode}</li>
                ))}
            </div>
            <div>
                {resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(cards => (
                    <div>
                        {cards?.card?.card?.kidsCategoryFilter && <li>{cards?.card?.card?.kidsCategoryFilter?.attributes?.displayText}</li>}
                        {cards?.card?.card?.nonvegFilter && <li>{cards?.card?.card?.nonvegFilter?.attributes?.displayText}</li>}
                        {cards?.card?.card?.topRatedFilter && <li>{cards?.card?.card?.topRatedFilter?.attributes?.displayText}</li>}
                        {cards?.card?.card?.vegFilter && <li>{cards?.card?.card?.vegFilter?.attributes?.displayText}</li>}
                        {cards?.card?.card?.title && <h2>{cards?.card?.card?.title}{cards?.card?.card?.itemCards && '('+cards?.card?.card?.itemCards?.length+')'}</h2>}
                        {cards?.card?.card?.categories && cards?.card?.card?.categories?.map(category => (
                            <div>
                                <h3>{category?.title} ({category?.itemCards?.length})</h3>
                                <ul>
                                    {category?.itemCards?.map(items => (
                                        <MenuCard items={items} />        
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <ul>
                            {cards?.card?.card?.itemCards?.map(items => (
                                <MenuCard items={items} />
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu