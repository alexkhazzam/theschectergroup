class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <style>
            #footer {
                margin-top: 40px;
                height: fit-content;
                padding: 40px 40px 20px 40px;
                background-color: var(--black);
            }
            
            #footer__info {
                display: flex;
                align-items: top;
                justify-content: space-evenly;
                flex-wrap: wrap;
            }
            
            #footer__info__about__company {
                margin-bottom: 25px;
            }
            
            #footer__info__contact__text {
                margin-bottom: 25px;
                text-decoration: none;
            }
            
            #footer__info__about__profession {
                font-family: 'Kotta One', serif;
            }
            
            #footer__info__location__text {
                text-align: center;
            }
            
            #footer__info__address,
            #footer__info__number,
            #footer__info__copyright {
                font-family: 'Kotta One', serif;
            }
            
            #footer__info__location__directions {
                text-align: center;
                font-family: 'Kotta One', serif;
            }
            
            #footer__info__contact,
            #footer__info__about {
                text-align: center;
            }
            
            #footer__logos {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            #footer__base {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            #footer__info__address {
                text-align: center;
            }
            
            #footer__base p {
                margin-top: 100px;
                font-size: 0.7rem;
                text-align: center;
            }
          </style>
            <header>
                <footer id="footer">
                    <div id="footer__info">
                    <div id="footer__info__about">
                        <p id="footer__info__about__company">
                            ROSS SCHECTER | THE SCHECTER GROUP
                        </p>
                        <p id="footer__info__about__profession">
                            Licensed New York Real Estate Broker
                        </p>
                        <div id="footer__logos">
                            <img src="../logos/eho-logo.png" width="80" height="60">
                            <img src="../logos/mls-logo.png" width="200" height="80">
                        </div>
                    </div>
                    <div id="footer__info__location">
                        <p id="footer__info__location__text">LOCATION</p>
                        <iframe width="350" height="100" id="gmap_canvas" src="https://maps.google.com/maps?q=500%20Northern%20Boulevard,%20Great%20Neck&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <p id="footer__info__location__directions">Get Directions</p>
                    </div>
                    <div id="footer__info__contact">
                            <p id="footer__info__contact__text">CONTACT US</p>
                            <a href="tel:516-477-9271" id="footer__info__number">(516)-477-9271</a>
                            <p id="footer__info__address">500 Northern Boulevard<br>Great Neck, NY, 11024<p>
                    </div> 
                    </div>
                    <div id="footer__base">
                        <p id="footer__copyright">&copy; Copyright 2022 The Schecter Group, LLC<p>
                        <p id="footer__name">Ross Schecter | The Schecter Group</p>
                    </div>
                </footer>
            </header>
      `;
  }
}

customElements.define('custom-footer', Footer);
