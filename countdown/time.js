window.onload=function(){
	var time = 20*3600-30*60
	var hour = document.getElementById("hour");
	var minute = document.getElementById("minute");
	var seconds = document.getElementById("seconds");
	var footer = document.getElementById("footer");
	var timer = setInterval(function(){
		time--
		var down = time-parseInt(time/3600)*3600;
		seconds.innerHTML=parseInt(time%60);
		minute.innerHTML=parseInt(down/60);
		hour.innerHTML=parseInt(time/3600);
		dou(seconds,seconds.innerHTML);
		dou(minute,minute.innerHTML);
		dou(hour,hour.innerHTML);
		footerWidth();
		if(time==0){
			clearInterval(timer);
			return;
		}
	},1000)
	
	function dou(ele,data){
		ele.innerHTML=parseInt(data)<10?"0"+data:data;
	}
	
	function footerWidth(){
		var _width =1;
		var _timer =setInterval(function(){
			_width++;
			footer.style.width=_width+"%";
			console.log(_width);
			if(_width==100){
				clearInterval(_timer);
			}
		},10)
	}
}
