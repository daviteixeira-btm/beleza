import React from "react";
import {
  Box,
  Link,
  Grid,
  Card,
  Button,
  Rating,
  CardMedia,
  Typography,
} from "@mui/material";

function Product(props) {
  return (
    <Grid 
      item 
      p={1} 
      m={2}>
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
          <Link 
            target="_blank"
            underline="none"
            href={props.linkPage}
          >
            <Card 
              sx={{ 
                maxWidth: "16rem"
              }}>
              <CardMedia 
                component="img" 
                image={props.image} 
              />
            </Card>
          </Link>
          
        </Grid>
        <Grid 
          item 
          p={1} 
          lg={5} 
          sx={{ 
            alignSelf: "center" 
          }}
        >
          <Box>
            <Typography
              m={2}
              gutterBottom
              variant="h3"
              sx={{ 
                fontWeight: "500",
                fontSize: "1.5rem", 
                textAlign: "center" 
              }}
            >
              {props.titulo}
            </Typography>
            <Typography 
              variant="p" 
              sx={{
                textAlign: "left",
                fontFamily: "Roboto"
              }}
            >
              {props.texto}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={2}
          display="flex"
          textAlign="center"
          alignSelf="center"
          alignItems="center"
          flexDirection="column"
          sx={{ 
            width: "100%"
          }}
        >
          <Typography 
            variant="p" 
            component="legend" 
            sx={{ 
              fontSize: "1.5rem", 
              fontFamily: "Roboto" 
            }}
          >
            Nota
          </Typography>
          <Typography 
            variant="p" 
            sx={{ 
              fontWeight: "500", 
              fontSize: "2.5rem", 
              fontFamily: "Roboto"
            }}
          >
            {props.nota}
          </Typography>
          <Rating
            readOnly
            precision={0.1}
            name="course-rating"
            defaultValue={props.ratingValue}
          />
        </Grid>
        <Grid 
          item 
          lg={2} 
          alignSelf="center" 
          sx={{ 
            width: "100%" 
          }}
        >
          <Box
            p={1}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link 
              target="_blank"
              underline="none"
              href={props.linkPage}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "3.5rem",
                  fontFamily: "Roboto",
                  background: "#eb7cb8",
                  "&:hover": { background: "#fe9fa6" },
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
