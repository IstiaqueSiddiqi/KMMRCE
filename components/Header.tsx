import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { IconButton, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';

const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        fontSize: '30px'
    },
    header: {
        boxShadow: theme.shadows[0],
        borderBottom: '1px solid #ACACAC'
    },
    buttonRoot: {
        borderRadius: '30px',
        color: '#ffffff',
        padding: '12px 23px',
        display: 'block',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    drawerMenu: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    ulRoot: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    liRoot: {
        width: 'auto'
    },
    anchor: {
        color: '#333333',
        fontSize: '24px'
    },
}));


const Header = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleDrawer = (open: boolean) => setMobileOpen(open);

    const drawerList = () => (
        <Box
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                <NavList classes={classes} />
            </List>
        </Box>
    );

    return (
        <HideOnScroll>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" classes={{ root: classes.header }}>
                    <Toolbar classes={{ root: classes.toolbar }}>
                        <Typography variant="h6" color="inherit" component="div" classes={{ root: classes.logo }}>
                            KMMRCE
                        </Typography>
                        <NavBar />
                        <Button variant="contained" size="small" color="secondary" disableElevation classes={{ root: classes.buttonRoot }}>Request Demo</Button>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            classes={{ root: classes.drawerMenu }}
                            onClick={() => toggleDrawer(!mobileOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={() => toggleDrawer(false)}
                >
                    {drawerList()}
                </Drawer>
            </Box>
        </HideOnScroll>
    );
}

export default Header;

const HideOnScroll = (props: any) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

const NavBar = () => {
    const classes = useStyles();

    return (
        <nav>
            <List classes={{ root: classes.ulRoot }}>
                <NavList classes={classes} />
            </List>
        </nav>
    )
};

const NavList = (props: any) => {
    const { classes } = props;
    return (
        <>
            {navList.map((anchor) => (
                <React.Fragment key={anchor.menuName}>
                    <ListItem button classes={{ root: classes.liRoot }}>
                        <Link href={anchor.menuURL} underline="none" classes={{ root: classes.anchor }}>
                            {anchor.menuName}
                        </Link>
                    </ListItem>
                </React.Fragment>
            ))}
        </>
    )
};

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