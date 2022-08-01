import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function WhatAdvantages() {
  return (
    <Grid
      mt={1}
      id="vantagens"
      container
      component="section"
      sx={{
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Grid item>
        <Typography
          my={4}
          variant="h2"
          sx={{
            color: "#eb7cb8",
            fontWeight: "600",
            fontSize: "1.5rem",
            textAlign: "center",
            fontFamily: "Roboto",
          }}
        >
          Quais são as vantagens de fazer um curso de manicure?
        </Typography>

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
          Em resumo, há muitas vantagens em fazer um curso de designer de unhas.
          Por exemplo, você pode:
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <AutoAwesomeIcon sx={{ color: "#eb7cb8" }} />
            </ListItemIcon>
            <ListItemText
              primary="Aprender novas técnicas de manicure e melhorar as já existentes;"
              sx={{ color: "#0e3150" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AutoAwesomeIcon sx={{ color: "#eb7cb8" }} />
            </ListItemIcon>
            <ListItemText
              primary="Ganhar vantagem na competitiva indústria da beleza;"
              sx={{ color: "#0e3150" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AutoAwesomeIcon sx={{ color: "#eb7cb8" }} />
            </ListItemIcon>
            <ListItemText
              primary="Aprenda habilidades específicas que vão lhe diferenciar de outras designer de unhas;"
              sx={{ color: "#0e3150" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AutoAwesomeIcon sx={{ color: "#eb7cb8" }} />
            </ListItemIcon>
            <ListItemText
              primary="Uma nova saída criativa para uso profissional e amador."
              sx={{ color: "#0e3150" }}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item my={1}>
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
          Embora você possa querer fazer um curso de manicure por diferentes
          motivos - como estudar para um exame formal, desenvolvimento de
          carreira, etc. – O Designer de Unhas é uma habilidade divertida e
          criativa que pode abrir novas portas para sua carreira, ou ser apenas
          um hobby divertido.
        </Typography>
      </Grid>
      <Grid item my={1}>
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
          No geral, os cursos online de manicure e pedicure são ótimos para
          estudantes ou profissionais que desejam aprimorar suas habilidades,
          hobistas que desejam se aprofundar em coisas novas ou até mesmo
          aqueles que desejam construir seu próprio negócio.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default WhatAdvantages;
