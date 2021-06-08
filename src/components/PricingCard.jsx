import "./PricingCard.css"

function PricingCard(props) {
    return (
        <div class="pricing-card col-lg-4 col-md-6">
        <div class="card h-100">
          <div class="card-header">
            <h3>{props.memberlvl}</h3>
          </div>
          <div class="card-body">
            <h2>{props.price}</h2>
            <p>{props.ftOne}</p>
            <p>{props.ftTwo}</p>
            <p>{props.ftThree}</p>
            <p>{props.ftFour}</p>
            <button type="button" class="pricing-button btn btn-dark">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    )
}

export default PricingCard;