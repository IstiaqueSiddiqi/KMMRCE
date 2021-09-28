import { Button, Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles({
    buttonRoot: {
        borderRadius: '30px',
        color: '#333333',
        borderColor: '#333333',
        marginRight: '15px'
    }
});


const FifthSection = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container component="section" height="100vh">
                <Grid item xs={6}>
                    <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-start" p={16} height="100%">
                        <Box component="p" m={0}>Case Study</Box>
                        <Box component="h3" fontSize="40px" fontWeight={400} lineHeight="40px">
                            Created with KMMRCE: Watch 1010
                        </Box>
                        <Box component="p">
                            Disrupting and democratizing healthcare. Butterfly’s ambitious, rapid global scale-out is only possible with the support of Saleor. Their incredible journey has already taken the company from a disruptive startup to Apple Design Awards Winner 2019
                        </Box>
                        <Box display="flex">
                            <Button endIcon={<ArrowForwardIosIcon />} variant="outlined" color="primary" disableElevation classes={{ root: classes.buttonRoot }}>View Case Study</Button>
                            <Button endIcon={<ArrowForwardIosIcon />} disabled variant="outlined" color="primary" disableElevation classes={{ root: classes.buttonRoot }}>View All</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Image src="/sec5-img1.svg" width="100%" height="100%" alt="" layout="responsive" />
                </Grid>
            </Grid>
        </>
    )
};




export default FifthSection;