import dogImg from "../../images/dog-img.jpg";
import ladyImg from "../../images/lady-img.jpg";

import bizinsider from "../../images/bizinsider.png";
import mashable from "../../images/mashable.png";
import techcrunch from "../../images/techCrunch.png";
import tnw from "../../images/tnw.png";

import "./Testimonials.css"

function Testamonials() {
  return (
    <>
      <div
        id="testimonial-carousel"
        class="carousel slide"
        data-ride="false"
        data-pause="hover"
        data-touch="true"
        data-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active container-fluid">
            <h2 class="section-heading">
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <img class="testimonial-image" src={dogImg} alt="dog-profile" />
            <em>Pebbles, New York</em>
          </div>
          
          <div class="carousel-item container-fluid">
            <h2 class="section-heading">
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img class="testimonial-image" src={ladyImg} alt="lady-profile" />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#testimonial-carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#testimonial-carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>

      <img class="press-logo" src={techcrunch} alt="tc-logo" />
      <img class="press-logo" src={tnw} alt="tnw-logo" />
      <img class="press-logo" src={bizinsider} alt="biz-insider-logo" />
      <img class="press-logo" src={mashable} alt="mashable-logo" />
    </>
  );
}

export default Testamonials;
