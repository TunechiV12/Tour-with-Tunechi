var btn= document.querySelector('.btn');
var menu= decument.querySelector('.menu');
btn.addEventListener('click', function(){
    menu.classList.toggle('active');
})
var navLink= document.querySelector('ul li a');
for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click',function(){
        menu.classList.remove('active');
    });
}