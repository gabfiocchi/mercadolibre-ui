import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ListItem from './ListItem';


class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categories: [],
      loading: true
    };

    this.getProducts = this.getProducts.bind(this);

  }

  getProducts() {
    fetch('http://localhost:3000/api/items?q=' + this.props.location.query.q)
      .then((response) => { return response.json() })
      .then((json) => {
        this.setState({
          data: json.items,
          categories: json.categories,
          loading: false
        });
      });
  }

  render() {

    this.getProducts();

    let listItems = this.state.data.map((item, index) => {
      if (index < 4) {
        return <ListItem key={index} item={item} />;
      }
    });

    let categories = this.state.categories.map((item, index) => {
      return this.state.categories.length - 1 !== index ? item + ' > ' : item;
    });

    return (
      <div className="container">
        <Row>
          <Col mdOffset={1} md={10} sm={12}>
            <header>
              <h4 className="products-categories">{categories}</h4>
            </header>
            <div className="products-details">
              {this.state.loading ? <p className="cargando">Cargando...</p> : null}
              {listItems}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default List;