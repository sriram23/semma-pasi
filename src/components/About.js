import { Box, Heading, Alert } from "@chakra-ui/react"
import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <Box minH="100vh">
            <Alert status="info">If you do not see any info here, probably the github API rate limit could have exceeded. Try after sometime</Alert>
            <Heading textAlign="center" as="h2">About</Heading>
            <UserClass/>
        </Box>
    )
}

export default About