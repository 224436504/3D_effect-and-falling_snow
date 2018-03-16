
var maxSize=60;
var minsize=15;
var newOne=50;//单位是毫秒
var fontColor="#fff";
var container=$("<div class='snow'></div>").css({"width":"55px","position":"absolute","user-select":"none","white-space":"nowrap"}).
html(/*"<img src='img/dollor.jpg' width='100px'/> "*/ " ❀");
$(function(){
	var width=$(document).width();
	var height=$(document).height();
	//产生雪花 
	var  timer=setInterval(function(){
		var start_position_left=Math.random()*width;
		var start_opacity=0.6+Math.random()*0.4;
		var end_position_top=height;
		var end_position_left=Math.random()*width;
		var fall_speed=2000+Math.random()*3000;
		var snow_size=minsize+Math.random()*maxSize;
/*		if($(".snow").length>1000){
			//clearInterval(timer);
			$(this).remove();
		};*/
		container.clone().appendTo("body").css({
			"top":"-50px",
			"left":start_position_left,
			"opacity":start_opacity,
			"font-size":snow_size,
			"transform:scaleZ":"(0deg)",
			"color":fontColor			
		}).animate({
			"top":end_position_top,
			"left":end_position_left,
			"transform:scaleZ":"(360deg)",
			"opacity":0.3
		},fall_speed,function () {$(this).remove(); /*console.log(this+$(".snow").length);*/});
	},newOne);
	//雪花到达一定数量时候清除
/*	setTimeout(function(){
		($(".snow").remove()),10000}
	)*/
	/*function removesnow(){
		while($(".snow").length>1000)
		{$(this).remove();}
	};		*/
});
