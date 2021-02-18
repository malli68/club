import React, { Component } from "react";
import Footer from "../commons/Footer";
import Header from "../commons/Header";

export class Error extends Component {
  render() {
    return (
      <div>
        <h1>
          {`Sorry.... 
                    Try-again After Some-time`}
        </h1>
        <Footer />
      </div>
    );
  }
}

export default Error;
