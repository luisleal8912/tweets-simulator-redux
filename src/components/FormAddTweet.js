import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { validationFormAddTweetActions } from "../actions/validationsActions";
import { addTweetActions } from "../actions/tweetsActions";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  // Redux
  const dispatch = useDispatch();

  const validateErrorForm = (state) =>
    dispatch(validationFormAddTweetActions(state));
  const addTweet = (state) => dispatch(addTweetActions(state));
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  // State
  const errorForm = useSelector((state) => state.validations.errorFormAddTweet);

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, tweet } = formValue;

    if (!name || !tweet) {
      validateErrorForm(true);
    } else {
      validateErrorForm(false);

      addTweet({
        id: uuidv4(),
        name,
        tweet,
        date: moment(),
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
          row="3"
          name="tweet"
          placeholder="Escribe lo que quieres comunicar"
        />
      </Form.Group>
      <Button varian="primary" type="submit">
        Enviar tweet
      </Button>
      {errorForm && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios...
        </Alert>
      )}
    </Form>
  );
}
