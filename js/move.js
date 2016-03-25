
function startMove(obj,iTarget,attr){
	clearInterval(obj.timer);//避免重复调用定时器
	obj.timer=setInterval(function(){
        var cur;
        if(attr=="opacity"){
             cur=parseFloat(getStyle(obj,attr))*100;//当前值
        }else{
            cur=parseInt(getStyle(obj,attr));//当前值
        }
		var speed=(iTarget-cur)/2;//缓冲的速度
		speed=speed>0?Math.ceil(speed):Math.floor(speed);//取整
		if(cur==iTarget){
			//停止运动
			clearInterval(obj.timer);
		}else{
			//开始运动left=当前位置+速度
            if(attr=="opacity"){
                obj.style.opacity=(cur+speed)/100;
            }else{
                obj.style[attr]=cur+speed+"px";
            }
		}
	},30);
}

//获取样式函数
function getStyle(obj,att){
	if(obj.currentStyle){
		return obj.currentStyle[att];
	}else{
		return getComputedStyle(obj,null)[att];
	}
}