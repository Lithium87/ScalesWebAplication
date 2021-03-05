import React, { Component } from "react";
import { Document, Page } from "react-pdf";

class DownloadPDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages,
    });
  };

  render() {
    return (
      <div>
        <Document file="data.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={this.state.pageNumber} />
        </Document>
        <p>
          Page {this.state.pageNumber} of {this.state.numPages}
        </p>
      </div>
    );
  }
}

export default DownloadPDF;
