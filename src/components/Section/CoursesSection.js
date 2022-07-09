import React from "react";
import { 
    Grid,
    Box, 
    Typography, 
    Card, 
    CardMedia,
    Button
} from '@mui/material';

import curso from "../../images/escola-designer-de-unhas.png"

function CoursesSection(){
    return (
        <Grid 
            container 
            direction="column"
            alignItems="center" 
            component="section" 
            sx={{border: "1px solid", borderRadius: "0 0 1rem 1rem"}}
        >
            <Grid item m={4} sx={{border: "1px solid"}}>
                <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center" }}>
                    Aqui eu vou falar sobre os cursos
                </Typography>
            </Grid>
            <Grid item p={1} m={4} sx={{border: "1px solid"}}>
                <Grid container sx={{display: "flex", flexDirection: "row", border: "1px solid red"}}>
                    <Grid item p={1} lg={3} sx={{border: "1px solid red"}}>
                        <Card sx={{ border: "1px solid", maxWidth: "16rem"}}>
                            <CardMedia 
                                component="img" 
                                image={curso} 
                            />
                        </Card>
                    </Grid>
                    <Grid item p={1} lg={9} sx={{alignSelf: "center", border: "1px solid red"}}>
                        <Box sx={{ border: "1px solid blue"}}>
                            <Typography 
                                gutterBottom 
                                variant="h3"
                                m={2}
                                sx={{fontSize: "1.5rem", textAlign: "center"}}
                            >
                                Escola Design de Unhas
                            </Typography>
                            <Typography sx={{ textAlign: "center" }}>
                                Muitas alunas estão colocando em prática as 
                                TÉCNICAS ATUAIS DE ALONGAMENTO que estão aprendendo 
                                neste EXATO MOMENTO na ESCOLA DESIGNER DE UNHAS. 
                                Só falta você. 2 Certificados Válidos Incluso.
                            </Typography>
                        </Box>
                        <Box m={1} sx={{ border: "1px solid blue", display: "flex", justifyContent: "center"}}>
                            <Button variant="contained" sx={{ background: "#eb7cb8" }}>
                                Veja o curso
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                
                
            </Grid>
        </Grid>
    )
}

export default CoursesSection;