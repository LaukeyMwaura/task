import React from "react";
import { FileDrop } from "react-file-drop";
import { useDropzone } from "react-dropzone";
import "./posts.css";
class VideoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpload: true,
      videoUrl: "",
    };
  }
  render_editor = (e) => {
      const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();

          reader.onabort = () => console.log("file reading was aborted");
          reader.onerror = () => console.log("file reading has failed");
          reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result;
            console.log(binaryStr);
          };
          reader.readAsArrayBuffer(file);
        });
      }, []);
    // return (
    //   // Props:
    //   // videoUrl --> URL of uploaded video
    //   // saveVideo(<metadata of edited video>) --> gives the cut times and if video is muted or not
    //  console.log(e);
    // );
  };
  componentDidMount = () => {
    document.addEventListener("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  };

  render_uploader = () => {
    return (
      <div className={"wrapper"}>
        <input
          onChange={(e) => this.upload_file(e.target.files)}
          type="file"
          className="hidden"
          id="up_file"
        />
        <FileDrop
          onDrop={(e) => this.upload_file(e)}
          onTargetClick={() => document.getElementById("up_file").click()}
        >
          Click or drop your video here to edit!
        </FileDrop>
      </div>
    );
  };

  upload_file = (fileInput) => {
    let fileUrl = window.URL.createObjectURL(fileInput[0]);
    let filename = fileInput.name;
    this.setState({
      isUpload: false,
      videoUrl: fileUrl,
    });
  };

  render = () => {
    return (
      <div>
        {this.state.isUpload ? this.render_uploader() : this.render_editor()}
      
      </div>
    );
  };
}

export default VideoEditor;
