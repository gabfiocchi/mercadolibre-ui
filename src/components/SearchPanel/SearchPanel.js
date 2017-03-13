import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let searchedItem = 'items?q=' + this.refs.searchedItem.value
        browserHistory.push(searchedItem);
    }


    render() {
        let store = this.props.store;
        return (
            <section className="search-bar">
                <Grid>
                    <Row className="show-grid">
                        {/*<Col sm={1} smOffset={1} xs={3}>
                            <span className="sprite sprite-Logo_ML"></span>
                        </Col>*/}
                        <Col mdOffset={1} md={10} sm={12}>
                            <form action="/items?" onSubmit={this.handleSubmit}>
                                <span className="sprite sprite-Logo_ML search-sprite"></span>
                                <input
                                    className="search-place"
                                    type="text"
                                    name="search"
                                    placeholder={store.placheSearch}
                                    ref="searchedItem"
                                />
                                <button className="search-action" type="submit" value="Buscar">
                                    <i className="sprite sprite-ic_Search"></i>
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default SearchPanel;
