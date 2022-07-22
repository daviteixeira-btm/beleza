import React from 'react';
import {
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ItemDaLista(props){

    const valueIcon = props.value;

    if(valueIcon){
        return (
            <>
                <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                        <CheckCircleIcon sx={{ color: "#009d43" }} />
                    </ListItemIcon>
                    <ListItemText>
                        {props.text}
                    </ListItemText>
                </ListItem>
            </>
        )
    }else{
        return (
            <>
                <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                        <CancelIcon sx={{ color: "#f04e23" }} />
                    </ListItemIcon>
                    <ListItemText>
                        {props.text}
                    </ListItemText>
                </ListItem>
            </>
        )
    }
}

export default ItemDaLista;