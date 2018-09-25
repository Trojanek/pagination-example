import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const MainPage = ({
    currentPage,
}) => (
    <Typography variant="display4">
        {currentPage}
    </Typography>
);

MainPage.propTypes = {
    currentPage: PropTypes.number.isRequired,
};

export default MainPage;
