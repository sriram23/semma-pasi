import { Box, Flex, keyframes } from "@chakra-ui/react";

const shimmerAnimation = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

const Shimmer = () => {
  return (
    <Flex wrap="wrap" justify="center" p={4}>
      {Array.from({ length: 15 }).map((_, index) => (
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
      ))}
    </Flex>
  );
};

export default Shimmer;
