import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react"
import FOOTER_IMAGE from "../../static/assets/Semma-Pasi-Footer.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Box bg="#cbb594" boxShadow="lg">
            <Flex justifyContent="space-between" py={12} px={24}>
                <Image m={6} w={200} borderRadius="lg" src={FOOTER_IMAGE} alt="Footer Logo"/>
                <Box>
                    <Heading as="h3" my={2}>Application</Heading>
                    <Box display="flex" flexDir="column">
                        <Link>About the App</Link>
                        <Link to="/about">About the Developer</Link>
                        <Link to="mailto:sriramsubramanian23@gmail.com">Contact</Link>
                    </Box>
                </Box>
                <Box>
                    <Heading as="h3" my={2}>Social Links</Heading>
                    <Box display="flex" flexDir="column">
                        <Link to="https://linkedin.com/in/imsriramb">Linkedin</Link>
                        <Link to="https://github.com/sriram23">Github</Link>
                        <Link to="https://sriram23.hashnode.dev">Hashnode</Link>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer