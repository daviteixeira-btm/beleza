import React from 'react';
import { Box, Typography } from '@mui/material';

/* Image imports */
import Woman from "../../images/pexels-andrea-piacquadio-small.png";

function FirstSection(){

    return (
        <Box 
            mt={5}
            display="flex"
            component="section" 
            justifyContent="space-between"
            sx={{bgcolor: "#ffdde6", borderRadius: "1rem"}}
        >
            <Box 
                display="flex"
                component="div"
                justifyContent="center"
                sx={{width: "70rem", marginTop: "4.1rem"}} 
            >
                <Box 
                    sx={{
                        width: "20rem", 
                        margin: "2rem",
                        marginBottom: 0,
                        height: "20rem",
                        marginTop: "4rem",
                        bgcolor: "#FE9FA6",
                        borderRadius: "50%", 
                        position: "relative"
                    }}
                />
                <Box
                    src={Woman}
                    component="img"
                    sx={{position: "absolute", top: "8rem"}}
                />
            </Box>
            <Box component="div">
                <Typography 
                    p={2}
                    variant="h1" 
                    align="center" 
                    fontSize="3rem" 
                    sx={{color: "#2c2525", fontWeight: "bold", marginTop: "8rem"}}
                >
                    Tudo Sobre as Técnicas Mais Atuais de Alongamento de Unhas!
                </Typography>
            </Box>
        </Box>
    )
}

export default FirstSection;