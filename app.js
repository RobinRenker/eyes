function mousemove(x,y){
    x = -(((window.innerWidth/2)-x)/10);
    y = -(((window.innerHeight/2)-y)/10);
    document.getElementsByClassName('innereye')[1].style.transform = "translateX("+-x+"px) translateY("+y+"px)";
    document.getElementsByClassName('innereye')[0].style.transform = "translateX("+x+"px) translateY("+y+"px)";
}
document.getElementsByTagName('body')[0].addEventListener('mousemove', function(e){
	mousemove(e.clientX,e.clientY);
});
document.getElementsByTagName('body')[0].addEventListener('touchmove', function(e){
	mousemove(e.touches[0].clientX,e.touches[0].clientY);
});