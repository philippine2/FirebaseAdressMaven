import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ElfStyle';
import Button from '@material-ui/core/Button';
import { getByIndex, getCount } from './assets/elf-local-storage';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class AddressShow extends React.Component {
    constructor(props) {
        super(props);
        let IndexAdress = getByIndex(0);
        this.state = {
            index: 0,
            ListAdress: IndexAdress
        };
    }

    nextIndex = () => {
        console.log('next index called.');
        let newIndex = this.state.index + 1;

        if (newIndex > getCount() - 1) {
            newIndex = 0;
        }

        this.setState({ index: newIndex });
        this.setState({ ListAdress: getByIndex(newIndex) });
    };

    PreIndex = () => {
        console.log('next index called.');
        let newIndex = this.state.index + 1;

        if (newIndex > getCount() - 1) {
            newIndex = 0;
        }

        this.setState({ index: newIndex });
        this.setState({ ListAdress: getByIndex(newIndex) });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.layout}>
                <Grid container spacing={24}>
                    <Grid item xs={12} />
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Typography
                                className={classes.elfTypography}
                                variant="h5"
                                gutterBottom
                            >
                                Welcome to Elf Address
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Typography
                                className={classes.paper}
                                variant="body1"
                                gutterBottom
                            >
                                {this.state.ListAdress.firstName}
                                <span> </span>
                                {this.state.ListAdress.lastName} <br />
                                {this.state.ListAdress.street} <span> </span>
                                {this.state.ListAdress.city}
                                <span> </span>
                                {this.state.ListAdress.state}
                                <span> </span>
                                {this.state.ListAdress.zip}
                                <br />
                                {this.state.ListAdress.contact}
                                <span />
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Button
                                id="getFileAction"
                                variant="contained"
                                color="primary"
                                className={classes.elfTypography}
                                onClick={this.PreIndex}
                            >
                                Previous
                            </Button>

                            <Button
                                id="getFileAction"
                                variant="contained"
                                color="primary"
                                className={classes.elfTypography}
                                onClick={this.nextIndex}
                            >
                                Next
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
AddressShow.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AddressShow);
