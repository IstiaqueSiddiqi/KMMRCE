import { Box, Grid, Divider, Checkbox, FormGroup, FormControlLabel, List, ListItem } from "@mui/material";
import React from "react";
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Flip from 'react-reveal/Flip';


const ThirdSection = () => {
    return (
        <>
            <Grid container component="section" height="100vh">
                <Grid item xs={6}>
                    <Box p={4} height="100%">
                        <Flip right>
                            <Image src="/sec3-img1.svg" width="460" height="500" alt="speaker" />
                        </Flip>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box display="flex" flexDirection="column" px={2} py={2} width="600px">
                        <Box component="h3" fontSize="40px" fontWeight={400} lineHeight="40px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Box>
                        <Box component="h4" fontSize="22px" fontWeight={400}>
                            Development Features
                        </Box>
                        <Box component="p">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Box>
                        <Divider />
                        <Box component="h4" fontSize="22px" fontWeight={400}>
                            Design & Layout
                        </Box>
                        <Box component="p">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                        </Box>
                        <List dense>
                            {
                                ['Sed magna enim', 'Sed magna enim', 'Sed magna enim'].map((item, index) => (
                                    <ListItem key={`${item}${index}`} dense disablePadding>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox color="secondary" checked checkedIcon={<CheckCircleIcon />} />} label={item} />
                                        </FormGroup>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default ThirdSection;