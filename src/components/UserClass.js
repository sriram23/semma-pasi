import { Button, Card, Heading, Image, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Some Name",
                location: "Some Location",
                username: "Some Name"
            },
            repos: []
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sriram23")
        const json = await data.json();
        this.setState({
            user: json
        })
        const repos = await fetch(json.repos_url+"?per_page=9&page=1&sort=pushed&direction=desc")
        const repoJson = await repos.json();
        console.log("Repo Json: " + JSON.stringify(repoJson))
        this.setState({
            repos: repoJson
        })
        console.log("State: ",this.state)
    }
    render() {
        const { name, location, login, avatar_url, bio, html_url, blog, twitter_username, followers, following, public_repos} = this.state.user;
        const { repos } = this.state

        return(
            <Box m={2} p={2} w="100%">
                <Box display="flex" flexDirection="column" alignItems="center" m={4}>
                    <Image w={250} h={250} src={avatar_url} alt="Avatar" />
                    <Heading as="h3" fontSize="3xl">{name}</Heading>
                    <Heading as="h5" fontSize="lg" fontWeight="normal">@{login}</Heading>
                    <Heading as="h4" fontSize="2xl" fontWeight="normal">{bio}</Heading>
                    <Heading as="h4" fontSize="xl" fontWeight="normal">{location}</Heading>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" m={4}>
                    <Heading as="h3" fontSize="lg" m={2}>Social Links</Heading>
                    <Box>
                        <Link to={html_url}><Button m={2}>Github</Button></Link>
                        <Link to={blog}><Button m={2}>Portfolio</Button></Link>
                        <Link to={"https://x.com/"+twitter_username}><Button m={2}>X (Formarly Twitter)</Button></Link>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" m={4}>
                    <Heading as="h3" fontSize="lg">Github Stats</Heading>
                    <Box>
                        <Flex>
                            <Text m={2}>Followers: <b>{followers}</b></Text>
                            <Text m={2}>Following: <b>{following}</b></Text>
                            <Text m={2}>Total Repos: <b>{public_repos}</b></Text>
                        </Flex>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" m={4}>
                    <Heading as="h3" fontSize="lg">Github Repos</Heading>
                    <Box>
                        {repos.map( async repo => { 
                            const languages = await fetch(repo?.languages_url)
                            return(
                            repo?.visibility === "public" &&<Card m={4} p={4}>
                                <Flex alignItems="center">
                                    <Text fontSize="3xl">{repo.name}</Text>
                                    <Text fontSize="xs" color="white" bg="gray.500" p={1} m={1} borderRadius="md">Public</Text>
                                </Flex>
                                <Link to={repo.html_url}><Text color="blue.400">{repo.full_name}</Text></Link>
                                <Text>{repo.description}</Text>
                                {repo.license && <Link to={repo.license?.url}><Text>⚖️ {repo.license?.name}</Text></Link>}
                                {repo.homepage && <Link to={repo.homepage}><Text color="blue.400">{repo.homepage}</Text></Link>}
                                <Text>{JSON.stringify(languages)}</Text>
                                <Flex>
                                    <Text>Updated: {moment(repo.updated_at).fromNow()}</Text>
                                    &nbsp;| &nbsp;
                                    <Text>Created: {moment(repo.created_at).fromNow()}</Text>
                                </Flex>
                            </Card>
                        )})}
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default UserClass