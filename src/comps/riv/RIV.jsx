import React, { Component } from "react";
import "./RIV.css";
import { Link } from "react-router-dom";

export default class RIV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      subR: "",
      nextPic: 0,
    };
  }

  // componentDidMount() {
  //   this.renderMyData();
  // }

  renderMyData = (lim) => {
    var url = new URL(`https://www.reddit.com/r/${this.state.subR}/.json`),
      params = { limit: lim };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let tmpArray = [];
        let rJ = responseJson.data.children;
        for (var i = 0; i < rJ.length; i++) {
          tmpArray.push(rJ[i].data.url);
        }

        this.setState({ data: tmpArray });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  //Change index of array containing pictures so the next or the previous image is accessed, via adding/subtracting 1
  handlePicChange = (addV) => {
    this.setState({
      nextPic: this.state.nextPic + addV,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="topNav">
          <div>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
          <div>
            <div>
              <button onClick={() => this.renderMyData(10)}>SEARCH</button>
            </div>
            <div>
              <input
                type="text"
                name="subR"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>

        {this.state.data ? (
          <div class="container">
            <img
              className="img-fluid"
              src={this.state.data[this.state.nextPic]}
              alt="PIC ALT"
            />
          </div>
        ) : (
          <div>LOAD</div>
        )}

        <button onClick={() => this.handlePicChange(-1)}>PREVIOUS</button>

        <button onClick={() => this.handlePicChange(1)}>NEXT</button>
      </div>
    );
  }
}
