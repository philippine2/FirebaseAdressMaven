import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';

class ElfApp extends Component {
    render() {
        //const {classes} = this.props;
        return (
            <React.Fragment>
                <h1>Welcome to Elf App</h1>
            </React.Fragment>
        );
    }
}

ElfApp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ElfApp);
