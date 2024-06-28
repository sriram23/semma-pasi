import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Link,
  List,
  ListItem,
  IconButton,
  Collapse,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import {RepeatIcon} from "@chakra-ui/icons"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LOGO from "../../static/assets/SemmaPasi_logo.jpeg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [city, setCity] = useState(
    localStorage.getItem("city") !== "undefined"
      ? localStorage.getItem("city")
      : "Fetching your location..."
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  useEffect(() => {
    const setCurrentCity = () => {
      const cityString = localStorage.getItem("city");
      setCity(cityString !== "undefined" ? cityString : "Unable to fetch location");
    };
    window.addEventListener("storage", setCurrentCity);
    return () => {
      window.removeEventListener("storage", setCurrentCity);
    };
  }, []);

  const handleFetchLocation = () => {
    const event = new CustomEvent("fetchLocation")
    document.dispatchEvent(event);
  }

  const getNavItems = () => (
    <List display="flex" alignItems="center" flexDirection={{base: "column", md: "row"}}>
          <ListItem m={2}>
            <Link as={RouterLink} to="/" fontSize="lg" fontWeight="bold">
              Home
            </Link>
          </ListItem>
          <ListItem m={2}>
            <Link as={RouterLink} to="/about" fontSize="lg" fontWeight="bold">
              About Us
            </Link>
          </ListItem>
          <ListItem m={2}>
            <Link as={RouterLink} to="/contact" fontSize="lg" fontWeight="bold">
              Contact Us
            </Link>
          </ListItem>
          <ListItem m={2} fontSize="lg" fontWeight="bold">
            Cart
          </ListItem>
          <ListItem m={2}>
            <Button
              onClick={() => setBtnName(btnName === "Logout" ? "Login" : "Logout")}
              colorScheme="teal"
            >
              {btnName}
            </Button>
          </ListItem>
        </List>
  )

  return (
    <Flex as="header" p={4} justify="space-between" align="center" bg="gray.100" position="sticky"
    top="0"
    zIndex="1000">
      <Flex align="center">
        <Image boxSize="100px" src={LOGO} alt="Semma Pasi Logo" />
        <Text ml={4} fontSize="lg" fontWeight="bold">
          Location: {city?.charAt(0).toUpperCase() + city?.slice(1)}
        </Text>
        <RepeatIcon ml={2} onClick={handleFetchLocation}></RepeatIcon>
      </Flex>
      <Flex>
        {isLargerThanMD ? getNavItems() : (
          <>
            <IconButton icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Toggle Menu"
              onClick={isOpen ? onClose : onOpen}
              display={{ md: "none" }} />
              <Collapse in={isOpen} animateOpacity>
              <Box
                display={{ md: "none" }}
                pos="absolute"
                top="70px"
                left="0"
                right="0"
                bg="gray.100"
                p={4}
                shadow="md"
                zIndex="1000"
              >
                <Flex alignItems={"center"} flexDirection={"column"}>
                  {getNavItems()}
                </Flex>
              </Box>
              </Collapse>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
