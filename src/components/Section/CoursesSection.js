import React from "react";
import { Grid, Hidden, Typography } from "@mui/material";

import curso from "../../images/escola-designer-de-unhas.png";
import Product from "../Products/Product";

function CoursesSection() {
  return (
    <Grid
      container
      direction="column"
      component="section"
      sx={{ borderRadius: "0 0 1rem 1rem" }}
    >
      <Grid item p={4}>
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "500" }}
        >
          Conheça os principais cursos online de manicure
        </Typography>
      </Grid>

      <Grid item p={2}>
        <Typography variant="p" sx={{ fontSize: "1.3rem", textAlign: "left" }}>
          Existem inumeros cursos online disponiveis na internet sobre manicure,
          o que torna dificil escolher qual comprar, certo? Como saber qual o
          melhor? Nós te ajudamos!
        </Typography>
      </Grid>

      <Grid item p={2}>
        <Typography variant="p" sx={{ fontSize: "1.3rem", textAlign: "left" }}>
          Constantemente, fazemos a avaliação dos melhores cursos do mercado em
          nossa oferta de classificação:
        </Typography>
      </Grid>

      <Hidden smDown>
        <Grid item lg={12} sx={{ width: "100%", background: "#a6d0e0" }} p={2}>
          <Grid
            container
            textAlign="center"
            textTransform="uppercase"
            fontFamily="Roboto"
            fontWeight="500"
          >
            <Grid item lg={3}>
              Curso Online
            </Grid>
            <Grid item lg={5}>
              O que curtimos
            </Grid>
            <Grid item lg={2}>
              Avaliação
            </Grid>
            <Grid item lg={2}>
              Informações
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Product
        image={curso}
        titulo="Escola Design de Unhas"
        texto="Muitas alunas estão colocando em prática as 
        TÉCNICAS ATUAIS DE ALONGAMENTO que estão aprendendo 
        neste EXATO MOMENTO na ESCOLA DESIGNER DE UNHAS. 
        Só falta você. 2 Certificados Válidos Incluso."
        nota="4.7"
        ratingValue={4.7}
        linkPage="https://go.hotmart.com/R72950783S"
      />
    </Grid>
  );
}

export default CoursesSection;
