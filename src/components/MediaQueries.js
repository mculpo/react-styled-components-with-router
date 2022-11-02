import * as React from "react"
import { Box } from '@mui/material'
import styled from '@mui/styled-engine'

const MediaQueriesComponent = styled(Box)(
    ({ theme }) => ({

      padding: '10px 10px 10px 10px',  
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.grey[900],

      "@media (min-width:640px)": {

          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.grey[100],
       },

       [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {

         backgroundColor: theme.palette.secondary.light,
         color: theme.palette.grey[900],
      },

    })
  )

export default function MediaQueries() {
    return (
        <>
            <MediaQueriesComponent>
                <p1> modifica o <b>width</b> para conseguir visualizar as alterações</p1>
                <h1>
                    Media Queries Component
                </h1>
            </MediaQueriesComponent>
        </>
    )
}