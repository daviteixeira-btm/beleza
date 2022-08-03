import React from "react";
import {
  Box,
  Link,
  Grid,
  Card,
  List,
  Button,
  Rating,
  CardMedia,
  Typography,
} from "@mui/material";
import ItemDaLista from "./Item";

function Product(props) {
  return (
    <Grid item>
      <Grid
        p={1}
        container
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid
          item
          lg={3}
          sx={{
            width: "100%",
            height: "18rem",
            display: "flex",
            alignItems: "center",
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
                maxWidth: "16rem",
                maxHeight: "16rem",
              }}>
              <CardMedia 
                component="img" 
                image={props.image}
                alt={props.altImage}
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

            <List>
              <ItemDaLista value={props.value1} text={props.text1}/>
              <ItemDaLista value={props.value2} text={props.text2}/>
              <ItemDaLista value={props.value3} text={props.text3}/>
              <ItemDaLista value={props.value4} text={props.text4}/>
              <ItemDaLista value={props.value5} text={props.text5}/>
              <ItemDaLista value={props.value6} text={props.text6}/>
            </List>
            
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
