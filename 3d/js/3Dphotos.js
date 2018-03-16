var photoBox = function(data, width, heigth) {
	var data = data;
	//console.log(data);
	this.photo_box = null;
	this.ul_width = width;
	console.log(width);
	//创建最外层
	var createBox = function() {
		var box = document.createElement("div");
		box.className = "container";
		box.appendChild(createPhotos.call(this, data));
		//console.log(box);
		return box;
	}
	//图片组
	var createPhotos = function(data) {
		var ul = document.createElement("ul");
		ul.style.width = width + "px";
		ul.style.height = heigth + "px";		
		for(i = 0; i < data.length; i++) {
			var angel = 360 / data.length;
			var distance = (width / 2) / (Math.tan(angel / 2 / 180 * Math.PI));
			var li = document.createElement("li");
			li.style.transform = "rotateY(" + angel * i + "deg) translateZ(" + distance+ "px)";
			li.className = "photo_img "+ "item" +i;
			var img = document.createElement("img");
			img.setAttribute("src", data[i].src);
			//console.log(data[i].src);
			img.setAttribute("alt", data[i].alt);
			li.appendChild(img);
			ul.appendChild(li);
		}
		return ul;
	}
	//填充HTML
	this.fill = function(targerId) {
		//console.log(targerId);
		this.photo_box = createBox.call(this);
		console.log(this);
		//document.getElementById(targerId).innerHTML = "";
		document.getElementById(targerId).append(this.photo_box);
	};
		
	this.click_right=function(){
		var ul=$("#bg1").children().children();
		var angel = 360 / data.length;
		   angel0=0;
		var x=-1;
		$(".btn_right").click(function(){
			angel0=angel0+angel;

		ul.css({
			"transform": "rotateY("+angel0+"deg)  rotateX(-1deg)"
		})
		console.log(angel0);
		
	})
		
	};
		this.click_left=function(){
		var ul=$("#bg1").children().children();
		var angel = 360 / data.length;
				console.log(angel0);

		$(".btn_left").click(function(){
			angel0=angel0-angel;
							
		ul.css({
			"transform": "rotateY("+angel0+"deg)  rotateX(-1deg)"
		})

		
	})
		
	};
	

	
}


$(function(){
	/*$(".btn_right").click(function(){
		for(var i=0;i<5;i++){
			$("li").eq(0).css({
				"transform": "rotateY(60deg)"
				
			})
		}
	})*/
		bg1.click_right();
		bg1.click_left();


	
})


/*	//预设事件
	$(function(){
		i=0;//全局索引值
	play_time=2000;//轮播时长
		shownow();
		loopshow();
	//当前显示
	function shownow(){
		$(".item").eq(i).fadeIn(800).siblings().fadeOut(600);
		$(".point").eq(i).addClass("now").siblings().removeClass("now");
	};
	//循环显示
	 function loopshow(){
		timer=setInterval(function(){
		if(i==length){
		i=0;shownow();i=1;
		}else{
		shownow();
		i++;
		}


	},play_time);
	}	
	//事件绑定
	$(".point").hover(
		function(){
			i=$(this).index();
			shownow();
			clearInterval(timer);
			},
		function(){
				loopshow();
			}
	);
	$(".btn_right").click(
		function(){
		
		}
	);
		$(".btn_left").click(
		function(){
			clearInterval(timer);
			if(i==0){
				i=length;
			}
			i--;
			shownow();
			loopshow();
		}
	);
	})

*/



var bg1 = new photoBox(
	[{
		"src": "img/220490-106.jpg",
		"alt": "未加载到图像"
	},
	{
		"src": "img/332588-106.jpg",
		"alt": "未加载到图像"
	},
	{
		"src": "img/332649-106.jpg",
		"alt": "未加载到图像"
	},
	{
		"src": "img/220490-106.jpg",
		"alt": "未加载到图像"
	}
	,{
		"src": "img/332588-106.jpg",
		"alt": "未加载到图像"
	}

], 500,300);
bg1.fill("bg1");
/*var bg2 = new photoBox(
	[{
		"src": "img/220490-106.jpg",
		"alt": "未加载到图像"
	},
	{
		"src": "img/220490-106.jpg",
		"alt": "未加载到图像"
	},
	{
		"src": "img/220490-106.jpg",
		"alt": "未加载到图像"
	},
	{
		"src": "img/220490-106.jpg",
		"alt": "未加载到图像"
	}
	,
	{
		"src": "img/220490-106.jpg",
		"alt": "未加载到图像"
	}
],400,300);
bg2.fill("bg2");*/