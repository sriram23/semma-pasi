import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Image,
  Text,
  Card,
  CardBody
} from "@chakra-ui/react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";

import STAR from "../../static/assets/gold_star.png"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { lat, lon } = useLocation().state;
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    console.log("Fetching restaurant menu ...");
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&&submitAction=ENTER&restaurantId=${resId}`
    );
    const json = await data?.json();
    console.log(json);
    setResData(json);
  };

  if (resData === null) return <Shimmer />;
  return (
    <div className="menu">
      <Heading as="h2" size="xl" noOfLines={1}>{resData?.data?.cards[0]?.card?.card?.text}</Heading>
      <Tabs>
        <TabList>
        {resData?.data?.cards[1]?.card?.card?.tabs?.map((tab) => (
          <Tab key={tab.id}>{tab.title}</Tab>
        ))}
        </TabList>
      <TabPanels>
        <TabPanel>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Flex>
          <Image w={5} h={5} src={STAR} mr={2}></Image>
          <Text fontSize="lg">{resData?.data?.cards[2]?.card?.card?.info?.avgRatingString}</Text>
        </Flex>
        <Text fontSize="lg" textDecoration="underline" color="#cbb494">{resData?.data?.cards[2]?.card?.card?.info?.cuisines?.join(", ")}</Text>
        <Flex>
          <Text fontSize="lg" mr={3} fontWeight="bold">Outlet</Text>
          <Text fontSize="lg">{resData?.data?.cards[2]?.card?.card?.info?.multiOutlet && resData?.data?.cards[2]?.card?.card?.info?.locality}</Text>
        </Flex>
        <Text fontSize="lg" fontWeight="bold">{resData?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</Text>
        <Text fontSize="lg">
          {resData?.data?.cards[2]?.card?.card?.info?.sla?.lastMileTravelString ?? ''} | ₹
          {(resData?.data?.cards[2]?.card?.card?.info?.feeDetails?.totalFee ?? 0) / 100} Delivery fee will apply
        </Text>
      </div>
      <div>
        Deals for you
        <Flex>
        {resData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
          (offer) => (
            <Card m={3} _hover={{background: "gray.100"}} transition="background-color 0.5s ease">
              <CardBody>
                <Flex >
                  <Image w={50} h={50} m={2} src={`https://media-assets.swiggy.com/${offer?.info?.offerLogo}`}></Image>
                  <Flex direction="column">
                    <Text fontSize="xl" fontWeight="bold">{offer?.info?.header}</Text>
                    <Text fontSize="lg">{offer?.info?.couponCode}</Text>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          )
        )}
        </Flex>
      </div>
      <div>
        {resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (cards) => (
            <div>
              {cards?.card?.card?.kidsCategoryFilter && (
                <li>
                  {
                    cards?.card?.card?.kidsCategoryFilter?.attributes
                      ?.displayText
                  }
                </li>
              )}
              {cards?.card?.card?.nonvegFilter && (
                <li>
                  {cards?.card?.card?.nonvegFilter?.attributes?.displayText}
                </li>
              )}
              {cards?.card?.card?.topRatedFilter && (
                <li>
                  {cards?.card?.card?.topRatedFilter?.attributes?.displayText}
                </li>
              )}
              {cards?.card?.card?.vegFilter && (
                <li>{cards?.card?.card?.vegFilter?.attributes?.displayText}</li>
              )}
              <Accordion allowMultiple defaultIndex={[0]}>
              <AccordionItem>
              {cards?.card?.card?.title && (
                <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                <h2>
                  {cards?.card?.card?.title}
                  {cards?.card?.card?.itemCards &&
                    "(" + cards?.card?.card?.itemCards?.length + ")"}
                </h2>
                </Box>
                <AccordionIcon/>
                </AccordionButton>
              )}
              <AccordionPanel pb={4}>
              {cards?.card?.card?.categories &&
                cards?.card?.card?.categories?.map((category) => (
                  <Accordion allowMultiple defaultIndex={[0]}>
                    <div>
                      <AccordionItem>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <h3>
                              {category?.title} ({category?.itemCards?.length})
                            </h3>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <ul>
                            {category?.itemCards?.map((items) => (
                              <MenuCard items={items} />
                            ))}
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </div>
                  </Accordion>
                ))}
              <ul>
                {cards?.card?.card?.itemCards?.map((items) => (
                  <MenuCard items={items} />
                ))}
              </ul>
              </AccordionPanel>
              </AccordionItem>
              </Accordion>
            </div>
          )
        )}
      </div>
      </TabPanel>
      </TabPanels>
      </Tabs>
    </div>
  );
};

export default RestaurantMenu;
