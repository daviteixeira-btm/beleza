import React from "react";

import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Rating,
  Link,
} from "@mui/material";

function Product(props) {
  return (
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
            <CardMedia component="img" image={props.image} />
          </Card>
        </Grid>
        <Grid item p={1} lg={5} sx={{ alignSelf: "center" }}>
          <Box>
            <Typography
              gutterBottom
              variant="h3"
              m={2}
              sx={{ fontSize: "1.5rem", textAlign: "center" }}
            >
              {props.titulo}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>{props.texto}</Typography>
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
            {props.nota}
          </Typography>
          <Rating
            name="course-rating"
            defaultValue={props.ratingValue}
            precision={0.1}
            readOnly
          />
        </Grid>
        <Grid item lg={2} alignSelf="center" sx={{ width: "100%" }}>
          <Box
            p={1}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link target="_blank" href={props.linkPage} underline="none">
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
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Product;
