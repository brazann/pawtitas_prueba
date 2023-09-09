import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function PetList(props) {
  // Recibe las propiedades de las mascotas
  const { pets } = props;

  return (
    <Row>
      {pets.map((pet) => (
        <Col md={4} key={pet.name}>
          <Card>
            <Card.Img variant="top" src={pet.photo} />
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <Card.Text>
                {pet.species} | {pet.breed} | {pet.gender}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PetList; // Exporta PetList como default
