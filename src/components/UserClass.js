import { Button, Card, Image } from "@chakra-ui/react";
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Some Name",
                location: "Some Location",
                username: "Some Name"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sriram23")
        const json = await data.json();
        this.setState({
            user: json
        })
    }
    render() {
        const { name, location, login, avatar_url } = this.state.user;

        return(
            <Card m={2} p={2}>
                <Image w={20} h={20} src={avatar_url} alt="Avatar" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {login}</h4>
            </Card>
        )
    }
}

export default UserClass