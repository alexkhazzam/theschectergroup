const homepage = document.getElementById('homepage');
const navLinksWrapper = document.getElementById('homepage__nav-links');
const html = document.querySelector('html');
const hamburger = document.getElementById('homepage__nav-links__hamburger');
const overlay = document.getElementById('overlay');

document
  .getElementById('homepage__nav-links__secret-hamburger-wrapper')
  .addEventListener('click', () => {
    navLinksWrapper.style.animation = 'slideRight 1s';
    navLinksWrapper.style.display = 'none';
  });

const setHamburger = fileLevel => {
  hamburger.addEventListener('click', () => {
    navLinksWrapper.style.animation = 'slideLeft 0.5s';
    navLinksWrapper.style.display = 'block';
    overlay.style.display = 'block';

    window.addEventListener('click', e => {
      if (e.target.id !== navLinksWrapper.id && e.target.id !== hamburger.id) {
        navLinksWrapper.style.display = 'none';
        overlay.style.display = 'none';
      }
    });
  });
};

const setOnLoad = fileLevel => {
  window.onscroll = () => {
    const nav = document.getElementById('homepage__nav');
    const name = document.getElementById('homepage__nav__name');
    const logo = document.getElementById('logo');
    const navLinks = document.querySelectorAll('.homepage__nav-links__link');

    -1 * homepage.getBoundingClientRect().top > homepage.clientHeight - 125
      ? (nav.style.boxShadow =
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px')
      : (nav.style.boxShadow = '');

    if (homepage.getBoundingClientRect().top < 0) {
      navLinks.forEach(navLink => (navLink.style.color = 'black'));
      hamburger.src.includes('open')
        ? (hamburger.src = `${fileLevel}icons/hamburger-open-black.png`)
        : (hamburger.src = `${fileLevel}icons/hamburger-close-black.png`);
      nav.style.backgroundColor = '#fff';
      name.style.display = 'none';
      logo.style.display = 'block';
      nav.style.padding = '20px';
    } else {
      navLinks.forEach(navLink => (navLink.style.color = '#fff'));
      hamburger.src.includes('open')
        ? (hamburger.src = `${fileLevel}icons/hamburger-open-white.png`)
        : (hamburger.src = `${fileLevel}icons/hamburger-close-white.png`);
      nav.style.backgroundColor = 'transparent';
      logo.style.display = 'none';
      nav.style.padding = '40px';
      name.style.display = 'block';
    }
  };
};
