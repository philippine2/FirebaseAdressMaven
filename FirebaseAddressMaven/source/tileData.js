import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const gitItems = (
    <div>
        <ListItemLink button component="a" href="/worker?title=App">
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink button component="a" href="elf-sign-in.html">
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItemLink>

        <ListItemLink button component="a" href="/worker?title=FirebaseLogin">
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
        </ListItemLink>
        <ListItemLink button component="a" href="/worker?title=First">
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="First" />
        </ListItemLink>
    </div>
);

export const demoItems = (
    <div>
        <ListItemLink button component="a" href="/worker?title=Go">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Go" />
        </ListItemLink>
        <ListItemLink button component="a" href="/worker?title=AddressForm">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="AddressForm" />
        </ListItemLink>
        <ListItemLink button component="a" href="/worker?title=AddressLister">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="AddressList" />
        </ListItemLink>

        <ListItemLink button component="a" href="/worker?title=AddressShow">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="AddressShow" />
        </ListItemLink>
        <ListItemLink button component="a" href="/worker?title=About">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItemLink>
    </div>
);
