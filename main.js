var moonimg = document.getElementsByClassName('moonimg')[0];

window.addEventListener('scroll', function() {
  var value = window.scrollY;
  
  if (window.innerWidth >= 290 && window.innerWidth <= 400) {
    value = Math.min(90, Math.max(-20, value));
  }
  if (window.innerWidth >= 200 && window.innerWidth <= 289) {
    value = Math.min(130, Math.max(-20, value));
  }
  
  if (value > -20 && value < 141) {
    moonimg.style.marginTop = value * 2.5 + 'px';
  }
  
  console.log(value);
});
