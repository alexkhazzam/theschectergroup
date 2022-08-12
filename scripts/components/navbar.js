class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
            #homepage__nav {
                /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
                justify-content: space-between;
                align-items: center;
                transition: 0.5s;
                padding: 40px;
                position: fixed;
                display: flex;
                width: 100%;
                top: 0;
            }
            
            #homepage__about {
                display: flex;
                align-items: center;
            }
            
            #logo {
                margin-right: 15px;
                display: none;
            }
            
            #contact-link {
                margin-right: 0px !important;
            }
            
            #homepage__nav-links__hamburger-wrapper {
                display: none;
            }
            
            #homepage__nav-links {
                display: flex;
            }
            
            .homepage__nav-links__link-wrapper {
                list-style-type: none;
                margin: 0px 20px;
            }
            
            .homepage__nav-links__link {
                font-size: 0.8rem;
            }
            
            /***************HOMEPAGE CONTENT****************/
            
            #homepage__content__wrapper {
                border: 1px solid white;
            }
            
            #homepage__content {
                text-align: center;
            }
            
            #homepage__content__learn-more-btn {
                border: 1px solid var(--white);
                background-color: transparent;
                padding: 10px 30px;
                font-size: 0.8rem;
                transition: 0.3s;
                cursor: pointer;
            }
            
            #homepage__content__company-name {
                font-size: 3rem;
                margin-bottom: 20px;
            }
            
            #homepage__content__profession {
                font-family: 'Kotta One', serif;
                margin-bottom: 20px;
                text-align: center;
                line-height: 20px;
            }
            
            #homepage__content__learn-more-btn:hover {
                background-color: var(--white);
                color: var(--black);
            }
            
            @media (max-width: 900px) {
                .homepage__nav-links__link-wrapper {
                    display: none;
                }
            
                #homepage__nav-links__hamburger-wrapper {
                    color: white !important;
                    display: block;
                } 
            }
        </style>
        <header>
            <nav id="homepage__nav">
                <div id="homepage__about">
                    <a href="">
                        <img src="./logos/company-logo.png" width="150" height="85" id="logo">
                    </a>
                    <a id="homepage__nav__name">ROSS SCHECTER</a>
                </div>
                <div id="homepage__nav-links">
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" href="./pages/buy.html">BUY</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" href="./pages/sell.html">SELL</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" href="./pages/listings.html">LISTINGS</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" href="./pages/rentals.html">RENTALS</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper" id="contact-link">
                        <a class="homepage__nav-links__link" href="./pages/contact.html">CONTACT</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper" id="homepage__nav-links__hamburger-wrapper">
                        <img src="./icons/hamburger-open-white.png" id="homepage__nav-links__hamburger">
                    </li>
                </div>
            </nav>
        </header>
    `;
  }
}

customElements.define('custom-navbar', Navbar);
