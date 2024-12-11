import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";
import SERVICE_UNAVAILABLE from "../../static/assets/Service_unavailable.jpeg";
import { Box, Flex, Grid, Input, Button, Image, Text, useBreakpointValue } from "@chakra-ui/react";
// import RES from "../../static/resList.json";
RestaurantCard;
const Body = () => {
  const navigate = useNavigate();
  // State Variable - Super powerful variables
  // Hooks: A normal JS function by react. The function comes with some super power.
  // Whenever a state variable updates, React will re-render the component.
  const [listOfRestaurantTitle, setListOfRestaurantTitle] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [topRestaurantTitle, setTopRestaurantTitle] = useState("");
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [serviceAvailable, setServiceAvailable] = useState(true);
  // Normal Variable
  //   let listOfRestaurants = [
  //     {
  //       info: {
  //         id: "50457",
  //         name: "Burger King",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         locality: "Prozone Mall",
  //         areaName: "Saravanampatti",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 3.5,
  //         parentId: "166",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 54,
  //           lastMileTravel: 11.1,
  //           serviceability: "SERVICEABLE",
  //           slaString: "50-55 mins",
  //           lastMileTravelString: "11.1 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-02-04 00:00:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "60% OFF",
  //           subHeader: "UPTO ₹120",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //       },
  //       analytics: {},
  //       cta: {
  //         link: "https://www.swiggy.com/restaurants/burger-king-prozone-mall-saravanampatti-coimbatore-50457",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "50458",
  //         name: "Pizza Hut",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         locality: "Prozone Mall",
  //         areaName: "Saravanampatti",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 4.5,
  //         parentId: "166",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 54,
  //           lastMileTravel: 11.1,
  //           serviceability: "SERVICEABLE",
  //           slaString: "50-55 mins",
  //           lastMileTravelString: "11.1 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-02-04 00:00:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "60% OFF",
  //           subHeader: "UPTO ₹120",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //       },
  //       analytics: {},
  //       cta: {
  //         link: "https://www.swiggy.com/restaurants/burger-king-prozone-mall-saravanampatti-coimbatore-50457",
  //         type: "WEBLINK",
  //       },
  //     },
  //   ];

  // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).
  console.log("Body Rendered");
  useEffect(() => {
    if(localStorage.getItem('lat') && localStorage.getItem('lon')) {
      setLat(localStorage.getItem('lat'))
      setLon(localStorage.getItem('lon'))
    } else {
      fetchLocation();
    }
    document.addEventListener('fetchLocation', fetchLocation)
    return () => {
      document.removeEventListener('fetchLocation', fetchLocation)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [lat, lon]);

  const fetchLocation = () => {
    console.log("Fetching location")
    // if (!Object.keys(navigator.geolocation).length) {
    //   setLat(-1);
    //   setLon(-1);
    // } else {
      console.log("Geolocation")
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Position: ", position)
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        localStorage.setItem('lat', position.coords.latitude);
        localStorage.setItem('lon', position.coords.longitude);
      });
    // }
  };

  const fetchData = async () => {
    // const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076008&lng=72.8776707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIST')}`)
    if (lat === -1 && lon === -1) {
      console.log('Location not fetched');
      setServiceAvailable(false);
    }
    if (lat && lon) {
      const data = await fetch(
        `https://foodfire.onrender.com/api/restaurants/?lat=${lat}&lng=${lon}&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data?.json();
      const contents = json;
      console.log("Data: " + JSON.stringify(contents));
      localStorage.setItem(
        "city",
        contents?.data?.cards[contents?.data?.cards.length-1]?.card?.card?.citySlug
      );
      window.dispatchEvent(new Event("storage"));
      if (contents?.data?.cards[0]?.card?.card?.id === "swiggy_not_present") {
        setServiceAvailable(false);
      } else {
        setServiceAvailable(true);
      }
      setTopRestaurantTitle(
        contents?.data?.cards[1]?.card?.card?.header?.title
      );
      setTopRestaurants(
        contents?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestaurantTitle(contents?.data?.cards[2]?.card?.card?.title);
      setListOfRestaurants(
        contents?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        contents?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    // TODO: Look into the filter logic
    // const combainedRestaurants =[...topRestaurants, ...listOfRestaurants]
    // const uniqueRestaurants = combainedRestaurants.filter((obj, index, self) => index === self.findIndex(o => o.id === obj.id))
    // console.log("Unique Restaurants: ", uniqueRestaurants)
    // console.log("Top Restaurants", topRestaurants)
    // console.log("List of restaurants", listOfRestaurants)
  };

  if (
    (!listOfRestaurants || listOfRestaurants?.length === 0) && serviceAvailable
  ) {
    return <Shimmer />;
  }

  const renderResCard = (data) => (
    <Grid justifyContent={"center"} gap={4} templateColumns={{ base: "1fr", sm: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl:"repeat(5, 1fr)" }}>
    {data.map((res) => (
      <Box display={"flex"} width="100%" justifyContent={"center"} >
        <RestaurantCard
          onCardClick={() => {
            navigate("/restaurants/" + res.info.id, { state: { lat, lon } });
          }}
          key={res.info.id}
          data={res}
        />
      </Box>
    ))}
    </Grid>
  )
  return (
    <Box p={4} bg="#d8d4c5">
      {!serviceAvailable && (
        <Flex direction="column" align="center" justify="center" bg="#d8d4c5">
          <Box maxW="30rem">
            <Image src={SERVICE_UNAVAILABLE} w={300} h={300} loading="lazy" alt="Service unavailable" />
          </Box>
          <Text textAlign="center" mt={4}>
            Our hunger-busting spices haven't reached your corner just yet!
            We're working on expanding our delivery zone, so stay tuned for delicious updates.
          </Text>
        </Flex>
      )}

      {serviceAvailable && (
        <Box>
          {searchText.length === 0 && <Box mb={4}>
            <Text fontSize="2xl" fontWeight="bold">{topRestaurantTitle}</Text>
            {renderResCard(topRestaurants)}
          </Box>}

          <Flex mb={4} direction={{ base: "column", md: "row" }} justify="space-between" align="center">
        <Flex mb={{ base: 4, md: 0 }} align="center">
          <Input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            mr={2}
          />
          <Button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </Button>
        </Flex>
        <Button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </Button>
      </Flex>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">{listOfRestaurantTitle}</Text>
            {renderResCard(filteredRestaurants)}
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default Body;
