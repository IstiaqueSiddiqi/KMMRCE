import { Button, ListItemButton, ListItemText, Link, List, ListItem } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles({
    ulRoot: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    liRoot: {
        padding: '0 35px',
        width: 'auto'
    },
    anchor: {
        color: '#333333',
        fontSize: '24px',
        textAlign: 'left'
    },
});
const navList = [
    {
        menuName: 'Platform',
        menuURL: '#platform'
    },
    {
        menuName: 'Super Merchants',
        menuURL: '#super-merchants'
    },
    {
        menuName: 'Pricing',
        menuURL: '#pricing'
    },
    {
        menuName: 'Partners',
        menuURL: '#'
    },
    {
        menuName: 'Docs',
        menuURL: '#'
    }
];

const NavBar = () => {
    const classes = useStyles();
    return (
        <nav>
            <List classes={{ root: classes.ulRoot }}>
                {navList.map((anchor) => (
                    <React.Fragment key={anchor.menuName}>
                        <ListItem classes={{ root: classes.liRoot }}>
                            <Link href={anchor.menuURL} underline="none" classes={{ root: classes.anchor }}>
                                {anchor.menuName}
                            </Link>
                            {/* <ListItemButton component="a" href={anchor.menuURL}>
                                <ListItemText primary={anchor.menuName} disableTypography classes={{ root: classes.anchor }} />
                            </ListItemButton> */}

                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
        </nav>
    )
};

export default NavBar;