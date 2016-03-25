/**
 * Created by Administrator on 15-7-29.
 */
var ul1=document.getElementById("ul1"),
    uls=document.getElementsByTagName("ul")[0].getElementsByTagName("li"),
    box1=document.getElementById("box1"),box2=document.getElementById("box2"),box3=document.getElementById("box3"),
    box4=document.getElementById("box4"),box5=document.getElementById("box5"),box6=document.getElementById("box6"),
    box7=document.getElementById("box7"),
    ul2=document.getElementById("ul2"),
    li1=document.getElementById("li1"),
    txt=document.getElementById("txt"),
    gouwu=document.getElementById("gouwu");
//导航中第一个ul里的划过效果
    ul1.onmouseover=function(){
        ul1.style.background="white"
        box1.style.borderTop="none"
        startMove(box1,29,"top")
    }
    //导航中第一个ul里的离开效果
    ul1.onmouseout=function(){
        ul1.style.background=""
        startMove(box1,-243,"top")
    }
//导航中第二个ul里面的所有的划过效果
ul2.onmouseover=function(e){
    var event= e || window.event;
    targets=event.target || event.srcElement;
    if(targets.id=="li1"){
        box2.style.display="block"
        box2.style.borderTop="none"
    }
    if(targets.id=="li2"){
        box3.style.display="block"
        box3.style.borderTop="none"
    }
    if(targets.id=="li3"){
        box4.style.display="block"
        box4.style.borderTop="none"
    }
    if(targets.id=="li4"){
        box5.style.display="block"
        box5.style.borderTop="none"
    }
    if(targets.id=="li5"){
        box6.style.display="block"
        box6.style.borderTop="none"
    }
}
//第二个ul里面的所有的离开效果
ul2.onmouseout=function(e){
            var event= e || window.event;
            targets=event.target || event.srcElement;
            if(targets.id=="li1"){
                box2.style.display="none"
            }
            if(targets.id=="li2"){
                box3.style.display="none"
            }
            if(targets.id=="li3"){
                box4.style.display="none"
            }
            if(targets.id=="li4"){
                box5.style.display="none"
            }
            if(targets.id=="li5"){
                box6.style.display="none"
            }
        }
//表单获取焦点
txt.onfocus=function(){
    txt.value=""
}
//表单失去焦点
txt.onblur=function(){
     if(txt.value==""){
        txt.value="遥控落地扇"
   }else{
         txt.value;
     }
}
//购物车小盒子划过
gouwu.onmouseover=function(){
        gouwu.style.borderBottom="none"
        box7.style.borderTop="none"
        box7.style.display="block"
    }
//购物车小盒子离开
gouwu.onmouseout=function(){
    box7.style.display="none"
}

var list=document.getElementById("list"),
    lists=list.getElementsByTagName("li"),
    lunbs=document.getElementById("lunb"),//获取包着图片和ol的盒子
    ols=lunbs.getElementsByTagName("ol")[0].getElementsByTagName("li"),
    x= 0,//定义一个向change函数中传递的实参
    w=lists[0].offsetWidth;//获取ul

    function change(z){
        startMove(list,-z*w,"left")
        for(var i=0;i<ols.length;i++){
            ols[i].className=""
        }
        ols[z].className="aa"
    }
autoplay();
function autoplay(){
    setInterval(function(){
        x++;
        if(x>=lists.length) x=0;
        change(x)
    },2000)
}

