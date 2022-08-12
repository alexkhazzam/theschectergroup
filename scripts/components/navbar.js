class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>            
            #homepage__nav {
                z-index: 1;
            }
        
            #homepage__nav {
                justify-content: space-between;
                align-items: center;
                transition: 0.5s;
                padding: 40px;
                position: fixed;
                display: flex;
                width: 100%;
                top: 0;
                left: 0;
            }

            #homepage__nav__name,
            .homepage__nav-links__link:hover,
            .homepage__nav-links__link
            {
                text-decoration: none;
                cursor: pointer;
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
            
            #homepage__nav-links__hamburger {
                cursor: pointer;
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
            
            #homepage__nav-links__secret-hamburger-wrapper {
                display: none;
                cursor: pointer;
            }
            
            @media (min-width: 900px) {
                #homepage__nav-links {
                    display: flex !important;
                    flex-direction: row !important;
                }
            }
            
            @media (max-width: 900px) {
                #homepage__nav-links {
                    display: none;
                    flex-direction: column;
                    position: absolute;
                    padding: 20px;
                    background-color: var(--white);
                    right: 0;
                    animation: slideLeft 0.5s;
                    top: 0;
                    width: 60%;
                    height: 100vh;
                }
            
                @keyframes slideLeft {
                    from {
                        left: 100%;
                    }
            
                    to {
                        left: 40%;
                    }
                }
            
                
                .homepage__nav-links__link-wrapper {
                    margin: 30px 0px;
                }
            
                #homepage__nav-links__secret-hamburger-wrapper {
                    display: block;
                    margin-top: 0px;
                    margin-bottom: 50px;
                }
            
                .homepage__nav-links__link {
                    color: var(--black) !important; 
                }
            
                #homepage__nav-links__hamburger-wrapper {
                    margin: 0px;
                    display: block;
                } 
            }
        </style>
        <header>
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
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" id="about-link" href="./about.html">ABOUT</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" id="buy-link" href="./buy.html">BUY</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" id="sell-link" href="./sell.html">SELL</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" id="listings-link" href="./listings.html">LISTINGS</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" id="rentals-link" href="./rentals.html">RENTALS</a>
                    </li>
                    <li class="homepage__nav-links__link-wrapper">
                        <a class="homepage__nav-links__link" id="contact-link" href="./contact.html">CONTACT</a>
                    </li>
                </div>
            </div>
        </nav>
        </header>
    `;
  }
}

customElements.define('custom-navbar', Navbar);
