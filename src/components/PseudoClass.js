import React from "react"
import styled from "@mui/styled-engine"
import { Box } from "@mui/material"

const PseudoClasses = styled(Box)(

    ({ theme }) => ({

        backgroundColor: theme.palette.primary.light,
        color: theme.palette.grey[900],
        padding: theme.spacing(2),
        textAlign: 'center',

        ":hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.grey[100],
        },

        ":active": {
            backgroundColor: theme.palette.warning.dark,
            color: theme.palette.grey[100],
        },


        // Pseudo select child element
        ":hover > div": {
            backgroundColor: theme.palette.error.dark,
        },


        // Pseudo select child component
        ":hover > .child": {
            backgroundColor: theme.palette.success.dark,
        },

    })
)
export default function PseudoClass() {
    return (
        <PseudoClasses>

            <div>Hi</div>

            <Box className='child'> Hello </Box>

        </PseudoClasses>
    )
}