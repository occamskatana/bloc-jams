var collectionItemTemplate =
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/01.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="file:///home/john/Desktop/code/bloc-jams/album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="file:///home/john/Desktop/code/bloc-jams/album.html"> Pablo Picasso </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;

window.onload = function() {
	var collectionContainer = document.getElementsByClassName('album-covers')[0];
	console.log(collectionContainer)
	collectionContainer.innerHTML = '';
	for(var i = 0; i < 12; i++){
		collectionContainer.innerHTML += collectionItemTemplate;
	};
} 