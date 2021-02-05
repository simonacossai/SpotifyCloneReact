import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import './Gallery.css';

import Song from "./Song";

const Gallery = ({ title, songs, loading, props }) => {
  return (
    <div id="song mb-5 ">
      <h3 className="text-white text-left" style={{marginLeft:"270px"}}>{title}</h3>
      <Row className="row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters justify-content-end song-row" >
        {loading
          ?
              <Col className="d-flex align-items-center justify-content-center text-center mx-auto">
                <Spinner animation="border" variant="light" />
              </Col>
          : songs.map((song) => <Song data={song} key={song.id} props={props}/>)}
      </Row>
    </div>
  );
};
export default Gallery;