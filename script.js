/* Scroll
===================================================================== */
var scrollButton = document.getElementById('scroll');
window.onscroll = () => {
  if (document.documentElement.scrollTop < 450) {
    scrollButton.style.display = "none";
  } else {
    scrollButton.style.display = "block";
  }
}
scrollButton.addEventListener('click', () => { window.scroll(0, 0) });