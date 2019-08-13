var color;
var colorray = [127, 127, 127]; //default
window.onload = function() {
  color = document.getElementById('color');
}
/*function setRGB(rgb,value){
	colorray[rgb]=value;
	color.style.backgroundColor="rgb("+colorray[0]+","+colorray[1]+","+colorray[2]+")";
}
function drawing(elem){
	if(!elem.checked){
		elem.style.backgroundColor="transparent";
		return;
	}
	elem.style.backgroundColor="rgb("+colorray[0]+","+colorray[1]+","+colorray[2]+")";
}
function reset(){
	var all=document.getElementById('box').getElementsByTagName('input');
	for(i=0;i<all.length;i++){
		all[i].checked=false;
		all[i].style.backgroundColor="transparent";
	}
}

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
