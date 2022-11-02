import * as React from "react"
import { Box } from '@mui/material'
import styled from '@mui/styled-engine'

const BasicComponent = styled(Box)({

    backgroundColor: 'aliceblue',
    color: 'darkslategray',
    padding: '2rem',
    textAlign: 'center'

})

export default function Basic() {
    return (
        <>
            <BasicComponent>
                <h1>
                    Basic Component
                </h1>
            </BasicComponent>
        </>
    )
}