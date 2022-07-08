import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

/* Image imports */
import Woman from "../../images/pexels-andrea-piacquadio-small.png";

function FirstSection(){

    return (
        <Grid
            mt={5}
            container
            direction="row"
            alignItems="center"
            component="section"
            justifyContent="space-around"
            sx={{bgcolor: "#ffdde6", borderRadius: "1rem"}}
        >
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12} display="flex" justifyContent="center">
                <Box 
                    sx={{
                        width: "16rem", 
                        height: "16rem",
                        marginTop: "9rem",
                        bgcolor: "#FE9FA6",
                        borderRadius: "50%",
                    }}
                />
                <Box
                    src={Woman}
                    component="img"
                    sx={{
                        
                        top: "9.9rem",
                        width: "18rem", 
                        maxWidth: "100%",
                        position: "absolute", 
                    }}
                />
            </Grid>
            <Grid 
                item xl={8} lg={8} md={6} sm={12} xs={12}
            >
                <Typography 
                    p={2}
                    variant="h1" 
                    align="center" 
                    fontSize="2.5rem" 
                    sx={{color: "#2c2525", fontWeight: "bold"}}
                >
                    Tudo Sobre as Técnicas Mais Atuais de Alongamento de Unhas!
                </Typography>
            </Grid>
        </Grid>
    )
}

export default FirstSection;