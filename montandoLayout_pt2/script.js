function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const floatingBtn = document.getElementsByClassName('floating-button')[0]
floatingBtn.addEventListener('click', backToTop)