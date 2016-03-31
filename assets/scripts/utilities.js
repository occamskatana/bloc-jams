var pointsArray = document.getElementsByClassName('point')



var forEach = function(target, callback){

		for(var i = 0; i < target.length; i++){
			callback(target[i])
		}
}

var hello = function(){
	console.log("userschmeight callback")
}