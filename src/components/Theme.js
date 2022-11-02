import * as React from "react"
import { Box } from '@mui/material'
import styled from '@mui/styled-engine'

const ThemeComponent = styled(Box)(
    ({ theme }) => ({
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.grey[900],
      padding: theme.spacing(2),
      textAlign: 'center',
      ...theme.typography.h6,
    })
  )

export default function Theme() {
    return (
        <>
            <ThemeComponent>
                <h1>
                    Theme Component
                </h1>
            </ThemeComponent>
        </>
    )
}