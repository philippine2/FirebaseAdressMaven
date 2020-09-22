import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ElfStyle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class First extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.layout}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperLion} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

First.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(First);
