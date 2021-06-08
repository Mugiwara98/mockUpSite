import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
        tindawg
      </a>
      <button
        class="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#cta">
              Download
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;