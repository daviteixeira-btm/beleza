import React from "react";
import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid
      mb={4}
      container
      component="footer"
      sx={{
        bgcolor: "#fe9fa6",
        justifyContent: "center",
        borderRadius: "0 0 1rem 1rem",
        boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid item>
        <Typography 
          p={3} 
          variant="h4" 
          sx={{
            fontWeight: "500",
            fontSize: ".8rem",
            textAlign: "center",
            fontFamily: "Roboto",
          }}
        >
          © 2022. comoserumamanicure.com.br. Todos os direitos reservados.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
