import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppContainer from '../containers/AppContainer';

const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
    },
});

const App = ({
    classes,
}) => (
    <div className={classes.root}>
        <AppContainer />
    </div>
);

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
