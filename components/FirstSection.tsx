
import { Button, Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
    buttonRoot: {
        height: '50px',
        width: '170px',
        borderRadius: '30px',
        color: '#ffffff'
    }
});


const FirstSection = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container component="section">
                <Grid item xs={6} borderRight="1px solid #ACACAC">
                    <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-start" p={16}>
                        <Box component="h1" fontSize="38px" fontWeight={400}>
                            <Fade left>
                                <><Box component="span" color="#4B42AD">KMMRCE</Box> is an enterprise level digital platform that provides a turnkey solution to online retailing.</>
                            </Fade>
                        </Box>
                        <Button variant="contained" color="secondary" disableElevation classes={{ root: classes.buttonRoot }}>Request Demo</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box display="flex" flexDirection="column" p={4}>
                        <Image src="/speaker.png" width="885" height="883" alt="speaker" layout="responsive" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default FirstSection;