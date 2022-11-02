import React, { useState } from "react"
import styled from "@mui/styled-engine"
import { Box } from "@mui/material"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const FormGroupComponent = styled(FormGroup)({
    display: 'block'
})

const PropsComponent = styled(Box, { shouldForwardProp: (prop) => prop !== 'dark' && prop !== 'border' })
    (({ dark, border, theme }) => ({

        backgroundColor: dark ? theme.palette.grey[900] : theme.palette.grey[100],
        color: dark ? theme.palette.grey[100] : theme.palette.grey[900],
        border: border ? `1rem solid ${theme.palette.primary.main}` : 'none'

    }));

PropsComponent.defaultProps = {
    dark: false,
    border: false
}
export default function Props() {
    const [dark, setDark] = useState(true);
    const [border, setBorder] = useState(true);
    return (
        <>
            <FormGroupComponent>
                <FormControlLabel control={
                    <Checkbox 
                        checked={dark}
                        onChange={(e) => setDark(e.target.checked)} />
                } label="Dark" />
                <FormControlLabel control={
                    <Checkbox 
                        checked={border}
                        onChange={(e) => setBorder(e.target.checked)} />
                } label="Border" />
            </FormGroupComponent>
            <PropsComponent border={border} dark={dark}>Hello
            </PropsComponent>
        </>
    )
}
