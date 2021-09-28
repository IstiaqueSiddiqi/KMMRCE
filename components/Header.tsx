import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const useStyles = makeStyles({
    logo: {
        fontSize: '45px',
    },
    header: {
        borderBottom: '1px solid #ACACAC',
        boxShadow: 'none'
    },
    buttonRoot: {
        height: '43px',
        width: '163px',
        borderRadius: '30px',
        color: '#ffffff',
        padding: '13px 38px 12px 25px',
        fontSize: '0.800rem'
    }
});


const Header = () => {
    const classes = useStyles();

    return (

        <HideOnScroll>
            <AppBar position="sticky" classes={{ root: classes.header }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div" classes={{ root: classes.logo }} sx={{ flexGrow: 1 }}>
                        KMMRCE
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}><NavBar /></Box>
                    <Button variant="contained" color="secondary" disableElevation classes={{ root: classes.buttonRoot }}>Request Demo</Button>
                </Toolbar>
            </AppBar>
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
}
