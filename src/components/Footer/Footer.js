import React from "react";

import { Grid, Typography } from '@mui/material';

function Footer(){
    return (
        <Grid mb={4} container component="footer" sx={{bgcolor: "#FE9FA6", borderRadius: "0 0 1rem 1rem", justifyContent: "center"}}>
            <Grid item>
                <Typography p={3} variant="h6" sx={{ fontSize: ".8rem"}}>
                  © 2022. beleza.com.br. Todos os direitos reservados.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;