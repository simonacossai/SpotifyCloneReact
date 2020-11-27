import React, { Component } from "react";
import Gallery from "./Gallery";
import './Gallery.css';

import { Alert } from "react-bootstrap";

class Home extends Component {
  state = {
    eminemSongs: [],
    museSongs: [],
   arianaGrandeSongs: [],
    loading: true,
    error: false,
  };

  url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

  fetchsongs = () => {
    Promise.all([
      fetch(this.url + "eminem",{
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
      })
        .then((response) => response.json())
        .then((responseObject) => {
          this.setState({ eminemSongs: responseObject.data }, () =>
            console.log(this.state.eminemSongs)
          );
        }),
      fetch(this.url + "muse",{
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
      })
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ museSongs: responseObject.data })
         
        ),
      fetch(this.url + "halsey",{
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
      })
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({arianaGrandeSongs: responseObject.data })
        ),
    ])
      .then(() => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  };

  componentDidMount() {
    this.fetchsongs();
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
                  songs={this.state.museSongs.slice(0, 5)}
                  props={this.props} 
                />
                <Gallery
                  title="#TOP50ITALY"
                  loading={this.state.loading}
                  songs={this.state.arianaGrandeSongs.slice(0, 5)}
                  props={this.props} 
                />
                <Gallery
                  title="#TRENDINGNOW"
                  loading={this.state.loading}
                  songs={this.state.eminemSongs.slice(0, 5)}
                  style={{marginBottom: "100px"}}
                  props={this.props} 
                />
              </>
            }
        </div>
      </div>
    );
  }
}
export default Home;