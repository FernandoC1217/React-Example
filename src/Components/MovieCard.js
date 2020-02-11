import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";


class MovieComponent extends Component {
  state = {
    placeHolderImage: "https://dummyimage.com/640x360/fff/aaa"
  };
  render() {
    return (
        <Card
        style={{border: '2px dashed red'}}>
            <CardTitle>{this.props.title}</CardTitle>
          <CardImg
            top
            height='50%'    
            width="100%"
            src={
              this.props.image ? this.props.image : this.state.placeHolderImage
            }
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.sinopsis}</CardText>
            <div className="row">
              <div className="col-5">
                Duration:<span className="badge badge-dark">{this.props.duracion}</span>
              </div>
              <div className="col-3">
                Year:
                <span className="badge badge-warning">{this.props.year}</span>
              </div>
              <div className="col-4">
                Genre:
                <span className="badge badge-pill badge-info">
                  {this.props.genero}
                </span>
              </div>
            </div>
            <Button>See movie</Button>
          </CardBody>
        </Card>
    );
  }
}

export default MovieComponent;
