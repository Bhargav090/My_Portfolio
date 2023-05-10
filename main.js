var moonimg = document.getElementsByClassName('moonimg')[0];

window.addEventListener('scroll', function() {
  var value = window.scrollY;
  if (value > -20 && value < 141) {
    moonimg.style.marginTop = value * 2.5 + 'px';
  }
  console.log(value);
});
