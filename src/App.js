import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import MoviesList from "./MoviesList";
import ReactModal from 'react-modal';
// import SAMPLE_DATA from "./sample_data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesList: []
    };
  }
  
  

  async componentDidMount() {
    let api_key = "ba36daf80182ea4b335c909ffb438ade";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;
    let results = await fetch(url);
    let data = await results.json();
    this.setState({
      moviesList: data.results
    });
  }

  render() {
    return (
      <div className="App">
        
        <NavBar />
        <MoviesList movies={this.state.moviesList} />
      </div>
    );
  }
}

export default App;
