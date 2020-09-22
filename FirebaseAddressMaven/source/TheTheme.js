import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './ElfHeader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

const themePurple = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700]
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700]
        },
        background: {
            paper: '#cce2ee',
            default: '#ddf3ff'
        }
    }
});

export const renderAppTool = (AppTool, props, choice) => {
    ReactDOM.render(
        <MuiThemeProvider theme={themePurple}>
            <CssBaseline />
            <ElfHeader />
            <AppTool {...props} />
        </MuiThemeProvider>,
        choice
    );
};
