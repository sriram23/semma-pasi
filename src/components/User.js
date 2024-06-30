import { Card } from "@chakra-ui/react"
import { useState } from "react"
const User = ({name, location, contact}) => {
    const [count] = useState(0)
    return (
        <Card m={2} p={2}>
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
        </Card>
    )
}

export default User