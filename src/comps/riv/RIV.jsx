import React, { Component } from "react";
import "./RIV.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default class RIV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    this.renderMyData();
  }

  renderMyData() {
    fetch("https://www.reddit.com/r/art/.json?limit=100")
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
  }

  render() {
    return (
      <div className="wrapper">
        <div className="grid-container">
          {this.state.data ? (
            this.state.data.slice(0, 20).map((value, index) => (
              <div className="item">
                <img src={value} alt={value} key={index} />
              </div>
            ))
          ) : (
            <div>LOAD</div>
          )}
        </div>
      </div>
    );
  }
}
