import { Box, Heading } from "@chakra-ui/react"
import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <Box minH="100vh">
            <Heading as="h2">About</Heading>
            {/* <User name="Sriram" location="Coimbatore" contact="twitter.com/@imsriramb"/> */}
            <UserClass/>
        </Box>
    )
}

export default About