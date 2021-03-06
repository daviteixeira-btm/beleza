import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Woman from "../../images/pexels-andrea-piacquadio-small.png";

function FirstSection() {

  let data = new Date();
  let ano = data.getFullYear();

  return (
    <Grid
      mt={5}
      id="inicio"
      container
      direction="row"
      alignItems="center"
      component="section"
      justifyContent="space-around"
      sx={{
        bgcolor: "#ffdde6",
        marginBottom: "3px",
        borderRadius: "1rem 1rem 0 0",
        boxShadow: "1px 0px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid
        item
        xl={4}
        lg={4}
        md={6}
        sm={12}
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Box
          sx={{
            width: "16rem",
            height: "16rem",
            marginTop: "9rem",
            bgcolor: "#fe9fa6",
            borderRadius: "50%",
          }}
        />
        <Box
          src={Woman}
          alt="Uma mulher sorrindo e sentanda com um notebook no colo. Em sua mão direita, ela olha para o seu smartphone."
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
        item 
        xl={8} 
        lg={8} 
        md={6} 
        sm={12} 
        xs={12}
      >
        <Typography
          p={2}
          variant="h1"
          align="center"
          fontSize="2.5rem"
          sx={{ 
            color: "#2c2525", 
            fontWeight: "bold", 
            fontFamily: "Roboto" 
          }}
        >
          Qual o melhor curso de manicure online?
        </Typography>
        <Typography 
          p={2}
          variante="p"
          fontSize="1.3rem"
          sx={{ 
            color: "#2c2525",
            fontWeight: "400",
            fontFamily: "Roboto" 
          }}
        >
          Se você deseja aprender as habilidades necessárias para ser uma ótima manicure, 
          esta revisão dos melhores cursos online de manicure e pedicure de {ano} é para você.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FirstSection;