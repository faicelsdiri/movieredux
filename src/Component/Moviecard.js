import { Card, CardGroup } from "react-bootstrap";
import ReactStars from "react-stars";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { useNavigate } from "react-router";

function MovieCard({ movie }) {
  return (
    <>
      <CardGroup>
        <Card
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginLeft: "20px",
            width: "350px",
            height: "600px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "4px",
            borderRadius: "30px", // Adjust the value as needed
          }}
        >
          <Card.Img
            variant="top"
            src={movie.image}
            style={{ width: "342px", height: "250px", borderRadius: "25px" }}
          />
          <Card.Body>
            <Card.Title> {movie.name}</Card.Title>
            <Card.Text> {movie.date} </Card.Text>
            <Card.Text> {movie.type} </Card.Text>
            <Card.Text> {movie.seasons} </Card.Text>
            <Card.Text> {movie.description} </Card.Text>
            <Card.Text> {movie.trailer} </Card.Text>
          </Card.Body>
          <Card.Footer
            className="text-muted"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={movie.rating}
              edit={false}
              style={{ textAlign: "center" }}
            />
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default MovieCard;
