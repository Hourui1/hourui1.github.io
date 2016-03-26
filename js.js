

$(function(){


	var i=0;
	var time=null;
	var num=$(".box>ul>li").length;


	$(".box").on("mouseover",function(){

		$(".btn1").stop().fadeIn(500);
		$(".btn2").stop().fadeIn(500);

	})

	$(".box").on("mouseout",function(){

		$(".btn1").stop().fadeOut(500);
		$(".btn2").stop().fadeOut(500);

	})

	$(".warp>ol>li").on("mouseover",function(){

	    i=$(this).index();

		play();
	})



	$(".btn1").on("click",function(){

		i--;

		if(i<0)
		{
			i=num-1
		}

		play()

	})


	$(".btn2").on("click",function(){


		i++;

		if(i>(num-1))
		{
			i=num-5
		}

		play()
				
	})


	autoplay()

	function autoplay(){


		clearInterval(time)

		time=setInterval(function()
		{

			i++;

			if(i>(num-1))
		    {
	    		i=num-5
		    };

		    play();

		},1500)		

	}



	$(".box").on("mouseover",function(){

		clearInterval(time)

	})

	$(".box").on("mouseout",function(){

		autoplay()

	})

	function play(){

		$(".warp>ol>li").eq(i).addClass("bg").siblings().removeClass("bg");

		$(".box>ul").stop().animate({"margin-left":-(i*605)+"px"})

	}


})

