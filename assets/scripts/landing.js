var animatePoints = function(){
	var points = document.getElementsByClassName('point');
	var revealFirstPoint = function(){
		var point = points[0];
		point.style.opacity = 1;
		point.style.transform = "scaleX(1) translateY(0)";
		point.style.msTransorm = "scaleX(1) translateY(0)";
		point.style.WebkitTransform = "scaleX(1) translateY(0)"
	};

	var revealSecondPoint = function(){
		var point = points[1];
		point.style.opacity = 1;
		point.style.transform = "scaleX(1) translateY(0)";
		point.style.msTransorm = "scaleX(1) translateY(0)";
		point.style.WebkitTransform = "scaleX(1) translateY(0)"
	};

	var revealThirdPoint = function(){
		var point = points[2];
		point.style.opacity = 1;
		point.style.transform = "scaleX(1) translateY(0)";
		point.style.msTransorm = "scaleX(1) translateY(0)";
		point.style.WebkitTransform = "scaleX(1) translateY(0)"
	};

	revealFirstPoint();
	revealSecondPoint();
	revealThirdPoint();
};

animatePoints();