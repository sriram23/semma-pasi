import { Box, Flex, Text, Heading, Image, Button } from "@chakra-ui/react";
import VEG from "../../static/assets/Veg.png";
import NONVEG from "../../static/assets/Non-veg.png";

const MenuCard = ({ items }) => {
  const info = items?.card?.info;

  return (
    <Box
      m="1rem"
      p="1rem"
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      bg="#cbb594"
      borderRadius="md"
    >
      <Flex flexDirection="column" w={{ base: "100%", md: "70%" }}>
        <Flex alignItems="center" wrap="wrap">
          <Image w={5} h={5} src={info?.isVeg ? VEG : NONVEG} m="1rem" />
          <Heading as="h3" size="md" m="1rem">
            {info?.name}
          </Heading>
          <Text m="1rem" fontWeight="bold">
            {info?.price && "₹"+ info?.price / 100}
          </Text>
          {info?.ratings?.aggregatedRating?.rating && (
            <Box display="flex" m="1rem">
              <Text m={1} color={info?.ratings?.aggregatedRating?.rating > 4 ? "green.600" : "yellow.600"}>{'\u2605'}{info?.ratings?.aggregatedRating?.rating}</Text>
              <Text m={1}>({info?.ratings?.aggregatedRating?.ratingCount})</Text>
            </Box>
          )}
        </Flex>
        <Text isTruncated>{info?.description}</Text>
      </Flex>

      <Box
        w={{ base: "100%", md: "200px" }}
        h="200px"
        mt={{ base: "1rem", md: "0" }}
        ml={{ base: "0", md: "1rem" }}
        filter={info?.inStock ? "none" : "grayscale(100%)"}
        textAlign="center"
        position="relative"
      >
        {info?.imageId && (
          <Image
            src={`https://media-assets.swiggy.com/${info?.imageId}`}
            alt="Food Menu"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="md"
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.2s"
          />
        )}
        {info?.inStock ? (
          <Button
            mt="1rem"
            colorScheme="teal"
            position="absolute"
            bottom="10px"
            left="50%"
            transform="translateX(-50%)"
          >
            Add
          </Button>
        ) : (
          <Text mt="1rem">{info?.nextAvailableAtMessage}</Text>
        )}
      </Box>
    </Box>
  );
};

export default MenuCard;
