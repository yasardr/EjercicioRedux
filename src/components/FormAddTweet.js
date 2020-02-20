import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationActions";
import { addTweetAction } from "../actions/tweetsActions";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
import uuid from "uuid/v4";
import moment from "moment";

//Componente que contiene el formulario del modal
const FormAddTweet = () => {
  //Manejar el estado del formulario
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  //Inicializando el dispatch y ejecución de las acciones
  const dispatch = useDispatch();
  const errorForm = state => dispatch(validationFormAddTweetAction(state));
  const addTweet = state => dispatch(addTweetAction(state));
  const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

  //Obtiene el estado del formulario
  const errorFormValue = useSelector(
    state => state.validation.errorFormAddTweet
  );

  //Modificar el estado del formulario
  const onChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };

  //Guardar los datos en el estado
  const onSubmit = e => {
    e.preventDefault();

    const { name, tweet } = formValue;
    //Validar si todos los campos se llenaron
    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({
        id: uuid(),
        name,
        tweet,
        date: moment()
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo Tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          row="3"
          placeholder="Escribe el tweet..."
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          Enviar Tweet
        </Button>
        {errorFormValue && (
          <Alert variant="danger" className="mt-4">
            Todos los campos son obligatorios
          </Alert>
        )}
      </Form.Group>
    </Form>
  );
};

export default FormAddTweet;
