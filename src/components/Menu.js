import * as React from "react"
import {Link, Outlet} from 'react-router-dom'
import styled from '@mui/styled-engine'

const Root = styled('div')({
    display: 'flex',

    "> .link": {
        padding: '10px 10px 10px 10px'
      },

})

export default function Menu() {
    return (
        <>
            <Root>
                 <Link className="link" to='basic'>Basic</Link>
                 <Link className="link" to='theme'>Theme</Link>
                 <Link className="link" to='mediaqueries'>MediaQueries</Link>
                 <Link className="link" to='childcomponents'>Child Component Child Element</Link>
                 <Link className="link" to='pseudoclass'>Pseudo Class</Link>
                 <Link className="link" to='sibling'>Sibling Component</Link>
                 <Link className="link" to='props'>Props Component</Link>
            </Root>
            <Outlet />
        </>
    )
}