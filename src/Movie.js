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

export default class Movie extends Component {
  render() {
    return (
      <div>
        <Row className="content">
          <Col xs="6" sm="4">
            <Card>
              <CardImg
                top
                width="100%"
                src={
                  "https://image.tmdb.org/t/p/w500/" + this.props.poster_path
                }
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.release_date}</CardSubtitle>
                <CardText>{this.props.overview}}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
