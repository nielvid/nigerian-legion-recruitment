import React from 'react'
import { Box, Heading, Text} from "@chakra-ui/react"

export default function Homepage() {
    return (
        <Box>
            <Heading  textAlign="center" color="#0ca431" fontSize={["1em", "1.6em", "2em", "2.2em"]}> Recruitment Exercise into Nigerian Legion Corps of Commissionaire</Heading>
            <Box border="1px solid #FF0000" bg="#FF0000" borderRadius="15px" width="40%" m="5px auto">
            <Text textAlign="center"  color="#ffffff" fontSize={["0.7em", "1em", "1.2em", "2.4em"]}>
            Online Recruitment Portal
            </Text>
            </Box>
        </Box>
    )
}
