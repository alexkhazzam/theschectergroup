class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            <div id="overlay"></div>
            <nav id="homepage__nav">
                <div id="homepage__about">
                    <a href="../index.html">
                        <img src="../logos/company-logo.png" width="150" height="85" id="logo">
                    </a>
                    <a id="homepage__nav__name" href="../index.html">ROSS SCHECTER</a>
                </div>
                <div id="homepage__nav-links__wrapper">
                    <li class="homepage__nav-links__link-wrapper" id="homepage__nav-links__hamburger-wrapper">
                        <img src="../icons/hamburger-open-white.png" id="homepage__nav-links__hamburger">
                    </li>
                    <div id="homepage__nav-links">
                        <li class="homepage__nav-links__link-wrapper" id="homepage__nav-links__secret-hamburger-wrapper">
                            <img src="../icons/hamburger-close-black.png" id="homepage__nav-links__secret-hamburger">
                        </li>
                        <li class="homepage__nav-links__link-wrapper" id="home-link-wrapper">
                            <a class="homepage__nav-links__link" id="home-link" href="./index.html">HOME</a>
                        </li>
                        <hr>
                        <li class="homepage__nav-links__link-wrapper">
                            <a class="homepage__nav-links__link" id="about-link" href="./about.html">ABOUT</a>
                        </li>
                        <hr>
                        <li class="homepage__nav-links__link-wrapper">
                            <a class="homepage__nav-links__link" id="buy-link" href="./buy.html">BUY</a>
                        </li>
                        <hr>
                        <li class="homepage__nav-links__link-wrapper">
                            <a class="homepage__nav-links__link" id="sell-link" href="./sell.html">SELL</a>
                        </li>
                        <hr>
                        <li class="homepage__nav-links__link-wrapper">
                            <a class="homepage__nav-links__link" id="listings-link" href="./listings.html">LISTINGS</a>
                        </li>
                        <hr>
                        <li class="homepage__nav-links__link-wrapper">
                            <a class="homepage__nav-links__link" id="rentals-link" href="./rentals.html">RENTALS</a>
                        </li>
                        <hr>
                        <li class="homepage__nav-links__link-wrapper" id="contact-link-wrapper">
                            <a class="homepage__nav-links__link" id="contact-link" href="./contact.html">CONTACT</a>
                        </li>
                        <li class="homepage__nav-links__link-wrapper" id="email-link-wrapper">
                            <a class="homepage__nav-links__link" href="./contact.html">
                                <img src="../icons/email.png">
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </header>
    `;
  }
}

customElements.define('custom-navbar', Navbar);
