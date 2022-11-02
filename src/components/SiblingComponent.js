import React from "react"
import { Box } from "@mui/material"
import styled from '@mui/styled-engine'

const Sibling = styled(Box)(

    ({ theme }) => ({

        backgroundColor: theme.palette.primary.light,
        color: theme.palette.grey[900],

        // Adjacent Sibling Component 
        "+ .siblingComponent": {
            backgroundColor: theme.palette.success.dark,
            color: theme.palette.grey[100]
        }

    })
)

export default function SiblingComponent() {
    return (
        <>
            <Sibling> Hello </Sibling>
            <Box className='siblingComponent'> Hi </Box>
        </>
    )
}
