import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox"; Checkbox
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RemoveIcon from '@mui/icons-material/Remove';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles({
    buttonRoot: {
        borderRadius: '30px',
        color: '#333333',
        borderColor: '#333333'
    },
});


const NinthSection = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="section" bgcolor="#F5F5F5" color="#333333" p={8}>
                <Box py={2} width="80%">
                    <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">Features & Solutions</Box>
                    <Box component="h3" fontSize="42px" fontWeight={400} lineHeight="45px">
                        <Fade right>
                            Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent  commodo velit eget urna mollis dignissim.
                        </Fade>
                    </Box>
                </Box>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Core Features</TableCell>
                            <TableCell align="center">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                                    <Image src="/sec9-img1.svg" width="50" height="50" alt="" layout="intrinsic" />
                                    <Button variant="outlined" size="small" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Select This Plan</Button>
                                </Box>
                            </TableCell>
                            <TableCell align="center">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                                    <Image src="/sec9-img2.svg" width="50" height="50" alt="" layout="intrinsic" />
                                    <Button variant="outlined" size="small" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Select This Plan</Button>
                                </Box>
                            </TableCell>
                            <TableCell align="center">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                                    <Image src="/sec9-img3.svg" width="50" height="50" alt="" layout="intrinsic" />
                                    <Button variant="outlined" size="small" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Select This Plan</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center"><Zoom><Checkbox disableRipple color="secondary" checked={row.standard} icon={<RemoveIcon />} checkedIcon={<CheckCircleIcon />} /></Zoom></TableCell>
                                <TableCell align="center"><Zoom><Checkbox disableRipple color="secondary" checked={row.professional} icon={<RemoveIcon />} checkedIcon={<CheckCircleIcon />} /></Zoom></TableCell>
                                <TableCell align="center"><Zoom><Checkbox disableRipple color="secondary" checked={row.enterprise} icon={<RemoveIcon />} checkedIcon={<CheckCircleIcon />} /></Zoom></TableCell>
                            </TableRow>
                        ))}
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell />
                            <TableCell align="center">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                                    <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">$100/month</Box>
                                    <Button variant="outlined" size="small" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Select This Plan</Button>
                                </Box>
                            </TableCell>
                            <TableCell align="center">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                                    <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">$2000/month</Box>
                                    <Button variant="outlined" size="small" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Select This Plan</Button>
                                </Box>
                            </TableCell>
                            <TableCell align="center">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" p={4}>
                                    <Box component="p" m={0} fontSize="22px" fontWeight={400} lineHeight="35px">$500/month</Box>
                                    <Button variant="outlined" size="small" color="primary" endIcon={<ArrowForwardIosIcon />} disableElevation classes={{ root: classes.buttonRoot }}>Select This Plan</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </>
    )
};

export default NinthSection;

const createData = (name: string, standard: boolean, professional: boolean, enterprise: boolean) => {
    return { name, standard, professional, enterprise };
}

const rows = [
    createData('Sed magna enim', true, true, true),
    createData('Bibendum a quam eu', true, false, true),
    createData('Commodo consectetur', false, true, true),
    createData('Sed magna enim', true, false, true),
    createData('Bibendum a quam eu', false, true, true),
];