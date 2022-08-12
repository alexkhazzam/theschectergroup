// Any copying or redustribution of this code is ILLEGAL. Whomever does so will be subject to prosecution

const homepage = document.getElementById('homepage');
const navLinksWrapper = document.getElementById('homepage__nav-links');
const html = document.querySelector('html');

document
  .getElementById('homepage__nav-links__secret-hamburger-wrapper')
  .addEventListener('click', () => {
    navLinksWrapper.style.display = 'none';
  });

const scrollToLeadership = () => {
  document.getElementById('leadership').scrollIntoView({ behavior: 'smooth' });
};

const hamburger = document.getElementById('homepage__nav-links__hamburger');

hamburger.addEventListener('click', () => {
  if (html.clientWidth > 900) {
    console.log(true);
    if (hamburger.src.includes('open')) {
      hamburger.src.includes('white')
        ? (hamburger.src = './icons/hamburger-close-white.png')
        : (hamburger.src = './icons/hamburger-close-black.png');
    } else {
      hamburger.src.includes('black')
        ? (hamburger.src = './icons/hamburger-open-black.png')
        : (hamburger.src = './icons/hamburger-open-white.png');
    }
  }

  navLinksWrapper.style.display = 'block';
});

window.onscroll = () => {
  const nav = document.getElementById('homepage__nav');
  const name = document.getElementById('homepage__nav__name');
  const logo = document.getElementById('logo');
  const navLinks = document.querySelectorAll('.homepage__nav-links__link');

  if (homepage.getBoundingClientRect().top < 0) {
    navLinks.forEach(navLink => (navLink.style.color = 'black'));
    hamburger.src.includes('open')
      ? (hamburger.src = './icons/hamburger-open-black.png')
      : (hamburger.src = './icons/hamburger-close-black.png');
    nav.style.backgroundColor = '#fff';
    name.style.display = 'none';
    logo.style.display = 'block';
    nav.style.padding = '20px';
  } else {
    navLinks.forEach(navLink => (navLink.style.color = '#fff'));
    hamburger.src.includes('open')
      ? (hamburger.src = './icons/hamburger-open-white.png')
      : (hamburger.src = './icons/hamburger-close-white.png');
    nav.style.backgroundColor = 'transparent';
    logo.style.display = 'none';
    nav.style.padding = '40px';
    name.style.display = 'block';
  }
};
