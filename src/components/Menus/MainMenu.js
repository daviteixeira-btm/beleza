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

                            <Avatar alt="Logo da tudosobreunhas.com" src={logo} />

                            <Typography
                                width="100%"
                                align="right"
                                component="li"
                                color="#2c2525"
                                fontFamily="Roboto"
                                fontWeight="bold"
                            >
                                Tudo Sobre Unhas
                            </Typography>
                        </Hidden>
                        <Hidden smDown>

                            <Link underline="none" href="#inicio">
                                <Avatar alt="Logo do Tudo Sobre Unhas" src={logo} />
                            </Link>

                            <Typography 
                                component="li" 
                                sx={{ 
                                    flexGrow: 1,
                                    listStyle: "none",
                                    fontWeight: "500",
                                    fontFamily: "Roboto",
                                    paddingLeft: "1rem" 
                                }}
                            >
                                Tudo Sobre Unhas
                            </Typography>
                            
                            <Link underline="none" href="#sobre" sx={{color: "#2c2525"}}>
                                <Button color="inherit">
                                    <Typography 
                                        component="li" 
                                        sx={{ 
                                            listStyle: "none",
                                            fontWeight: "500",
                                            fontFamily: "Roboto" 
                                        }}
                                    >
                                        Sobre nós
                                    </Typography>
                                </Button>
                            </Link>
                            
                            <Link underline="none" href="#cursos" sx={{color: "#2c2525"}}>
                                <Button color="inherit">
                                    <Typography 
                                        component="li" 
                                        sx={{ 
                                            listStyle: "none",
                                            fontWeight: "500",
                                            fontFamily: "Roboto" 
                                        }}
                                    >
                                        Cursos
                                    </Typography>
                                </Button>
                            </Link>
                            
                            <Link underline="none" href="#perguntas" sx={{color: "#2c2525"}}>
                                <Button color="inherit">
                                    <Typography 
                                        component="li" 
                                        sx={{ 
                                            listStyle: "none",
                                            fontWeight: "500",
                                            fontFamily: "Roboto" 
                                        }}
                                    >
                                        Perguntas Frequentes
                                    </Typography>
                                </Button>
                            </Link>
                            
                        </Hidden>  
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default MainMenu;