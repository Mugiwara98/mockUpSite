import "./Features.css"

function FeaturesSection() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <i class="icon fas fa-check-circle"></i>
          <h3 class="feature-title">Easy to use.</h3>
          <p>So easy to use, even your dog could do it.</p>
        </div>
        <div class="col-lg-4">
          <i class="icon fas fa-bullseye"></i>
          <h3 class="feature-title">Elite Clientele</h3>
          <p>We have all the dogs, the greatest dogs.</p>
        </div>
        <div class="col-lg-4">
          <i class="icon fas fa-heart"></i>
          <h3 class="feature-title">Guaranteed to work.</h3>
          <p>Find the love of your dog's life or your money back.</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;