import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col smOffset={1}>
            <div className="text-center">
              <h4>¡Encuentra lo que buscas!</h4>
              <h5>Hay millones de productos publicados, las mejores marcas y los precios más bajos.</h5>
            </div>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default Home;