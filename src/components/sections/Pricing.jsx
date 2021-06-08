import PricingCard from "../PricingCard";

function Pricing() {
  return (
    <div class="container-fluid">
      <h2 class="section-heading">A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div class="row">
        <PricingCard
          memberlvl={"Chihuahua"}
          price={"Free"}
          ftOne={"5 Matches Per Day"}
          ftTwo={"10 Messages Per Day"}
          ftThree={"Unlimited App Usage"}
          ftFour={"-"}
        />

        <PricingCard
          memberlvl={"Labrador"}
          price={"$49 / mo"}
          ftOne={"Unlimited Matches"}
          ftTwo={"Unlimited Messages"}
          ftThree={"Unlimited App Usage"}
          ftFour={"-"}
        />

        <PricingCard
          memberlvl={"Mastiff"}
          price={"$99 / mo"}
          ftOne={"5 Matches Per Day"}
          ftTwo={"10 Messages Per Day"}
          ftThree={"Unlimited App Usage"}
          ftFour={"Unlimited App Usage"}
        />
      </div>
    </div>
  );
}

export default Pricing;
