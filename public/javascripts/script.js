var video = document.getElementById("video-main");
var currentVideo=1;
video.addEventListener("timeupdate", updateProgress, false);
var videoElement = document.getElementById("video-main");
var videoTitle = document.getElementById("main-video-title");
var videoDate = document.getElementById("main-video-date");
var videoArray;



window.onload = function() {
    xmlrequest('GET',"videos",null,updateMainVideo);
    //Control buttons

}

//Control buttons
$(document).ready(function() {
    $(".video-container").mouseover(function() {
       $("#video-controls").show();
    }); 
    $('.video-container').mouseout(function () {
        $('#video-controls').hide();      
  });
});

document.getElementById('outer').addEventListener("click",function(){
    changeMainVideo();
})


function xmlrequest(type, url, content, callback) {
    console.log(url);
    // define the type of request either get,put,delete or post
    var request = new window.XMLHttpRequest({ mozSystem: true });
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            if (callback != undefined) {
                callback(request.responseText);
            }
        }
    };
     request.open(type,url, true);
    request.send(content);
}

function changeMainVideo() {
    var subBlock = event.target;
    var id = event.target.id.substring(event.target.id.length-1,);
    var currentVideo = videoArray[id-1];
    videoElement.src = currentVideo.url; 
    videoTitle.innerHTML = currentVideo.title;
    videoDate.innerHTML = currentVideo.date;
}



//Main Video dynamic update
function updateMainVideo(response) {
    var videoElement = document.getElementById("video-main");
    var videoTitle = document.getElementById("main-video-title");
    var videoDate = document.getElementById("main-video-date");
    var backwardButton = document.getElementById("main-video-backward-button");
    backwardButton.classList.add('visibility-hidden');
    var videoArray = JSON.parse(response);
    videoElement.src = videoArray[0].url;
    videoTitle.innerHTML = videoArray[0].title;
    videoDate.innerHTML = videoArray[0].date;

    for (var i = 0; i <6; i++) {

        document.getElementById('video-item-'+(i+1)).src = videoArray[i].url;
        document.getElementById('video-title-'+(i+1)).innerHTML = videoArray[i].title;
        document.getElementById('video-length-'+(i+1)).innerHTML = videoArray[i].length;
        document.getElementById('video-date-'+(i+1)).innerHTML = videoArray[i].date;
    }
}



//Play and pause function
function togglePlayPause() {
    var playpause = document.getElementById("playpause");
    var controls = document.getElementById("video-controls");

    if (video.paused || video.ended) {
       playpause.title = "pause";
       playpause.classList.remove("fa-play");
       playpause.classList.add("fa-pause");
       controls.classList.add('visibility-hidden');
       video.play();
    }
    else {
       playpause.title = "play";
        playpause.classList.remove("fa-pause");
       playpause.classList.add("fa-play");
       video.pause();
    }
 }

 //Set volume for the volume button
function setVolume() {
    var volume = document.getElementById("volume");
    video.volume = volume.value;
    
 }

//Progress bar function
 function updateProgress() {
    var progress = document.getElementById("progress");
    var value = 0;
    if (video.currentTime > 0) {
       value = Math.floor((100 / video.duration) * video.currentTime);
    }
    progress.style.width = value + "%";
 }

