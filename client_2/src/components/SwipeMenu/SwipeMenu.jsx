import { Typography } from '@material-ui/core'
import React from 'react'
import c from './swipeMenu.module.css'


const SwipeMenu = ({ header, items, active }) => {
    return (
        <div className={active ? `${c.bgb} ${c.active}` : c.bgb}>
            <div className={c.menu}>
                <Typography variant="h6"> {header} </Typography>
                <ul>
                    {items.map(item => 
                        <li key={item.id}>
                            <Typography variant="h6"> {item.value} </Typography>
                        </li>
                    )}
                </ul>
            </div>
        </div>


    )
}


export default SwipeMenu;