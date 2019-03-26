import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from "reactstrap";
import ReactModal from 'react-modal';
import { CardHeader } from "material-ui";
import YouTube from '@u-wave/react-youtube';




export default class Movie extends Component {
constructor() {
  super(); 
  this.state = {
    isOpen: false,
    
  };
}



showModal() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}



  render() {
    
    

    return (
      <div>
          <Row >
            <Col>
            <Card>
            <button onClick={() => this.showModal()}> 
            <CardImg
                top
                width="100%"
                src={
                  "https://image.tmdb.org/t/p/w500/" + this.props.poster_path
                }
                alt="Card image cap"
              />
              </button>

            <ReactModal isOpen={this.state.isOpen}>
              <h1> DETAIL </h1>
              
                <CardTitle><h2>{this.props.title}</h2></CardTitle>
                <CardSubtitle><h4>Released on: {this.props.release_date.getYear}</h4></CardSubtitle>
                <CardText>Overview: {this.props.overview}</CardText>
                <CardSubtitle><h5>Rating: {this.props.vote_average}</h5></CardSubtitle>
                <button onClick={() => this.showModal()}> back to main screen </button>
            
                <YouTube
                video="SUXWAEX2jlg"
                />
            
            </ReactModal>


              </Card>
              </Col>
              
          </Row>
          </div>
    );
  }
}
