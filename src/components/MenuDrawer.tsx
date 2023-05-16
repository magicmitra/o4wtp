import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'

type Anchor = 'right'

const MenuDrawer = () => {
    const [state, setState] = React.useState({
        right: false
    })

    // drawer toggler
    const toggleDrawer = (anchor: Anchor, open: boolean) => {
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as  React.KeyboardEvent).key === 'Tab' || 
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }
            setState({ ...state, [anchor]: open})
        }
    }

    // list of items of what will be in the drawer
    const list = (anchor: Anchor) => {
        <Box

        >
        </Box>
    }

}

export default MenuDrawer

