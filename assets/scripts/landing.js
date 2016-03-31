var pointsArray = document.getElementsByClassName('point');


var animatePoints = function(points){
	for(var i = 0; i < 3; i++){	
		var point = points[i];
		point.style.opacity = 1;
		point.style.transform = "scaleX(1) translateY(0)";
		point.style.msTransorm = "scaleX(1) translateY(0)";
		point.style.WebkitTransform = "scaleX(1) translateY(0)"		
	};
}

window.onload = function(){

	//auto-load on tall ass screens
		if(window.innerHeight > 950){
			animatePoints(pointsArray);
		}

	var sellingPoints = document.getElementsByClassName('selling-points')[0];
	var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

	window.addEventListener('scroll', function(event){
		if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
			animatePoints(pointsArray);
		}

	});
}