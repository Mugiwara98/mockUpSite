function Pricing() {
  return (
    <div class="container-fluid">
      <h2 class="section-heading">A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div class="row">
        <div class="pricing-card col-lg-4 col-md-6">
          <div class="card h-100">
            <div class="card-header">
              <h3>Chihuahua</h3>
            </div>
            <div class="card-body">
              <h2>Free</h2>
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <p>-</p>
              <button type="button" class="pricing-button btn btn-dark">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="pricing-card col-lg-4 col-md-6">
          <div class="card h-100">
            <div class="card-header">
              <h3>Labrador</h3>
            </div>
            <div class="card-body">
              <h2>$49 / mo</h2>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <p>-</p>
              <button type="button" class="pricing-button btn btn-dark">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="pricing-card col-lg-4 col-md-12">
          <div class="card h-100">
            <div class="card-header">
              <h3>Mastiff</h3>
            </div>
            <div class="card-body">
              <h2>$99 / mo</h2>
              <p>Pirority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button type="button" class="pricing-button btn btn-dark">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;