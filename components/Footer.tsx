import { Box, Grid, Link, List, ListItem } from "@mui/material";
import Image from 'next/image';


const Footer = () => {
    return (
        <>
            <Box component="footer" bgcolor="#1F1F1F" color="#EEEEEE" pt={10}>
                <Grid container spacing={2} px={4} pb={12}>
                    <Grid item xs={6} md={2}>
                        <Image src="/footer.svg" width="34" height="34" alt="kmmrce logo" layout="intrinsic" />
                    </Grid>
                    <Grid item xs={6} md={2}></Grid>
                    {
                        footerData.map(eachList => (
                            <Grid item xs={6} sm={3} md={2} key={`${eachList.listHeader}`}>
                                <List subheader={<strong>{eachList.listHeader}</strong>}>
                                    {
                                        eachList.listItems.map(item => (
                                            <ListItem key={`${item.name}`} disablePadding>
                                                <Link href={item.url} underline="hover">
                                                    {item.name}
                                                </Link>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Grid>
                        ))
                    }
                </Grid>
                <Box display="flex" justifyContent="space-between" flexWrap="wrap" p={3} borderTop="1px solid #333333">
                    <Box component="span">&copy; KMMRCE</Box>
                    <Box component="span">Site By Six</Box>
                </Box>
            </Box>
        </>
    )
};

export default Footer;

const footerData = [
    {
        listHeader: 'Product',
        listItems: [
            {
                name: 'Home',
                url: '#'
            },
            {
                name: 'About',
                url: '#'
            },
            {
                name: 'Tech Stack',
                url: '#'
            },
            {
                name: 'Super Merchants',
                url: '#'
            },
            {
                name: 'Pricing',
                url: '#'
            },
            {
                name: 'Partners',
                url: '#'
            },
        ]
    },
    {
        listHeader: 'About Us',
        listItems: [
            {
                name: 'About',
                url: '#'
            },
            {
                name: 'Sectors',
                url: '#'
            },
            {
                name: 'Careers',
                url: '#'
            },
            {
                name: 'Contact',
                url: '#'
            },
        ]
    },
    {
        listHeader: 'Dolore',
        listItems: [
            {
                name: 'Voluptate',
                url: '#'
            },
            {
                name: 'Cillum',
                url: '#'
            },
            {
                name: 'Pariatur',
                url: '#'
            },
            {
                name: 'Nulla',
                url: '#'
            },
            {
                name: 'Irure',
                url: '#'
            },
        ]
    },
    {
        listHeader: 'Tertiary',
        listItems: [
            {
                name: 'Privacy Policy',
                url: '#'
            },
            {
                name: 'Terms & Conditions',
                url: '#'
            },
            {
                name: 'Cookie Policy',
                url: '#'
            }
        ]
    }
];