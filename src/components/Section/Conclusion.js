import React from "react";
import { Grid, Typography } from "@mui/material";

function Conclusion() {
  return (
    <Grid
      mt={1}
      id="quanto-custa"
      container
      component="section"
      sx={{
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Grid item my={1}>
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
          Conclusão
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
          No geral, os cursos de manicure online se destacam porque você tem a
          chance de aprender não apenas em uma aula, mas quantas quiser a partir
          dos ensinamentos e técnicas passados pelas instrutoras. Assim, se você
          deseja aprender sobre designer de unhas online, não faltam opções.
          Desta forma, então{" "}
          <b>espero de coração que este artigo tenha ajudado você</b> a
          descobrir qual curso online de manicure e designer de unhas é o ideal
          para você!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Conclusion;
