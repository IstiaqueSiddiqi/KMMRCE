import { Button, Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles({
    buttonRoot: {
        borderRadius: '30px',
        color: '#FFFFFF'
    },
});


const EightSection = () => {
    const classes = useStyles();
    return (
        <>
            <Box id="pricing" component="section" bgcolor="#1D1D1D" color="#FFFFFF" display="flex" height="100%" flexDirection="column" justifyContent="space-between">
                <Box py={4} px={4} width="70%">
                    <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">Serving Our Custemers</Box>
                    <Box component="h3" fontSize="42px" fontWeight={400} lineHeight="45px">Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent  commodo velit eget urna mollis dignissim.</Box>
                </Box>
                <Grid container borderTop="1px solid #ACACAC" columnSpacing={{ xs: 1, md: 3 }}>
                    <Grid item xs={12} md={4} borderRight="1px solid #ACACAC">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                            <Image src="/sec8-img1.svg" width="50" height="50" alt="" layout="intrinsic" />
                            <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">24/7 Tech Support</Box>
                            <Box component="p" fontSize="20px" fontWeight={400} lineHeight="33px">
                                Sed magna enim, bibendum a quam eu, commodo quam. Morbi pellentesque eu dolor luctus sagittis Praesent velit.
                            </Box>
                            <Button variant="outlined" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Contact Support</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} borderRight="1px solid #ACACAC">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                            <Image src="/sec8-img2.svg" width="50" height="50" alt="" layout="intrinsic" />
                            <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">Loyalty Benefits</Box>
                            <Box component="p" fontSize="20px" fontWeight={400} lineHeight="33px">
                                Sed magna enim, bibendum a quam eu, commodo quam. Morbi pellentesque eu dolor luctus sagittis Praesent velit.
                            </Box>
                            <Button variant="outlined" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Get Started</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} borderRight="1px solid #ACACAC">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                            <Image src="/sec8-img3.svg" width="50" height="50" alt="" layout="intrinsic" />
                            <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">Scalable Pricing</Box>
                            <Box component="p" fontSize="20px" fontWeight={400} lineHeight="33px">
                                Sed magna enim, bibendum a quam eu, commodo quam. Morbi pellentesque eu dolor luctus sagittis Praesent velit.
                            </Box>
                            <Button variant="outlined" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>See Pricing</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default EightSection;