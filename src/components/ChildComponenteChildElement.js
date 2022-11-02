import React from "react"
import styled from "@mui/styled-engine"
import { Box } from "@mui/material"
const ParentComponent = styled(Box)(

    ({ theme }) => ({
  
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.grey[900],
      padding: theme.spacing(2),
      textAlign: 'center',
  
  
      // Child element
      "> div": {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.grey[900]
      },
  
  
      // Child Component
      "> .child": {
        backgroundColor: theme.palette.success.dark,
        color: theme.palette.grey[100]
      },
  
    })
  )
export default function ChildComponentChildElement() {
    return (
        <ParentComponent>

            <div>Hi</div>

            <Box className='child'> Hello </Box>

        </ParentComponent>
    )
}