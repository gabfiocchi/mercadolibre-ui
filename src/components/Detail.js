import React from 'react';
import createFragment from 'react-addons-create-fragment';
import { Row, Col } from 'react-bootstrap';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        pricture: '',
        title: '',
        condition: '',
        sold_quantity: '',
        price: {
          amount: '',
          decimals: ''
        },
        description: ''
      },
      loading: false
    }

    this.getItem = this.getItem.bind(this);
    this.parseHTML = this.parseHTML;
  }

  getItem() {
    fetch('http://localhost:3000/api/items/' + this.props.params.id)
      .then((response) => { return response.json() })
      .then((json) => {
        this.setState({
          data: json.item,
          loading: true
        });
      });
  }


  render() {

    this.getItem();

    let itemImageStyle = {
      backgroundImage: 'url(' + this.state.data.pricture + ')'
    };

    return (
      <div className="container" >
        <Row>
          <Col mdOffset={1} md={10} sm={12} className="description-container details">
            <Row className={this.state.loading ? 'hidden' : null}>
              Cargando descripción del producto...
              </Row>
            <Row className={this.state.loading ? null : 'hidden'}>
              <Col md={8}>
                <div>
                  <img className="image" src={this.state.data.pricture} alt={this.state.data.title} />
                </div>
              </Col>
              <Col md={4} className="product-details">
                <p className="conditions">{this.state.data.condition + ' - '}{this.state.data.sold_quantity > 1 ? this.state.data.sold_quantity + ' vendidos' : 'Aún no tiene ventas este producto'}</p>
                <h2 className="title">{this.state.data.title}</h2>
                <h3 className="price">${this.state.data.price.amount}{this.state.data.price.decimals === 0 ? null : '.' + this.state.data.price.decimals}</h3>
                <button className="btn btn-primary">Comprar</button>
              </Col>
            </Row>
            <Row className={this.state.loading ? null : 'hidden'}>
              <Col md={8}>
                <h4 className="product-description-title">Descripción del producto</h4>
              </Col>
              <Col className="product-description" md={12} dangerouslySetInnerHTML={{ __html: this.state.data.description }}>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;
