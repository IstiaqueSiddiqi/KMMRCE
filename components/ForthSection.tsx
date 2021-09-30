import Box from "@mui/material/Box";
import Image from 'next/image';
import Bounce from 'react-reveal/Bounce';

const ForthSection = () => {
    return (
        <>
            <Box component="section" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={16} py={2} height="100%" bgcolor="#3CD17F">
                <Box py={8}>
                    <Box component="p" mt={0} fontWeight={400} fontSize="40px">“</Box>
                    <Box fontWeight={400} fontSize="42px" lineHeight="45px">
                        KMMRCE is an ideal solution for anyone looking to build a bespoke e-commerce website. A great foundation has been designed not only to get you started on a fully-fledged storefront with minimal effort.
                    </Box>
                    <Box component="p" m={0} fontWeight={400} fontSize="40px">“</Box>
                    <Bounce top><Image src="/sec4-img1.svg" width="150" height="200" alt="" /></Bounce>
                    <Box fontWeight={400} fontSize="25px" >Tyler Hildebrand, Head of Engineering at Patch</Box>
                </Box>
            </Box>
        </>
    )
};

export default ForthSection;