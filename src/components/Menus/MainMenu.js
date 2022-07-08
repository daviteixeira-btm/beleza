import React, { useState } from "react";

import { 
    Box,
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

const pages = [
    { name: 'Sobre nos' }, 
    { name: 'Serviços' }, 
    { name: 'Time' },
    { name: 'Avaliações' },
    { name: 'Contato' }
];

function MainMenu() {

    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
          {pages.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </div>
    );

    return (
        <Box component="header">
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                {getList()}
            </Drawer>
            
            <AppBar 
                component="nav" 
                color="transparent"
                sx={{border: "1px solid red", top: "2rem", boxShadow: 0, p: 2}}
            >
                <Container maxWidth="lg">
                    <Toolbar component="ul" sx={{listStyle: "none"}}>
                        <Hidden smUp>
                            <IconButton
                                onClick={() => setOpen(true)}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Typography
                                component="li"
                                align="right"
                                width="100%"
                                color="#2c2525"
                            >
                                Tudo sobre unhas
                            </Typography>
                        </Hidden>
                        <Hidden smDown>
                            <Typography component="li" sx={{ flexGrow: 1, listStyle: "none" }}>
                                Tudo sobre unhas
                            </Typography>

                            <Button color="inherit">
                                <Typography component="li" sx={{ listStyle: "none" }}>
                                    Sobre nos
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography component="li" sx={{ listStyle: "none" }}>
                                    Serviços
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography component="li" sx={{ listStyle: "none" }}>
                                    Time
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography component="li" sx={{ listStyle: "none" }}>
                                    Avaliações
                                </Typography>
                            </Button>

                            <Button color="inherit">
                                <Typography component="li" sx={{ listStyle: "none" }}>
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