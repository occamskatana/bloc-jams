var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumCarter = {
    title: 'Carter',
    artist: 'John Carter',
    label: 'Carter Inc',
    year: '2016',
    albumArtUrl: 'https://cdn-photos.bloc.io/medium/2310666/11209715_10153244685594547_2004900678986567362_n.jpg?1444695805',
    songs: [
        {title: 'I use rawr way too much because it only requires one hand', duration: '1:00'},
        {title: 'Heyaooooooo', duration: '1:00'},
        {title: 'I also use sex too much as variable names', duration: '1:00'}
    ]
 };

 var createSongRow = function(songNumber, songName, songLength){
    var template = 
        '<tr class="album-view-song-item">'
        +'<td class="song-item-number">' + songNumber + '</td>'
        +'<td class="song-item-title">' + songName + '</td>'
        +'<td class="song-item-duration">' + songLength + '</td>'
    ;
    return template
 }

 var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for(var i = 0; i < album.songs.length; i++){
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }

     
 };

var albumImage = document.getElementsByClassName('album-cover-art')[0]


 window.onload = function() {
    setCurrentAlbum(albumMarconi);
    var listArray = [albumMarconi, albumCarter, albumPicasso];
    var index = 0;
    albumImage.addEventListener("click", function(event){
        setCurrentAlbum((listArray[index]));
        index ++;
        if (index == listArray.length){
            index = 0;
        }
    })
 }


 var toggleAlbum = function(){
    
 }




