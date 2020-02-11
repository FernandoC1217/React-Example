import React, { Component } from "react";
import axios from "axios";
import MovieComponent from "./MovieCard";
import matrixImage from "../Media/matrix.jpg";
import titanicImage from "../Media/titanic.png";

class Movies extends Component {
  state = {
    movies: [],
    movieA: {
      titulo: "Titanic",
      year: 1997,
      duracion: 180,
      genero: "Drama",
      image: titanicImage,
      sinopsis:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist "
    },
    movieB: {
      titulo: "Matrix",
      year: 1999,
      duracion: 190,
      genero: "Sci-Fi",
      image: matrixImage,
      sinopsis:
        " A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.  "
    }
  };

  componentDidMount() {
    // Peticion de Axios
    axios
      .get("http://localhost:8000/peliculas")
      .then(response => {
        console.log(response);
        this.setState({ movies: response.data.res });
        console.log(this.state);
      })
      .catch(err => console.log("Error en el get"));
  }

  renderMovies() {
    const moviesList = this.state.movies.map((item, i) => {
      return (
        <MovieComponent>
          key={i}
          title= {"titulo"}
          image={item.image}
          year={item.year}
          duracion={item.duracion}
          genero={item.genero}
          sinopsis={item.sinopsis}
        </MovieComponent>
      );
    });
    return moviesList
  }

  render() {
    return (
      <div
        className="mr-auto ml-auto col-10 row"
        style={{ border: "1px dashed gray" }}
      >
        {this.renderMovies()}  
{/*
        <MovieComponent
          title={this.state.movieA.titulo}
          image={
            this.state.movieA.image
              ? this.state.movieA.image
              : this.state.placeholder
          }
          year={this.state.movieA.year}
          duracion={this.state.movieA.duracion}
          genero={this.state.movieA.genero}
          sinopsis={this.state.movieA.sinopsis}
        ></MovieComponent>
        <MovieComponent
          title={this.state.movieB.titulo}
          image={
            this.state.movieB.image
              ? this.state.movieB.image
              : this.state.placeholder
          }
          year={this.state.movieB.year}
          duracion={this.state.movieB.duracion}
          genero={this.state.movieB.genero}
          sinopsis={this.state.movieB.sinopsis}
        ></MovieComponent>
        <MovieComponent></MovieComponent>
        */}
      </div>
    );
  }
}

export default Movies;

// <MovieComponent
//           title={}
//           year={}
//           duracion={}
//           genero={}
//           sinopsis={}
//         ></MovieComponent>
