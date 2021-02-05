import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import './Gallery.css';


class Song extends Component {
   
  render() {
    return (
      <Col className="mb-3 mx-1 text-center d-flex justify-content-center align-items-center song-col" md={2}>
    <img src =  {this.props.song.album.cover_medium} />
      </Col>
    );
  }
}

export default Song;

