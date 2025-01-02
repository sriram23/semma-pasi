import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react"
import FOOTER_IMAGE from "../../static/assets/Semma-Pasi-Footer.png"
import { Link } from "react-router-dom"

const Footer = () => {
    const otherWorks = [
        {
            id: 1,
            name: "Swiggy Clone",
            link: "https://swiggy-clone-23.web.app/"
        },
        {
            id: 2,
            name: "Live Crypto Price",
            link: "https://live-crypto-updates.web.app/"
        },
        {
            id: 3,
            name: "Cine Corner",
            link: "https://cine-corner.web.app/"
        },
        {
            id: 4,
            name: "Pixel Hunt",
            link: "https://pixel-hunt.web.app/"
        },
        {
            id: 5,
            name: "TODO Application",
            link: "https://all-your-tasks.web.app/"
        },
        {
            id: 6,
            name: "MD Editor",
            link: "https://md-editor.web.app/"
        },
        {
            id: 7,
            name: "Little Lemon",
            link: "https://little-lemon-ten-bay.vercel.app/"
        },
        {
            id: 8,
            name: "Weather Now",
            link: "https://weather-now-2.vercel.app/"
        },
    ]
    return (
        <Box bg="#cbb594" boxShadow="lg">
            <Flex flexDirection={{base: "column", md: "row"}} justifyContent="space-between" py={12} px={24}>
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
                <Box>
                    <Heading as="h3" my={2}>My Works</Heading>
                    <Box display="flex" flexDir="column">
                        {otherWorks.map( work => (
                            <Link key={work.id} to={work.link}>{work.name}</Link>
                        ))}
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer