import Modal from "react-modal";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { add_movie } from "../Redux/action";

// import MoviesArray from "./MoviesArray";

Modal.setAppElement("#root");

function MovieModal({ modalIsOpen, closeModal }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [season, setSeason] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  function ADD() {
    const newMovie = { name, date, type, season, description, rating, image };
    dispatch(add_movie(newMovie));
    closeModal();
  }

  return (
    <>
      <br></br>

      <Modal isOpen={modalIsOpen}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name : </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter NAME"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date : </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type : </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Season : </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter seasons"
            onChange={(e) => {
              setSeason(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>description : </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter description "
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>rating : </Form.Label>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={rating}
            onChange={(newranting) => {
              setRating(newranting);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image url : </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter url "
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="success" onClick={ADD}>
          Submit
        </Button>
        <Button variant="danger" onClick={closeModal}>
          reset
        </Button>
      </Modal>
    </>
  );
}

export default MovieModal;
