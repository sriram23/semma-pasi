import { Box, Flex, keyframes, Grid } from "@chakra-ui/react";

const shimmerAnimation = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

const Shimmer = () => {
  return (
    <Box bg="#d8d4c5">
      <Flex justifyContent="center" alignItems="center">
        <Box
          width="95%"
          height={100}
          bgGradient="linear(to-r, gray.200 0%, gray.300 50%, gray.200 100%)"
          m={2}
          bgSize="200% 100%"
          animation={`${shimmerAnimation} 1.5s infinite linear`}
          borderRadius="md"
        ></Box>
      </Flex>
      <Grid
        justifyContent={"center"}
        gap={4}
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <Box display={"flex"} width="100%" justifyContent={"center"}>
            <Box
              key={index}
              w="200px"
              h="300px"
              m={2}
              bgGradient="linear(to-r, gray.200 0%, gray.300 50%, gray.200 100%)"
              bgSize="200% 100%"
              animation={`${shimmerAnimation} 1.5s infinite linear`}
              borderRadius="md"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Shimmer;
