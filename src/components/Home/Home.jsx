import React, { Component } from "react";
import Gallery from "./Gallery";
import './Gallery.css';
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";


const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
        fetchsongs: (job) =>
        dispatch(async (dispatch, getState) => {
          let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
          const payload = {
              firstrow: [],
              secondrow:[],
              thirdrow: [],
          }
            Promise.all([
              fetch(url + "eminem", {
                "method": "GET",
                "headers": {
                  "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
              })
                .then((response) => response.json())
                .then((responseObject) => {
                    payload.firstrow= {...responseObject.data}
                }),
              fetch(url + "muse", {
                "method": "GET",
                "headers": {
                  "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
              })
                .then((response) => response.json())
                .then((responseObject) =>
                payload.secondrow= {...responseObject.data}
                ),
              fetch(url + "halsey", {
                "method": "GET",
                "headers": {
                  "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
              })
                .then((response) => response.json())
                .then((responseObject) =>
                  payload.thirdrow= {...responseObject.data}
                ),
            ])
              .then(() => dispatch({
                type: "STORE_HOMEPAGE_RESULT", 
                payload: payload,
            }))
            .catch((err) => {
              console.log("An error has occurred:", err);
            });
          }) 
});

class Home extends Component {
  state = {
    eminemSongs: [],
    museSongs: [],
    arianaGrandeSongs: [],
    loading: true,
    error: false,
  };

 
  componentDidMount() {
    this.props.fetchsongs();
  }

  

  render() {
    return (
      <div>
        <div className="container-fluid mb-5">

          {this.state.error && (
            <Alert variant="danger" className="text-center">
              An error has occurred, please try again later
            </Alert>
          )}


          {!this.state.error &&

            <>
              <div className="container mb-4 text-center d-flex mx-auto justify-content-center">
                <nav aria-label="breadcrumb ml-5">
                  <ol className="breadcrumb ml-5">
                    <li className="breadcrumb-item ml-3">
                      <a href="#">Trending</a>
                      <div className="underbar"></div>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Podcast</a>
                      <div className="underbar"></div>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Moods and genres</a>
                      <div className="underbar"></div>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">New releases</a>
                      <div className="underbar"></div>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Discover</a>
                      <div className="underbar"></div>
                    </li>
                  </ol>
                </nav>
              </div>
              <Gallery
                title="#THROWBACKTHURSDAY"
                loading={this.state.loading}
                songs={this.props.homepage.firstrow}
                props={this.props}
              />
              <Gallery
                title="#TOP50ITALY"
                loading={this.state.loading}
                songs={this.props.homepage.secondrow}
                props={this.props}
              />
              <Gallery
                title="#TRENDINGNOW"
                loading={this.state.loading}
                songs={this.props.homepage.thirdrow}
                style={{ marginBottom: "100px" }}
                props={this.props}
              />
            </>
          }
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
