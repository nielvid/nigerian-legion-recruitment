import React from 'react'
import {Button} from "@chakra-ui/react"

export default function Buttons({children, ...rest}) {
    return (
        <Button {...rest}> {children}</Button>
    )
}
