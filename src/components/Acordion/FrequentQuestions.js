import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FrequentQuestions() {
  return (
    <Grid
      container
      mt={1}
      sx={{
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        my={2}
        sx={{
          color: "#eb7cb8",
          fontWeight: "600",
          fontSize: "1.5rem",
          textAlign: "center",
          fontFamily: "Roboto",
        }}
      >
        Perguntas Frequentes
      </Typography>

      <Grid item>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-01-content"
            id="panel-01-header"
          >
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Como encontro o melhor curso de manicure on-line?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#ffdde6" }}>
            <Typography
              my={1}
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Pesquisamos, vasculhamos a internet e encontramos a lista dos seis
              <b> melhores cursos de manicure online</b>. Agora, a questão é: o
              que nos fez selecionar esses <b>cursos de manicure online</b> em
              relação aos outros?
            </Typography>
            <Typography
              my={1}
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Então, inicialmente, com base em nossa pesquisa, escolhemos as 12
              melhores cursos de manicure online. Esses cursos foram
              selecionados em quatro parâmetros: As ofertas de cursos; O valor
              investido; A experiência da instrutora e as classificações e
              comentários do curso.
            </Typography>
            <Typography
              my={1}
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Em seguida, contatamos as principais especialistas do setor e as
              apresentamos com esses cursos. Eles revisaram esses cursos online
              individuais de manicure, usaram sua experiência e compreensão e,
              finalmente, nos deram esses{" "}
              <b>6 melhores cursos online de manicure</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-02-content"
            id="panel-02-header"
          >
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Esses cursos são adequados para mim?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#ffdde6" }}>
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Esta é uma das melhores lista de <b>cursos de manicure online</b>{" "}
              e vem com diferentes níveis de dificuldade. Então, isso a torna
              ótima para novas aspirantes a manicures e até mesmo para as já
              estabelecidas.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-03-content"
            id="panel-03-header"
          >
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              O que vou precisar para aprender com esses cursos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#ffdde6" }}>
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Além da vontade de aprender algo novo, nestes cursos, as
              especialistas do setor ensinarão tudo o que você precisa saber
              para se tornar uma <b>técnica de unhas</b>. Aprender com estes
              cursos irá ajudá-la a crescer no negócio da beleza, a demanda por{" "}
              <b>manicures</b> está em toda parte. Então, se você deseja
              expandir sua carreira, estes são os cursos perfeitos.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-04-content"
            id="panel-04-header"
          >
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Os cursos tem garantia?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#ffdde6" }}>
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Sim, todos os cursos possuem no mínimo 7 dias de total garantia.
              Se por algum motivo você não gostar do conteúdo apresentado ou
              achar que não é pra você, os produtores devolvem o seu dinheiro.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-05-content"
            id="panel-05-header"
          >
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Os cursos oferecem suporte para as alunas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#ffdde6" }}>
            <Typography
              sx={{
                color: "#0e3150",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Sim! Todos os cursos listados oferecem uma otíma equipe de suporte
              para qualquer dúvida que você possa ter durante o seu aprendizado.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}

export default FrequentQuestions;
