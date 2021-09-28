import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Jello from 'react-reveal/Jello';

const useStyles = makeStyles({
    buttonRoot: {
        borderRadius: '30px',
        color: '#ffffff'
    }
});


const SecondSection = () => {
    const classes = useStyles();
    return (
        <>
            <Box id="platform" position="relative" display="flex" justifyContent="center" alignItems="center" component="section" bgcolor="#1F1F1F" height="100vh" px={4} py={12}>
                <Box sx={{
                    position: "absolute",
                    zIndex: 2,
                    opacity: 0.8,
                    left: '10%',
                    top: '10%',
                    width: '80%',
                    height: '80%'
                }}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50px',
                        left: '0',
                    }}>
                        <Image src="/img1.svg" width="219" height="160" alt="" />
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translate(-50%)'
                    }}>
                        <Image src="/img2.svg" width="200" height="100" alt="" />
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        top: '50px',
                        right: '0',
                    }}>
                        <Image src="/img3.svg" width="122" height="161" alt="" />
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                    }}>
                        <Image src="/img4.svg" width="200" height="100" alt="" />
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%'
                    }}>
                        <Image src="/img6.svg" width="200" height="100" alt="" />
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        bottom: '80px',
                        right: '30px',
                    }}>
                        <Image src="/img7.svg" width="110" height="146" alt="" />
                    </Box>
                </Box>

                <Box display="flex" justifyContent="center" width="700px" alignItems="center" flexDirection="column" position="relative" zIndex={5}>
                    <Box fontSize="22px" fontWeight={400} color="#FFFFFF" textAlign="center">
                        Platform
                    </Box>
                    <Box component="h2" fontSize="42px" fontWeight={400} color="#FFFFFF" textAlign="center">
                        Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business
                    </Box>
                    <Jello><Button variant="outlined" endIcon={<ArrowForwardIosIcon />} color="primary" disableElevation classes={{ root: classes.buttonRoot }}>Explore the Platform</Button></Jello>
                </Box>
            </Box>
        </>
    )
};

export default SecondSection;