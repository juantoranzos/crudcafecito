import { Col, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/10273537/pexels-photo-10273537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>MOCHACCINO CANELA</Card.Title>
          <Card.Text>$1.740,00</Card.Text>
          <Link className="btn btn primary" to={'/detalle'}>Ver detalle</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;