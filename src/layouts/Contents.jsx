import React from 'react'
import { Box} from "@chakra-ui/react"
import Homepage from '../components/Homepage'

export default function Contents({children}) {
    return (
        <>
        <Box pl={[ "1em", "2em","3em","4.5em"]} pr={["1em", "2em","3em","4.5em"]}>
          <Homepage />
        </Box>
        </>
    )
}
