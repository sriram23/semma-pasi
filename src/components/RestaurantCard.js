import { Box, Image, Text, Flex } from "@chakra-ui/react";

const RestaurantCard = ({ data, onCardClick }) => {
    return (
        <Box
            className="res-card"
            bg="#cbb594"
            borderRadius="md"
            p={4}
            w="100%"
            onClick={onCardClick}
        >
            <Flex direction="column" alignItems="center">
                <Box w="100%" h={200} overflow="hidden" borderRadius="md" mb={2}>
                <Image
                    src={`https://media-assets.swiggy.com/${data.info.cloudinaryImageId}`}
                    alt="res-logo"
                    w="100%"
                    h={200}
                    objectFit="cover"
                    borderRadius="md"
                    _hover={{ transform: "scale(1.1)" }}
                    transition="transform 0.2s"
                    style={{overflow: "hidden"}}
                />
                </Box>
                <Text fontSize="lg" fontWeight="bold">
                    {data.info.name}
                </Text>
            </Flex>
            <Text fontSize="sm">
                {data.info.cuisines.join(", ")}
            </Text>
            <Text fontSize="sm">
                {data.info.avgRating} Stars
            </Text>
            <Text fontSize="sm">
                {data.info.sla.slaString}
            </Text>
        </Box>
    );
};

export default RestaurantCard;