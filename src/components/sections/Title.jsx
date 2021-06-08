import examplePic from "../.././images/iphone6.png";

import "./Title.css"

function TitleSection() {
  return (
    <div class="row">
      <div class="col-lg-6">
        <h3 class="title-heading">Meet new and interesting dogs nearby.</h3>
        <div class="download-button">
          <button type="button" class="btn btn-dark download-button btn-lg">
            <i class="fab fa-apple"></i> Download
          </button>
          <button type="button" class="btn btn-light download-button btn-lg">
            <i class="fab fa-google-play"></i> Download
          </button>
        </div>
      </div>
      <div class="col-lg-6">
        <img class="app-example" src={examplePic} alt="iphone-mockup" />
      </div>
    </div>
  );
}

export default TitleSection;