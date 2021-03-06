'use strict';

$(function(){
	var video = document.getElementsByTagName('video')[0];
	var startX = 0;

	$(document).on('touchstart mousedown','.video-loop',function(e){
		startX = e.clientX;
	});
	$(document).on('mousemove','.video-loop',function(e){
		if(startX !== 0){
			var currentX = e.clientX;
			var ratio = 0;
			if (startX > currentX){
				ratio = ((startX / currentX) / 8);
				video.currentTime = video.currentTime + ratio;
			}else if(startX < currentX){
				ratio = ((currentX / startX) / 8);
				var t = video.currentTime - ratio;
				if(t < 0){
					t = video.duration - t;
				}
				video.currentTime = t;
			}
		}
	});
	$(document).on('touchend mouseup mouseleave','.video-loop',function(){
		startX = 0;
	});

	video.addEventListener('touchstart',function(){
		console.log('touched me');
	},false);
});