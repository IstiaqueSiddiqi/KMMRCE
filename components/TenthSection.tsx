import { Button, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Jello from 'react-reveal/Jello';

const useStyles = makeStyles({
    buttonRoot: {
        borderRadius: '30px',
        color: '#FFFFFF'
    }
});


const TenthSection = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="section" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={16}>
                <Box component="h3" fontSize="40px" fontWeight={400} lineHeight="40px">
                    <Jello>Ready to grow your business?</Jello>
                </Box>
                <Button endIcon={<ArrowForwardIosIcon />} variant="contained" color="secondary" disableElevation classes={{ root: classes.buttonRoot }}>Request Demo</Button>
            </Box>
        </>
    )
};




export default TenthSection;