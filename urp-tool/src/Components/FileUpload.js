import React, { Component } from "react";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { uploadedFiles: [] };
  }

  fileInputHandler = (event) => {
    let file = [...event.target.files];
    this.setState({
      [event.target.id]: file,
    });

  };
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01"></span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="uploadedFiles"
            aria-describedby="inputGroupFileAddon01"
            onChange={this.fileInputHandler}
            accept=".jpeg"
          />
          <label className="custom-file-label" htmlFor="uploadedFiles">
            Choose file
          </label>
        </div>
      </div>
    );
  }
}

export default FileUpload;
