var animatePoints = function(){
	var points = document.getElementsByClassName('point');

	for(var i = 0; i < 3; i++){
		var revealFirstPoint = function(){
			var point = points[i];
			point.style.opacity = 1;
			point.style.transform = "scaleX(1) translateY(0)";
			point.style.msTransorm = "scaleX(1) translateY(0)";
			point.style.WebkitTransform = "scaleX(1) translateY(0)"
		};

		var revealSecondPoint = function(){
			var point = points[i];
			point.style.opacity = 1;
			point.style.transform = "scaleX(1) translateY(0)";
			point.style.msTransorm = "scaleX(1) translateY(0)";
			point.style.WebkitTransform = "scaleX(1) translateY(0)"
		};

		var revealThirdPoint = function(){
			var point = points[i];
			point.style.opacity = 1;
			point.style.transform = "scaleX(1) translateY(0)";
			point.style.msTransorm = "scaleX(1) translateY(0)";
			point.style.WebkitTransform = "scaleX(1) translateY(0)"
		};

		revealFirstPoint();
		revealSecondPoint();
		revealThirdPoint();
	};
}

