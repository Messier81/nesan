import React, { Component } from "react";
import "./RIV.css";

export default class RIV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    //this.renderMyData();
  }

  sayHi = (subR) => {
    alert(subR);
  };

  renderMyData = (test, lim) => {
    var url = new URL(`https://www.reddit.com/r/${test}/.json`),
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

  render() {
    return (
      <div className="wrapper">
        <button onClick={() => this.renderMyData("art", 1)}>SEARCH</button>
        <input type="text" name="name" />
        <div className="grid-container">
          {this.state.data ? (
            this.state.data.map((value, index) => (
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
