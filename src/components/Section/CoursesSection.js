import React from "react";
import { Grid, Hidden, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import Product from "../Products/Product";

import cursoEspecializacaoEmCutilagemParaManicure from "../../images/especializacao-em-cutilagem-para-manicure.png";
import cursoEscolaDesignerDeUnhas from "../../images/escola-designer-de-unhas.png";
import cursoAlongamentoDeUnhas from "../../images/curso-alongamento-de-unhas.png";
import cursoDeManicure from "../../images/curso-de-manicure.png";
import cursoEspecialistaEmDesignDeUnhas from "../../images/curso-especialista-em-designer-de-unhas.png";
import cursoDeCutilagemRussa from "../../images/curso-de-cutilagem-russa.png";

function CoursesSection() {

  let data = new Date();
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  let dataAtual = mes + '/' + ano;

  return (
    <Grid
      container
      direction="column"
      component="section"
      sx={{ borderRadius: "0 0 1rem 1rem" }}
    >
      <Grid item p={4} sx={{bgcolor: "#f9f9f9"}}>
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "500", color: "#0E3150" }}
        >
          Conheça os principais Cursos online de manicure
        </Typography>
      </Grid>

      <Grid item px={2} py={1} sx={{bgcolor: "#f9f9f9", color: "#0E3150", fontFamily: 'Roboto'}}>
        <Typography variant="p" sx={{ fontSize: "1rem", fontWeight: "500", textAlign: "left" }}>
          Existem inumeros cursos online disponiveis na internet sobre manicure,
          o que torna dificil escolher qual comprar, certo? Como saber qual o
          melhor? Nós te ajudamos!
        </Typography>
      </Grid>

      <Grid item px={2} py={1} sx={{bgcolor: "#f9f9f9", color: "#0E3150", fontFamily: 'Roboto'}}>
        <Typography variant="p" sx={{ fontSize: "1rem", fontWeight: "500", textAlign: "left" }}>
          Constantemente, fazemos a avaliação dos melhores cursos do mercado em
          nossa oferta de classificação:
        </Typography>
      </Grid>

      <Grid item px={4} py={1} sx={{bgcolor: "#f9f9f9", color: "#0E3150", fontFamily: 'Roboto'}}>
        <List>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <CheckBoxIcon sx={{ color: "#009d43"}} />
            </ListItemIcon>
            <ListItemText primary="Escolhemos os melhores cursos do mercado;" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <CheckBoxIcon sx={{ color: "#009d43"}} />
            </ListItemIcon>
            <ListItemText primary="Todos os cursos tem garantia minima de 7 dias;" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <CheckBoxIcon sx={{ color: "#009d43"}} />
            </ListItemIcon>
            <ListItemText primary="Todos os cursos oferecem uma plataforma de compra segura." />
          </ListItem>
        </List>
      </Grid>

      <Grid item px={2} py={1} sx={{bgcolor: "#f9f9f9", color: "#0E3150", fontFamily: 'Roboto'}}>
        <Typography variant="p" sx={{ fontSize: ".8rem", fontWeight: "500", textAlign: "left" }}>
          Última atualização: {dataAtual}
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
        image={cursoEspecializacaoEmCutilagemParaManicure}
        titulo="Curso de Cutilagem para Manicures com Faby Cardoso - Especialização"
        texto="Curso de especialização em cutilagem para manicure 
        e pedicure, válido para iniciantes e manicures com dificuldades 
        ou em busca de aperfeiçoamento na profissão!"
        nota="5.0"
        ratingValue={5.0}
        linkPage="https://go.hotmart.com/A72954398E"
      />

      <Product
        image={cursoEspecialistaEmDesignDeUnhas}
        titulo="Especialista em Designer de Unhas"
        texto="O curso online de alongamento de unhas 
        Especialista em Designer de Unhas é um curso 
        totalmente completo para você que quer aprender 
        do zero como fazer unhas maravilhosas com todos 
        os formatos e modelos de unhas."
        nota="4.9"
        ratingValue={4.9}
        linkPage="https://go.hotmart.com/U72955347K"
      />

      <Product
        image={cursoDeManicure}
        titulo="Curso de Manicure e Pedicure (Iniciante) Faby Cardoso"
        texto="Nestas aulas de manicure da Faby Cardoso pode 
        contar com vídeos 100% práticos onde irá aprender: 
        Sobre cutículas mãos e pés; Unhas francêsinhas perfeitas 
        nas mãos e nos pés; Como passar o esmalte nude sem manchar; 
        Como tirar o borrado corretamente das unhas; Como colocar 
        adesivos artesanais e muito mais...."
        nota="4.8"
        ratingValue={4.8}
        linkPage="https://go.hotmart.com/K72955078N"
      />

      <Product
        image={cursoEscolaDesignerDeUnhas}
        titulo="Escola Design de Unhas"
        texto="Muitas alunas estão colocando em prática as 
        TÉCNICAS ATUAIS DE ALONGAMENTO que estão aprendendo 
        neste EXATO MOMENTO na ESCOLA DESIGNER DE UNHAS. 
        Só falta você. 2 Certificados Válidos Incluso."
        nota="4.7"
        ratingValue={4.7}
        linkPage="https://go.hotmart.com/R72950783S"
      />

      <Product
        image={cursoAlongamentoDeUnhas}
        titulo="CURSO ALONGAMENTO DE UNHAS - COM PAOLA CHAVES"
        texto="O Curso Completo Alongamento de Unhas com 
        Paola Chaves possui 48 vídeo aulas exclusivas de 
        altíssima qualidade onde a aluna aprenderá do zero 
        a como fazer unhas de qualidade com aspecto de naturalidade."
        nota="4.7"
        ratingValue={4.7}
        linkPage="https://go.hotmart.com/W72954815O"
      />

      <Product
        image={cursoDeCutilagemRussa}
        titulo="Curso de Cutilagem Russa + 6 Bônus"
        texto="A cutilagem russa mal desembarcou no Brasil e 
        já vem dando o que falar. A técnica, que abole o uso 
        de alicates na hora de remover as cutículas das unhas, 
        tem revolucionado o universo da manicure e causado frisson 
        nos salões, inclusive os brasilienses."
        nota="4.7"
        ratingValue={4.7}
        linkPage="https://go.hotmart.com/Y72955761M"
      />
    </Grid>
  );
}

export default CoursesSection;
