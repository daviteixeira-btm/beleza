import React from "react";
import { Grid, Typography } from "@mui/material";

function SecondSection() {
  return (
    <Grid
      container
      component="section"
      sx={{
        boxShadow: "1px 0px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid
        item
        px={2}
        py={2}
        sx={{
          bgcolor: "#f9f9f9",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "1rem",
            color: "#0E3150",
            textAlign: "left",
            fontWeight: "500",
            fontFamily: "Roboto",
          }}
        >
          À medida que a busca pela beleza continua crescendo, a demanda dos
          serviços dessas profissionais continuam aumentando, fazendo com que
          elas se destaquem até internacionalmente. A indústria de unhas está
          crescendo com importância no setor de beleza, pois contribui fortemente para o
          desenvolvimento do mercado no Brasil.
        </Typography>
      </Grid>
      <Grid
        item
        px={2}
        py={1}
        sx={{
          bgcolor: "#f9f9f9",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "1rem",
            color: "#0E3150",
            textAlign: "left",
            fontWeight: "500",
            fontFamily: "Roboto",
          }}
        >
          A indústria de unhas é apreciada por embelezar mãos e pés, porém essa
          profissão exige conhecimentos e habilidades que em grande parte não
          são ensinados em cursos profissionalizantes, dificultando o
          aprendizado de quem quer aprender sobre o assunto. Portanto, estudar
          por meio de cursos online fornece o conhecimento necessário para
          colocar em prática essa atividade, que é como esses profissionais
          aprendem e aprimoram sua profissão. Mas qual é o melhor curso de
          manicure online? Essa é uma das principais perguntas que
          você deve fazer ao começar a estudar a profissão.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SecondSection;
