
import React, { Component } from "react";
import './App.css';
import Addmodal from './components/Addmodel';
import { Card, } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import MovieList from "./components/MovieList";
import Rating from "./components/rating";
import { Route, Link } from 'react-router-dom';
import Batwomen from "./components/batwomen";
import WandaVision from "./components/wanda";
import Gooddoctor from "./components/gooddoctor";
import QueenGambit from "./components/QueensGambit";
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  state = {
    movies: [
      {
        id: uuidv4(),
        name: "WandaVision",
        image: "https://thedirect.s3.amazonaws.com/media/article_full/wvdis.jpg",
        rating: 8.5
      },
      {
        id: uuidv4(),
        name: "Batwoman",
        image: "https://images.moviepostershop.com/batwoman-movie-poster-1000779366.jpg ",
        rating: 7.5

      },
      {
        id: uuidv4(),
        name: "Good Doctor ",
        image: "https://fanart.tv/api/download.php?type=download&image=95303&section=3",
        rating: 8.5,

      },
      {
        id: uuidv4(),
        name: "QUEENS GAMBIT",
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        description: "",
        rating: 8.5

      },
    ],
    searchTerm: "",
    rating: 1,
    inputData: '',
  }


  add = (newMovie) => {
    this.setState({
      movies: this.state.movies.concat(newMovie),
    });
  };

  getRating = (ValueRating) => {
    this.setState({
      rating: ValueRating,
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter><Route path="/wanda" exact component={WandaVision} />
          <Route path="/batwomen" exact component={Batwomen} />
          <Route path="/gooddoctor" exact component={Gooddoctor} />
          <Route path="/QueensGambit" exact component={QueenGambit} />
        </BrowserRouter>

        <h1>Movie app</h1>


        <input type="text" onChange={(e) => this.setState({ inputData: e.target.value })} />
        <button onClick={() => { this.setState({ movies: this.state.movies.filter(item => item.name == this.state.inputData) }) }}>Search</button>
        <Rating rating={(R) => this.getRating(R)} />
        <Addmodal addMovie={(newMovie) => this.add(newMovie)} />
        <MovieList
          search={this.state.searchTerm}
          movies={this.state.movies} />
        <ul className="movienav">
          <li><Link className="movielink" to="/wanda">
            view WandaVision</Link></li>
          <li><Link className="movielink" to="/batwomen">view Batwomen</Link></li>
          <li><Link className="movielink" to="/gooddoctor">view Good Doctor </Link></li>
          <li><Link className="movielink" to="/QueensGambit">view Queens Gambit</Link></li>
        </ul>

      </div>
    );
  };
};

export default App;
