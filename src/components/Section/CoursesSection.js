import React from "react";
import {
  Grid,
  List,
  Hidden,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Product from "../Products/Product";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import cursoDeManicure from "../../images/curso-de-manicure.png";

import cursoEscolaDesignerDeUnhas from "../../images/escola-designer-de-unhas.png";

import cursoDeCutilagemRussa from "../../images/curso-de-cutilagem-russa.png";

import cursoAlongamentoDeUnhas from "../../images/curso-alongamento-de-unhas.png";

import cursoEspecialistaEmDesignDeUnhas from "../../images/curso-especialista-em-designer-de-unhas.png";

import cursoEspecializacaoEmCutilagemParaManicure from "../../images/especializacao-em-cutilagem-para-manicure.png";

function CoursesSection() {
  let data = new Date();
  let ano = data.getFullYear();
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let dataAtual = mes + "/" + ano;

  return (
    <Grid
      container
      direction="column"
      component="section"
      sx={{
        marginBottom: "3px",
        boxShadow: "1px 0px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid
        item
        p={4}
        sx={{
          bgcolor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#0e3150",
            fontSize: "2rem",
            fontWeight: "500",
            textAlign: "center",
            fontFamily: "Roboto",
          }}
        >
          Fizemos uma lista com os principais cursos online do mercado
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
          Existem inúmeros cursos online disponíveis na internet sobre manicure,
          o que torna difícil escolher qual comprar, certo? Como saber qual a melhor opção? 
          Nós te ajudamos!
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
            color: "#0e3150",
            fontSize: "1rem",
            fontWeight: "500",
            textAlign: "left",
            fontFamily: "Roboto",
          }}
        >
          Constantemente, fazemos a avaliação dos melhores cursos do mercado em
          nossa oferta de classificação:
        </Typography>
      </Grid>

      <Grid
        item
        px={4}
        py={1}
        sx={{
          color: "#0e3150",
          bgcolor: "#f9f9f9",
          fontFamily: "Roboto",
        }}
      >
        <List>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <CheckBoxIcon sx={{ color: "#009d43" }} />
            </ListItemIcon>
            <ListItemText primary="Escolhemos os melhores cursos do mercado;" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <CheckBoxIcon sx={{ color: "#009d43" }} />
            </ListItemIcon>
            <ListItemText primary="Todos os cursos têm garantia mínima de 7 dias;" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <CheckBoxIcon sx={{ color: "#009d43" }} />
            </ListItemIcon>
            <ListItemText primary="Todos os cursos oferecem uma plataforma de compra segura." />
          </ListItem>
        </List>
      </Grid>

      <Grid
        item
        px={2}
        py={1}
        sx={{
          color: "#0e3150",
          bgcolor: "#f9f9f9",
          fontFamily: "Roboto",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: ".8rem",
            fontWeight: "500",
            textAlign: "left",
            fontFamily: "Roboto",
          }}
        >
          Última atualização: {dataAtual}
        </Typography>
      </Grid>

      <Grid item>
        <Hidden smDown>
          <Grid
            item
            p={2}
            lg={12}
            sx={{
              width: "100%",
              height: "3rem",
              background: "#a6d0e0",
            }}
          >
            <Grid
              container
              fontWeight="500"
              textAlign="center"
              fontFamily="Roboto"
              textTransform="uppercase"
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
      </Grid>

      <Product
        image={cursoEspecializacaoEmCutilagemParaManicure}
        titulo="Curso Especialização para Manicure e Pedicure com Faby Cardoso"
        nota="5.0"
        ratingValue={5.0}
        linkPage="https://go.hotmart.com/A72954398E"
        value1={true}
        value2={true}
        value3={true}
        value4={true}
        value5={true}
        value6={true}
        text1="Aulas de Manicure"
        text2="Aulas de Pedicure"
        text3="Aulas Bônus de decoração de unhas"
        text4="Certificação"
        text5="Acesso vitalício"
        text6="Perfeito para manicures iniciantes e experientes"
      />

      <Product
        image={cursoEspecialistaEmDesignDeUnhas}
        titulo="Curso Especialista em Designer de Unhas"
        nota="4.9"
        ratingValue={4.9}
        linkPage="https://go.hotmart.com/U72955347K"
        value1={true}
        value2={true}
        value3={true}
        value4={true}
        value5={true}
        value6={false}
        text1="Aulas de Alongamento de Unhas e Nail Designer"
        text2="Bônus exclusivos"
        text3="Certificação"
        text4="Acesso vitalício"
        text5="Perfeito para manicures iniciantes e experientes"
        text6="Aulas de Manicure e Pedicure"
      />

      <Product
        image={cursoDeManicure}
        titulo="Curso para Iniciantes de Manicure e Pedicure com Faby Cardoso"
        nota="4.8"
        ratingValue={4.8}
        linkPage="https://go.hotmart.com/K72955078N"
        value1={true}
        value2={true}
        value3={true}
        value4={true}
        value5={false}
        value6={false}
        text1="Aulas de Manicure"
        text2="Aulas de Pedicure"
        text3="Certificação"
        text4="Bônus Especiais"
        text5="Acesso vitalício"
        text6="Perfeito para manicures iniciantes e experientes"
      />

      <Product
        image={cursoEscolaDesignerDeUnhas}
        titulo="Curso Escola Design de Unhas"
        nota="4.7"
        ratingValue={4.7}
        linkPage="https://go.hotmart.com/R72950783S"
        value1={true}
        value2={true}
        value3={true}
        value4={true}
        value5={true}
        value6={false}
        text1="Aulas de Manicure"
        text2="Bônus Especiais"
        text3="Certificação"
        text4="Acesso vitalício"
        text5="Perfeito para manicures iniciantes e experientes"
        text6="Aulas de Pedicure"
      />

      <Product
        image={cursoAlongamentoDeUnhas}
        titulo="Curso Alongamento de Unhas com Paola Chaves"
        nota="4.7"
        ratingValue={4.7}
        linkPage="https://go.hotmart.com/W72954815O"
        value1={true}
        value2={true}
        value3={true}
        value4={true}
        value5={false}
        value6={false}
        text1="Aulas de Alongamentos de Unhas"
        text2="Certificação"
        text3="Acesso Vitalício"
        text4="Bônus Exclusivos"
        text5="Aulas de Manicure e Pedicure"
        text6="Perfeito para manicures iniciantes e experientes"
      />

      <Product
        image={cursoDeCutilagemRussa}
        titulo="Curso de Cutilagem Russa"
        nota="4.7"
        ratingValue={4.7}
        linkPage="https://go.hotmart.com/Y72955761M"
        value1={true}
        value2={true}
        value3={true}
        value4={false}
        value5={false}
        value6={false}
        text1="Aulas sobre Técnica de Cutilagem Russa"
        text2="Bônus Exclusivos"
        text3="Certificação"
        text4="Aulas de Manicure e Pedicure"
        text5="Acesso Vitalício"
        text6="Perfeito para manicures iniciantes e experientes"
      />
    </Grid>
  );
}

export default CoursesSection;
