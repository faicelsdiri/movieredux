import MovieCard from "./Moviecard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MovieModal from "./MovieModal";
import { useState } from "react";


function MovieList ({movies}) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal(modalIsOpen) {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
   
  }

    return ( 
<div style={{textAlign: "center"}}>

<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"  }} >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
     

    </div>
    <br></br>
    <Button variant="outline-success" onClick={() => setModalIsOpen(true)}>
        Ajouter un film
      </Button>

      {modalIsOpen && <MovieModal  modalIsOpen = {modalIsOpen} closeModal = {closeModal}/>}
    

    </div>
    )
}

export default MovieList ;