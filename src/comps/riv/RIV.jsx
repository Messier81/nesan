import React, { Component } from "react";
import "./RIV.css";

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
        this.setState({ data: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="masonry">
        {this.state.data ? (
          this.state.data.data.children.map((value, index) => (
            <div className="masonry-brick">
              <img src={value.data.url} alt={value.data.url} key={index} />
            </div>
          ))
        ) : (
          <div>LOAD</div>
        )}
      </div>
    );
  }
}
