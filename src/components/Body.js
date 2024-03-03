import RestaurantCard from "./RestaurantCard";
import RES from "../../static/resList.json";
RestaurantCard
const Body = () => {

    const listOfRestaurants = [
        {
            "info": {
                "id": "50457",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Prozone Mall",
                "areaName": "Saravanampatti",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 3.5,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 54,
                    "lastMileTravel": 11.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "11.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-04 00:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-prozone-mall-saravanampatti-coimbatore-50457",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "50457",
                "name": "Pizza Hut",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Prozone Mall",
                "areaName": "Saravanampatti",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.5,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 54,
                    "lastMileTravel": 11.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "11.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-04 00:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-prozone-mall-saravanampatti-coimbatore-50457",
                "type": "WEBLINK"
            }
        },
    ];
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {console.log("Button Clicked")}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(res => (
                    <RestaurantCard data={res} />
                ))}
            </div>
        </div>
    )
}
export default Body