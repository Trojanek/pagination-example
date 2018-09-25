import React from 'react';
import MainPage from '../components/MainPage';
import Pagination from '../components/Pagination';

const defaults = {
    currentPage: 1,
    itemsCount: 41,
    itemsPerPage: 10,
};

class AppContainer extends React.Component {
    state = {
        currentPage: defaults.currentPage,
    };

    onChange = (page) => {
        this.setState({
            currentPage: page,
        });
    };

    render() {
        const {
            currentPage,
        } = this.state;
        return (
            <React.Fragment>
                <MainPage currentPage={currentPage} />
                <Pagination
                    itemsCount={defaults.itemsCount}
                    itemsPerPage={defaults.itemsPerPage}
                    currentPage={currentPage}
                    onChange={this.onChange}
                />
            </React.Fragment>
        );
    }
}

export default AppContainer;
