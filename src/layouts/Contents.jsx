import React from 'react'
import { Box} from "@chakra-ui/react"
import Homepage from '../components/Homepage'
import Announcement from '../components/Announcement'
import Buttons from '../common/Buttons'

export default function Contents({children}) {
    return (
        <>
        <Box  pl={[ "1em", "2em","3em","4em"]} pr={["1em", "2em","3em","4em"]}>
          <Homepage />
          <Box w="100%" p={["0.2em",".5em"]} >
              
          </Box>
          
          {children}
        </Box>
        </>
    )
}
