import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ElfStyle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import photo from './images/profile.png';

class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.layout}>
                <Grid container spacing={24}>
                    <Grid item xs={12} />
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <h1>Philippine Tembo</h1>
                            <img
                                src={photo}
                                className="App-photo"
                                alt="photo"
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(About);
