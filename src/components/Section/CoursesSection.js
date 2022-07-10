import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Hidden,
  Rating,
} from "@mui/material";

import curso from "../../images/escola-designer-de-unhas.png";

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
        <Grid
          item
          lg={12}
          sx={{ width: "100%", background: "#a6d0e0" }}
          p={2}
        >
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

      <Grid item p={1} m={2}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid
            item
            p={1}
            lg={3}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: "16rem" }}>
              <CardMedia component="img" image={curso} />
            </Card>
          </Grid>
          <Grid
            item
            p={1}
            lg={5}
            sx={{ alignSelf: "center" }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h3"
                m={2}
                sx={{ fontSize: "1.5rem", textAlign: "center" }}
              >
                Escola Design de Unhas
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Muitas alunas estão colocando em prática as TÉCNICAS ATUAIS DE
                ALONGAMENTO que estão aprendendo neste EXATO MOMENTO na ESCOLA
                DESIGNER DE UNHAS. Só falta você. 2 Certificados Válidos
                Incluso.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            textAlign="center"
            alignSelf="center"
            sx={{ width: "100%" }}
          >
            <Typography component="legend" sx={{ fontSize: "1.5rem" }}>
              Nota
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "2.5rem" }}>
              4.7
            </Typography>
            <Rating
              name="course-rating"
              defaultValue={4.7}
              precision={0.1}
              readOnly
            />
          </Grid>
          <Grid
            item
            lg={2}
            alignSelf="center"
            sx={{ width: "100%" }}
          >
            <Box
              p={1}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#eb7cb8",
                  "&:hover": { background: "#FE9FA6" },
                  height: "3.5rem",
                  width: "100%",
                }}
              >
                Veja o curso
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CoursesSection;
