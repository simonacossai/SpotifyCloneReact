import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import './Gallery.css';

class Song extends Component {
    state={
        props: this.props
    }
  render() {
    return (
      <Col className="mb-3 mx-1 text-center d-flex justify-content-center align-items-center song-col" md={2}>
        <Image
          className="img-fluid songCover"
          src={this.props.data.album.cover_medium}
          alt="album picture"
          style={{
              width:"200px"
          }}
        />
        <p className="text-center songCardTitle">{this.props.data.album.title}</p>
      </Col>
    );
  }
}

export default Song;