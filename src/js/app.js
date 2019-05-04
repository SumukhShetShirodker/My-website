//write service worker
//Video controls start
var vid,playbtn,seekbar,curtimetxt,durtimetxt,mutebtn,fullscreen;
function initplayer(){
	//Handlers
	vid = document.getElementById('video');
	playbtn = document.getElementById('playbtn');
  seekbar=document.getElementById('seekbar');
	curtimetxt=document.getElementById('curtime');
	durtimetxt = document.getElementById('durtimetxt');
	mutebtn=document.getElementById('mutebtn');
	fullscreen=document.getElementById('screenbtn');
	//Events
	playbtn.addEventListener("click",playPause);
	vid.addEventListener("click",playPause);
	seekbar.addEventListener("change", vidSeek);
	vid.addEventListener("timeupdate", seektimeupdate);
	mutebtn.addEventListener("click", onMute);
	fullscreen.addEventListener("click",fllscreen);
}
window.onload=initplayer;

function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.innerHTML="❚❚";
	} else {
		vid.pause();
		playbtn.innerHTML="►";
	}
}
function onMute(){
	if(vid.muted){
		vid.muted=false;
		mutebtn.innerHTML="🔊";
	}
	else{
		vid.muted=true;
		mutebtn.innerHTML="🔇";
	}
}
function vidSeek() {
	var seekto=vid.duration * (seekbar.value / 100);
	vid.currentTime=seekto;
	var nt=vid.currentTime*(seekbar.value / 100);
	seekbar.value=nt;
}
function seektimeupdate(){
	var nt=vid.currentTime*(100 / vid.duration);
	seekbar.value=nt;
	var curmins = Math.floor(vid.currentTime/60);
	var cursecs = Math.floor(vid.currentTime-curmins*60);
	var durmins = Math.floor(vid.duration/60);
	var dursecs = Math.floor(vid.duration-durmins*60);
        if(cursecs < 10){cursecs= 0 + cursecs;}
        if(dursecs < 10){dursecs= 0 + dursecs;}
        if(curmins < 10){curmins= 0 + curmins;}
        if(durmins < 10){durmins= 0 + durmins;}
    curtimetxt.innerHTML=curmins+":"+cursecs;
    durtimetxt.innerHTML=durmins+":"+dursecs;
}
function fllscreen(){
	if (vid.requestFullScreen){
		vid.requestFullScreen();
	}
	else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	}
	else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}
//video controls end