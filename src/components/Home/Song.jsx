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
          onClick={() =>
            this.state.props.props.history.push('/AlbumPage/' + this.state.props.data.album.id)}
          alt="album picture"
          style={{
              width:"200px"
          }}
        />
        <button className="addComment"  onClick={() =>
            this.state.props.props.history.push('/Comments/' + this.state.props.data.id)}>+</button>
        <p className="text-center songCardTitle">{this.props.data.title}</p>
      </Col>
    );
  }
}

export default Song;

