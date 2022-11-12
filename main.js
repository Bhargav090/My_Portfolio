var x = document.getElementById('move')
        
x = addEventListener('scroll',function(){
    var value = window.scrollY;
    if(value > -20 && value < 290){
        move.style.marginLeft = value * 2.5 + 'px';
    }
   
    console.log(value)
})