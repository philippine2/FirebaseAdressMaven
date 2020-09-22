import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ElfStyle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Go extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: 'bar' };
    }

    setFooData = json => {
        console.log('parsed json', json);
        this.setState(json);
    };
    writeDb = json => {
        console.log('writing Db', json);
    };

    elfQuery = (url, setData) => {
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.layout}>
                <Grid container spacing={24}>
                    <Grid item xs={12} />
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <h1> React and Jest</h1>
                            <p>Hello {this.state.result}</p>
                            <Button
                                id="elfQueryAction"
                                variant="contained"
                                color="primary"
                                data-url="/git-gist-you-rang"
                                onClick={event =>
                                    this.elfQuery(
                                        '/foo',
                                        this.setFooData,
                                        event
                                    )
                                }
                            >
                                Query Foo
                            </Button>
                            <Button
                                id="elfQueryAction1"
                                variant="contained"
                                color="primary"
                                data-url="/git-gist-you-rang"
                                onClick={event =>
                                    this.elfQuery(
                                        '/writeDb',
                                        this.writeDb,
                                        event
                                    )
                                }
                            >
                                database
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Go.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Go);
