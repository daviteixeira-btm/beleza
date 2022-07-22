import React, { useState } from "react";
import "./MainMenu.css";
import { 
    Box,
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
    { name: 'Sobre nos' }, 
    { name: 'Serviços' }, 
    { name: 'Time' },
    { name: 'Avaliações' },
    { name: 'Contato' }
];

function MainMenu() {

    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
          {pages.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText primary={item.name} />
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

                            <Avatar alt="Logo do Beleza.com" src={logo} />

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

                            <Avatar alt="Logo do Tudo Sobre Unhas" src={logo} />

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
                                Tudo sobre unhas
                            </Typography>

                            <Button color="inherit">
                                <Typography 
                                    component="li" 
                                    sx={{ 
                                        listStyle: "none",
                                        fontWeight: "500",
                                        fontFamily: "Roboto" 
                                    }}
                                >
                                    Sobre nos
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography 
                                    component="li" 
                                    sx={{ 
                                        listStyle: "none",
                                        fontWeight: "500",
                                        fontFamily: "Roboto" 
                                    }}
                                >
                                    Serviços
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography 
                                    component="li" 
                                    sx={{ 
                                        listStyle: "none",
                                        fontWeight: "500",
                                        fontFamily: "Roboto" 
                                    }}
                                >
                                    Time
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography 
                                    component="li" 
                                    sx={{ 
                                        listStyle: "none",
                                        fontWeight: "500",
                                        fontFamily: "Roboto" 
                                    }}
                                >
                                    Avaliações
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography 
                                    component="li" 
                                    sx={{ 
                                        listStyle: "none",
                                        fontWeight: "500",
                                        fontFamily: "Roboto" 
                                    }}
                                >
                                    Contato
                                </Typography>
                            </Button>
                        </Hidden>  
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default MainMenu;