import React from 'react'
import { Box} from "@chakra-ui/react"
import Contents from './Contents'
import Header from '../components/Header'

export default function PageWrapper({children}) {


    return (
        <>
    <Header />
        <Box w='100%' pt={["0.5em", "1em"]} paddingBottom={["0.5em", "1em"]}>
        <Contents>{children}</Contents>
    </Box>
    </>
    )
}


