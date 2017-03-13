import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemImageStyle = {
            backgroundImage: 'url(' + this.props.item.pricture + ')'
        };
        return (
            <Link className="row" to={'/items/' + this.props.item.id}>
                <Col md={2} sm={3}>
                    <div className="item-image" style={itemImageStyle}></div>
                </Col>
                <Col md={8} sm={7} className="item-detail">
                    <h3>{'$ ' + this.props.item.price.amount}{this.props.item.free_shipping ? <span className="sprite sprite-ic_shipping"></span> : null}</h3>
                    <h2>{this.props.item.title}</h2>
                </Col>
                <Col md={2} sm={2}>
                    <p className="item-location">{this.props.item.location}</p>
                </Col>
            </Link>
        );
    }
}

export default ListItem;