import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Image, Text, Button, Link, List, ListItem } from "@chakra-ui/react";
import LOGO from "../../static/assets/SemmaPasi_logo.jpeg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [city, setCity] = useState(
    sessionStorage.getItem("city") !== "undefined"
      ? sessionStorage.getItem("city")
      : "Unable to fetch location"
  );

  useEffect(() => {
    const setCurrentCity = () => {
      const cityString = sessionStorage.getItem("city");
      setCity(cityString !== "undefined" ? cityString : "Unable to fetch location");
    };
    window.addEventListener("storage", setCurrentCity);
    return () => {
      window.removeEventListener("storage", setCurrentCity);
    };
  }, []);

  return (
    <Flex as="header" p={4} justify="space-between" align="center" bg="gray.100" position="sticky"
    top="0"
    zIndex="1000">
      <Flex align="center">
        <Image boxSize="100px" src={LOGO} alt="Semma Pasi Logo" />
        <Text ml={4} fontSize="lg" fontWeight="bold">
          Location: {city?.charAt(0).toUpperCase() + city?.slice(1)}
        </Text>
      </Flex>
      <Flex>
        <List display="flex" alignItems="center">
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
      </Flex>
    </Flex>
  );
};

export default Header;
