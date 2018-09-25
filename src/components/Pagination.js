import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PrevIcon from '@material-ui/icons/NavigateBefore';
import NextIcon from '@material-ui/icons/NavigateNext';

const navigations = [-1, 0, 1];

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
    },
});

const Pagination = ({
    itemsCount,
    itemsPerPage,
    currentPage,
    onChange,
    classes,
}) => {
    const minPage = 1;
    const maxPage = Math.ceil((itemsCount || 1) / itemsPerPage);
    const hasPrev = currentPage > minPage;
    const hasNext = currentPage < maxPage;
    const renderNavigations = item => (
        (currentPage + item >= minPage && currentPage + item <= maxPage)
            ? (
                <Button
                    key={item}
                    onClick={() => onChange(currentPage + item)}
                    disabled={item === 0}
                >
                    {currentPage + item}
                </Button>
            )
            : null
    );
    return (
        <div className={classes.root}>
            <IconButton
                onClick={() => onChange(currentPage - 1)}
                disabled={!hasPrev}
                aria-label="Previous Page"
            >
                <PrevIcon />
            </IconButton>
            <div className={classes.navigations}>
                {navigations.map(renderNavigations)}
            </div>
            <IconButton
                onClick={() => onChange(currentPage + 1)}
                disabled={!hasNext}
                aria-label="Next Page"
            >
                <NextIcon />
            </IconButton>
        </div>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);
