import React, { Component } from "react";
import Movie from "./Movie";
import { Row } from 'reactstrap';
import ReactModal from 'react-modal';

export default class MoviesList extends Component {
  render() {
    if (this.props.movies.length > 0) {
      return (
        <Row className="content">
          {this.props.movies.map(movie => (
            <Movie {...movie} />
          ))}
        </Row>
      );
    } else {
      return <h1 className="m-3">No Movies</h1>;
    }
  }
}

