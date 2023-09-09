import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Form, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { PetList } from "./PetList";


function UserProfileForm(props) {
  // Recibe las propiedades del usuario y sus mascotas
  const { name, rut, email, phone, photo, bio, pets } = props;

  // Define el estado del formulario
  const [state, setState] = useState({
    name: name,
    rut: rut,
    email: email,
    phone: phone,
    bio: bio,
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que quieras con los datos del formulario
    console.log(state);
  };

  // Maneja la subida de una nueva foto
  const handleUpload = (event) => {
    // Aquí puedes hacer lo que quieras con el archivo seleccionado
    console.log(event.target.files[0]);
  };

  return (
    <Card>
      <Card.Header>
        <Image src={photo} roundedCircle width="100" height="100" />
        <Form.File
          id="photo"
          label="Subir foto"
          custom
          onChange={handleUpload}
        />
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="rut">
            <Form.Label>Rut</Form.Label>
            <Form.Control
              type="text"
              name="rut"
              value={state.rut}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Número telefónico</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Biografía</Form.Label>
            <Form.Control
              as="textarea"
              name="bio"
              value={state.bio}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Guardar cambios
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <PetList pets={pets} /> // Muestra la lista de mascotas
      </Card.Footer>
    </Card>
  );
}

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

export default UserProfileForm;
