import { Button, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Jello from 'react-reveal/Jello';

const useStyles = makeStyles({
    buttonRoot: {
        borderRadius: '30px',
        color: '#FFFFFF'
    },
});


const SixthSection = () => {
    const classes = useStyles();

    return (
        <>
            <Box id="super-merchants" component="section" sx={{ backgroundImage: "url('/sec6-img1.svg')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={16} height="100%" color="#FFFFFF" bgcolor="#4B42AD" textAlign="center">
                <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">Super Merchants</Box>
                <Box component="h3" fontSize="42px" fontWeight={400} lineHeight="45px">
                    Multisite, made easy.
                </Box>
                <Box component="p" fontSize="25px" fontWeight={400} lineHeight="33px">
                    Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent commodo velit eget urna mollis dignissim. Nunc lobortis, augue non pulvinar consequat, enim massa pharetra neque.
                </Box>
                <Jello><Button variant="outlined" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Explore Super Merchants</Button></Jello>
            </Box>
        </>
    )
};

export default SixthSection;