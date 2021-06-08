import Navbar from "./components/Navbar";
import CallToAction from "./components/sections/CallToAction";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Title from "./components/sections/Title";

function App() {
  return (
    <>
      <section id="title">
        <div class="container-fluid">
          <Navbar />
          <Title />
        </div>
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="pricing">
        <Pricing />
      </section>
      <section id="cta">
        <CallToAction />
      </section>

      <footer id="footer">
        <div class="container-fluid">
          <i class="social-media-icon fab fa-twitter"></i>
          <i class="social-media-icon fab fa-facebook-f"></i>
          <i class="social-media-icon fab fa-instagram"></i>
          <i class="social-media-icon fas fa-envelope"></i>

          <p>© Copyright 2018 TinDog</p>
        </div>
      </footer>
    </>
  );
}

export default App;
