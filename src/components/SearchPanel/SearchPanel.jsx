import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react';

function SearchPanel({ store }) {
    return (
        <section className="search-bar">
            <Grid>
                <Row className="show-grid">
                    <Col sm={1} smOffset={1} xs={3}>
                        <span className="sprite sprite-Logo_ML"></span>
                    </Col>
                    <Col sm={9} xs={8}>
                        <form action ="/items?">
                            <input className="search-place" type="text" name="search" placeholder={store.placheSearch} />
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

export default observer(SearchPanel);
