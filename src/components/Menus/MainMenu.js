import React, { useState } from "react";
import "./MainMenu.css";
import { 
    Box,
    Link,
    Avatar,
    AppBar,
    Drawer,
    Hidden,
    Button,
    Toolbar, 
    ListItem,
    Container,
    Typography,
    IconButton,
    ListItemText,
} from "@mui/material";

import  MenuIcon from '@mui/icons-material/Menu';

import logo from "../../images/logoIcon.png";

const pages = [
    { name: 'Início', id: '#inicio'},
    { name: 'Sobre nós', id: '#sobre' }, 
    { name: 'Cursos', id: '#cursos' },
    { name: 'Vantagens', id: '#vantagens' },
    { name: 'Perguntas Frequentes', id: '#perguntas' }
];

function MainMenu() {

    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
          {pages.map((item, index) => (
            <ListItem button key={index}>
                <Link href={item.id} underline="none" sx={{color: "#2c2525"}}>
                    <ListItemText 
                        primary={item.name} 
                        sx={{ 
                            borderBottom: "4px solid #eb7cb8",
                            "&:hover": { color: "#2c2525", borderBottom: '4px solid #fe9fa6' },
                        }}
                    />
                </Link>
            </ListItem>
          ))}
        </div>
    );

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <Box component="header">
            <Drawer 
                open={open} 
                anchor={"left"} 
                onClose={() => setOpen(false)}
            >
                {getList()}
            </Drawer>
            
            <AppBar 
                component="nav"
                color="transparent"
                className={navbar ? "navbar active" : "navbar"}
                sx={{
                    p: 1,
                    top: "2rem", 
                    boxShadow: 0,
                }}
            >
                <Container 
                    maxWidth="lg">
                    <Toolbar
                        component="ul"  
                        sx={{
                            listStyle: "none"
                        }}
                    >
                        <Hidden smUp>
                            <Box 
                                component="ul" 
                                sx={{  
                                    width: "100%", 
                                    display: "flex",
                                    listStyle: "none",
                                    alignItems: "center",
                                    justifyContent: "space-evenly"
                                }}
                            >
                                <Box component="li">
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ 
                                            mr: 2 
                                        }}
                                        onClick={() => setOpen(true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Box>

                                <Avatar 
                                    component="li" 
                                    alt="Logo da comoserumamanicure.com.br" 
                                    src={logo} 
                                />

                                <Box component="li">
                                    <Typography
                                        width="100%"
                                        align="center"
                                        component="li"
                                        color="#2c2525"
                                        fontWeight="bold"
                                        fontFamily="Roboto"
                                    >
                                        Como ser uma Manicure
                                    </Typography>
                                </Box>
                            </Box>
                        </Hidden>
                        <Hidden smDown>

                            <Box 
                                component="ul" 
                                sx={{ 
                                    width: "100%", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly"
                                }}
                            >
                                <Link underline="none" href="#inicio">
                                    <Avatar alt="Logo do Como ser uma Manicure" src={logo} />
                                </Link>

                                <Typography 
                                    variant="li" 
                                    sx={{ 
                                        flexGrow: 1,
                                        listStyle: "none",
                                        fontWeight: "500",
                                        fontFamily: "Roboto",
                                        paddingLeft: "1rem" 
                                    }}
                                >
                                    Como ser uma Manicure
                                </Typography>
                                
                                <Link underline="none" href="#sobre" sx={{color: "#2c2525"}}>
                                    <Button 
                                        component="li" 
                                        color="inherit" 
                                        sx={{ 
                                            listStyle: "none",
                                            fontWeight: "500",
                                            fontFamily: "Roboto" 
                                        }}
                                    >    
                                        Sobre nós
                                    </Button>
                                </Link>
                                
                                <Link underline="none" href="#cursos" sx={{color: "#2c2525"}}>
                                    <Button 
                                        color="inherit" 
                                        component="li" 
                                        sx={{ 
                                            listStyle: "none",
                                            fontWeight: "500",
                                            fontFamily: "Roboto" 
                                        }}
                                    >
                                        Cursos 
                                    </Button>
                                </Link>

                                <Link underline="none" href="#vantagens" sx={{color: "#2c2525"}}>
                                    <Button 
                                        color="inherit" 
                                        component="li" 
                                        sx={{ 
                                            listStyle: "none",
                                            fontWeight: "500",
                                            fontFamily: "Roboto" 
                                        }}
                                    >    
                                        Vantagens
                                    </Button>
                                </Link>
                                
                                <Link underline="none" href="#perguntas" sx={{color: "#2c2525"}}>
                                    <Button 
                                        color="inherit" 
                                        component="li" 
                                        sx={{ 
                                            listStyle: "none",
                                            fontWeight: "500",
                                            fontFamily: "Roboto" 
                                        }}
                                    >
                                        Perguntas Frequentes
                                    </Button>
                                </Link>
                            </Box>
                            
                        </Hidden>  
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default MainMenu;