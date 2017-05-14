

//运动函数
function bufferMove(obj,json,fn){
							var iCur=0;
							var iSpeed=0;
							var flag=true;
							clearInterval(obj.timer);
							obj.timer=setInterval(function (){
								for(var attr in json){
									var iTarget=json[attr];
									if(attr=='opacity'){
										iCur=Math.round(getStyle(obj,'opacity')*100);
									}
									else{
										iCur=parseInt(getStyle(obj,attr));
									}
									
									iSpeed=(iTarget-iCur)/5;
									iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
									
									if(iCur!=iTarget){
										flag=false;
										if(attr=='opacity'){
											obj.style.opacity=(iCur+iSpeed)/100;
											obj.style.filter="alpha(opacity="+(iCur+iSpeed)+")";
										}
										else{
											obj.style[attr]=iCur+iSpeed+'px';
										}
									}
									
									if(flag){
										clearInterval(obj.timer);
									}
								}
							},50);
							fn&&fn();
}

//获取非行间样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];	
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}	
}

//第一部分广告的数据信息
var arr_s2_img2=[
{url:'https://pages.tmall.com/wow/act/17163/djd?spm=875.7931836/B.2016009.1.aOnUJZ&acm=lb-zebra-148799-693134.1003.4.1678206&scm=1003.4.lb-zebra-148799-693134.OTHER_1_1678206',img:'ad/ad_2.png'},
{url:'https://pages.tmall.com/wow/act/17163/xjd?spm=875.7931836/B.2016009.2.aOnUJZ&acm=lb-zebra-148799-693134.1003.4.1678206&scm=1003.4.lb-zebra-148799-693134.OTHER_2_1678206',img:'ad/ad_3.png'},
{url:'https://pages.tmall.com/wow/act/17163/smjd?spm=875.7931836/B.2016009.3.aOnUJZ&acm=lb-zebra-148799-693134.1003.4.1678206&scm=1003.4.lb-zebra-148799-693134.OTHER_3_1678206',img:'ad/ad_4.png'},
{url:'https://pages.tmall.com/wow/act/17163/smjd?spm=875.7931836/B.2016009.3.aOnUJZ&acm=lb-zebra-148799-693134.1003.4.1678206&scm=1003.4.lb-zebra-148799-693134.OTHER_3_1678206',img:'ad/ad_5.png'},
{url:'https://pages.tmall.com/wow/act/17163/smjd?spm=875.7931836/B.2016009.3.aOnUJZ&acm=lb-zebra-148799-693134.1003.4.1678206&scm=1003.4.lb-zebra-148799-693134.OTHER_3_1678206',img:'ad/ad_6.png'}
];
var oDiv_s2_img2=document.getElementsByClassName('s2_img2')[0];
var aA_s2_img2=oDiv_s2_img2.getElementsByTagName('a');
for(var i=0;i<aA_s2_img2.length;i++){
	aA_s2_img2[i].href=arr_s2_img2[i].url;
	aA_s2_img2[i].children[0].src=arr_s2_img2[i].img;
}

//视频的制作

var arr_v1_face_img=['ad/vedio_1.jpg','ad/vedio_2.jpg','ad/vedio_3.jpg','ad/vedio_4.jpg','ad/vedio_5.jpg','ad/vedio_6.jpg'];            //描述视频的6个图片
var oDiv_v1_face=document.getElementById('v1_face');

var oDiv_s2_img3_cd_center=document.getElementById('s2_img3_cd_center');
var oUl_img=oDiv_s2_img3_cd_center.children[0];
var aLi_img=oUl_img.children;
var w=oUl_img.parentNode.offsetWidth;
oUl_img.style.width=w*2+'px';     //使图片排成一行
var num_v=0;
var timer=null;

clearInterval(timer);
timer=setInterval(imgMove,1500);
//鼠标移入图片，视频消失
for(var i=0;i<aLi_img.length;i++){
	aLi_img[i].index=i;
	aLi_img[i].onmouseover=function (){
		clearInterval(timer);
		if(num_v==this.index){
			return false;
		}
		else{
			num_v=this.index;
			delImg();
			addImg(num_v);
			aDiv_s2_img3_cd_top[0].style.display='block';
			aDiv_s2_img3_cd_top[1].style.display='none';
			oVedio.pause();
		}
	}
	aLi_img[i].onmouseout=function (){
		num_v=this.index;
		timer=setInterval(imgMove,1500);
	}
	//点击，对应的视频播放
	aLi_img[i].onclick=function (){
		clearInterval(timer);
		this.onmouseout=null;
		num_v=this.index;
		cdPlay(num_v);
	};
}
//点击左右箭头，ul中的图片移动
oDiv_s2_img3_cd_center.children[1].onclick=function (){
	clearInterval(timer);
	num_v=0;
	oUl_img.style.marginLeft='0px';
	//oDiv_s2_img3_cd_center.children[1].style.display='none';
	//oDiv_s2_img3_cd_center.children[2].style.display='block';
	delImg();
	addImg(num_v);
	timer=setInterval(imgMove,1500);
};
oDiv_s2_img3_cd_center.children[2].onclick=function (){
	clearInterval(timer);
	num_v=3;
	oUl_img.style.marginLeft=-w+'px';
	//oDiv_s2_img3_cd_center.children[1].style.display='block';
	//oDiv_s2_img3_cd_center.children[2].style.display='none';
	delImg();
	addImg(num_v);
	timer=setInterval(imgMove,1500);
};
//点击页面播放视频
var oDiv_s2_img3_cd_top=document.getElementsByClassName('s2_img3_cd_top')[0];
var aDiv_s2_img3_cd_top=oDiv_s2_img3_cd_top.children;
var oDiv_v1_face_stop=document.getElementsByClassName('v1_face_stop')[0];
var oDiv_v1=document.getElementById('v1');
var oVedio=oDiv_v1.getElementsByTagName('video')[0];
var flag_vedio=true;
oDiv_v1_face_stop.onclick=function (){
		clearInterval(timer);
		/*aLi_img[num_v].getElementsByTagName('div')[0].innerHTML="<img class='sicc_li_img' src='ad/vedio_on.png' />"; //改变ul列表中的小图标
		aDiv_s2_img3_cd_top[0].style.display='none';
		aDiv_s2_img3_cd_top[1].style.display='block';
		oVedio.currentTime=0;
		oVedio.play();
		oVedio.volume=oSpan_v1_control_voice.offsetLeft/oDiv_v1_control_voice.offsetWidth;*/

		cdPlay(num_v);
}
oVedio.onclick=function (){
	if(this.paused){
		this.play();
	}
	else{
		this.pause();
	}
}
//处理视频的声音
var oDiv_v1_control=document.getElementById('v1_control');
var oDiv_v1_control_voice=oDiv_v1.getElementsByClassName('v1_control_voice')[0];
var oSpan_v1_control_voice=oDiv_v1_control.getElementsByTagName('span')[0];
oSpan_v1_control_voice.onmousedown=function (ev){
	var ev=ev||event;
	var disX=ev.clientX-this.offsetLeft;
	document.onmousemove=function (ev){
		var ev=ev||event;
		if(ev.clientX-disX<0){
			oSpan_v1_control_voice.style.left='0px';
		}
		else if(ev.clientX-disX>oDiv_v1_control_voice.offsetWidth-oSpan_v1_control_voice.offsetWidth){
			oSpan_v1_control_voice.style.left=oDiv_v1_control_voice.offsetWidth-oSpan_v1_control_voice.offsetWidth+'px';
		}
		else{
			oSpan_v1_control_voice.style.left=ev.clientX-disX+'px';
		}
		oVedio.volume=oSpan_v1_control_voice.offsetLeft/(oDiv_v1_control_voice.offsetWidth-oSpan_v1_control_voice.offsetWidth);
		oDiv_v1_control_voice.getElementsByTagName('div')[0].style.width=oSpan_v1_control_voice.offsetLeft+'px';
	}
	document.onmouseup=function (){
		document.onmousemove=document.onmouseup=null;
	}
}
//视频播放，视频的div显示，图片的div消失
function cdPlay(iNum){
		aLi_img[iNum].getElementsByTagName('div')[0].innerHTML="<img class='sicc_li_img' src='ad/vedio_on.png' />"; //改变ul列表中的小图标
		aDiv_s2_img3_cd_top[0].style.display='none';
		aDiv_s2_img3_cd_top[1].style.display='block';
		oVedio.currentTime=0;
		oVedio.play();
		oVedio.volume=oSpan_v1_control_voice.offsetLeft/oDiv_v1_control_voice.offsetWidth;
}

//列表中图片相互运动
function imgMove(){
	delImg();
	num_v++;
	if(num_v>5){
		clearInterval(timer);
		oUl_img.style.marginLeft='0px';
		num_v=0;
		timer=setInterval(imgMove,1500);
	}
	addImg(num_v);
	jiantou(num_v);
	if(num_v==3){
		clearInterval(timer);
		oUl_img.style.marginLeft=-w+'px';
		timer=setInterval(imgMove,1500);
	}
}

//清除之前的停止小图标
function delImg(){
	for(var i=0;i<aLi_img.length;i++){
		if(aLi_img[i].getElementsByTagName('div').length==1){
			aLi_img[i].removeChild(aLi_img[i].getElementsByTagName('div')[0]);
		}
	}
}
//添加小图标
function addImg(iNum){
	var oDiv=document.createElement('div');
	oDiv.innerHTML="<img class='sicc_li_img' src='ad/vedio_stop.png' />";
	aLi_img[iNum].appendChild(oDiv);
	oDiv_v1_face.children[0].src=arr_v1_face_img[iNum];
}
//左右箭头的变化
function jiantou(iNum){
	if(iNum<3){
		oDiv_s2_img3_cd_center.children[1].style.display='none';
		oDiv_s2_img3_cd_center.children[2].style.display='block';
	}
	else{
		oDiv_s2_img3_cd_center.children[1].style.display='block';
		oDiv_s2_img3_cd_center.children[2].style.display='none';
	}
}

//视频下方文字广告轮播

function textMove(){
	var oUl_sicb=document.getElementById('sicb_ul');
	var aLi_sicb=oUl_sicb.getElementsByTagName('li');
	var iw_sicb=aLi_sicb[0].offsetHeight;
	//alert(iw_sicb);
	var num_sicb=0;
	var timer_sicb=null;
	clearInterval(timer_sicb);
	timer_sicb=setInterval(function (){
		num_sicb++;
		if(num_sicb>2){
			num_sicb=0;
		}
		bufferMove(oUl_sicb,{'top':-num_sicb*iw_sicb});
		//alert(getStyle(oUl_sicb,'top'));
	},2000);
}
textMove();

//视频右边的图片广告列表
//function addImgList(){
	var arr_ad_img=[
		[{'ad_img':'https://img.alicdn.com/i2/2/TB1MJ6vLXXXXXbdXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB12bIQIVXXXXcpXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1z3wlKVXXXXXvXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1s1gSIpXXXXXnXXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1B7b0HpXXXXatXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1.81cIXXXXXXoaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥30'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1yaGOJFXXXXa0XVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥20'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1rL1hPVXXXXaQXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥20'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1gGw1IVXXXXXsXXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB19aosNFXXXXXaXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1iYwSOXXXXXX6aXXXwu0bFXXX.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/T1xRnTXjBiXXXQXDnq-90-45.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1kQP_LXXXXXc7XVXXMuAU8FXX?abtest=_AB-LR1315-PR1315&pos=37&abbucket=_AB-M1315_B12&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB18S7RKFXXXXbkXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1aX3uIVXXXXc_XFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB150EcLVXXXXbgaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1qwHPHpXXXXbpXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1cmHYHpXXXXcpaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/T1tGvWXf4hXXXQXDnq-90-45.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1.aFsJXXXXXbFXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1f7qWKVXXXXbBXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'}
		],
		[{'ad_img':'https://img.alicdn.com/i2/2/TB1MJ6vLXXXXXbdXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB12bIQIVXXXXcpXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1z3wlKVXXXXXvXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1s1gSIpXXXXXnXXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1B7b0HpXXXXatXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1.81cIXXXXXXoaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥30'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1yaGOJFXXXXa0XVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥20'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1rL1hPVXXXXaQXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥20'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1gGw1IVXXXXXsXXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB19aosNFXXXXXaXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1iYwSOXXXXXX6aXXXwu0bFXXX.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/T1xRnTXjBiXXXQXDnq-90-45.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1kQP_LXXXXXc7XVXXMuAU8FXX?abtest=_AB-LR1315-PR1315&pos=37&abbucket=_AB-M1315_B12&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB18S7RKFXXXXbkXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1aX3uIVXXXXc_XFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB150EcLVXXXXbgaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1qwHPHpXXXXbpXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1cmHYHpXXXXcpaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/T1tGvWXf4hXXXQXDnq-90-45.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1.aFsJXXXXXbFXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1f7qWKVXXXXbBXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'}
		],
		[{'ad_img':'https://img.alicdn.com/i2/2/TB1MJ6vLXXXXXbdXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB12bIQIVXXXXcpXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1z3wlKVXXXXXvXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1s1gSIpXXXXXnXXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1B7b0HpXXXXatXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1.81cIXXXXXXoaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥30'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1yaGOJFXXXXa0XVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥20'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1rL1hPVXXXXaQXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥20'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1gGw1IVXXXXXsXXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB19aosNFXXXXXaXpXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1iYwSOXXXXXX6aXXXwu0bFXXX.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/T1xRnTXjBiXXXQXDnq-90-45.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1kQP_LXXXXXc7XVXXMuAU8FXX?abtest=_AB-LR1315-PR1315&pos=37&abbucket=_AB-M1315_B12&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB18S7RKFXXXXbkXVXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1aX3uIVXXXXc_XFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB150EcLVXXXXbgaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1qwHPHpXXXXbpXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1cmHYHpXXXXcpaXXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/T1tGvWXf4hXXXQXDnq-90-45.png_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1.aFsJXXXXXbFXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'关注人数 15.2万'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'},
		{'ad_img':'https://img.alicdn.com/i2/2/TB1f7qWKVXXXXbBXFXXSutbFXXX.jpg_100x150q100.jpg','add_url':'https://www.baidu.com/','txt':'优惠券 ￥50'}
		]
	];
	var num_sia=0;
	var oDiv_sia_change=document.getElementById('sia_change');
	var oUl_sia=oDiv_sia_change.previousElementSibling || oDiv_sia_change.previousSibling;
	var aLi_sia=oUl_sia.getElementsByTagName('li');
	var oDiv_sia_second=oUl_sia.getElementsByClassName('sia_second');   //鼠标移入出现div块
	var flag_sia=true;
	function insertImg(iNum){
		//var str_sia='';
		for(var i=0;i<arr_ad_img[iNum].length;i++){
			var str_sia='';
			if(flag_sia){
				str_sia="<div class='sia_font'><div class='sia_first'><img src='"+arr_ad_img[iNum][i]['ad_img']+"' /></div><div class='sia_second'><div><img src='ad/adRight_xx.png' /></div><div><p>"+arr_ad_img[iNum][i]['txt']+"</p><a href='' target='_blank'>点击进入</a></div></div></div><div class='sia_back'></div>"
			}
			else{
				str_sia="<div class='sia_font'></div><div class='sia_back'><div class='sia_first'><img src='"+arr_ad_img[iNum][i]['ad_img']+"' /></div><div class='sia_second'><div><img src='ad/adRight_xx.png' /></div><div><p>"+arr_ad_img[iNum][i]['txt']+"</p><a href='' target='_blank'>点击进入</a></div></div></div>"
			}
			aLi_sia[i].innerHTML=str_sia;
		}
		
	}
	insertImg(num_sia,'sia_font');
	//鼠标移入之后，出现半透明框
	for(var i=0;i<aLi_sia.length;i++){
		aLi_sia[i].index=i;
		oDiv_sia_second[i].style.opacity='0';
		oDiv_sia_second[i].style.filter='alpha(opacity=0)';
		
		aLi_sia[i].onmouseover=function (){
			oDiv_sia_second[this.index].style.opacity='1';
			oDiv_sia_second[this.index].style.filter='alpha(opacity=100)';
		};
		aLi_sia[i].onmouseout=function (){
			oDiv_sia_second[this.index].style.opacity='0';
			oDiv_sia_second[this.index].style.filter='alpha(opacity=0)';
		};
	}
	var zIndex_sia_font=2;
	var zIndex_sia_back=1;
	var rotate_sia=0;
	oDiv_sia_change.onclick=function (){
		num_sia++;
		rotate_sia+=180;
		
		if(num_sia>2){
			num_sia=0;
		}
		if(flag_sia){
			zIndex_sia_back+=2;
		}
		else{
			zIndex_sia_font+=2;
		}
		flag_sia=!flag_sia;
		insertImg(num_sia);
		for(var i=0;i<aLi_sia.length;i++){
			aLi_sia[i].style.transition='0.3s ease-out '+(i/6+i%6)*100+'ms';
			aLi_sia[i].children[0].style.zIndex=zIndex_sia_font+'';
			aLi_sia[i].children[1].style.zIndex=zIndex_sia_back+'';
			aLi_sia[i].style.transform='rotateY('+rotate_sia+'deg)';
		}
	};
//}


//美丽人生部分的制作
//左侧部分
var oDiv_move_first=document.getElementById('move_first');
var oUl_move_first=oDiv_move_first.getElementsByTagName('ul')[0];
var aLi_move_first=oUl_move_first.getElementsByTagName('li');
/*var timer_oUl_move_first=null;
var flag_oUl_move_first=true;
clearInterval(timer_oUl_move_first);
timer_oUl_move_first=setInterval(oUlMoveFirst,2000);

function oUlMoveFirst(){
	bufferMove(oUl_move_first,{'top':-30},function (){
			clearInterval(timer_oUl_move_first);
			if(flag_oUl_move_first){
				setTimeout(function (){
					oUl_move_first.style.top='0px';
					oUl_move_first.appendChild(aLi_move_first[0]);
					timer_oUl_move_first=setInterval(oUlMoveFirst,2000);
				},2000)
				flag_oUl_move_first=false;
			}
			else{
				oUl_move_first.style.top='0px';
				oUl_move_first.appendChild(aLi_move_first[0]);
				timer_oUl_move_first=setInterval(oUlMoveFirst,2000);
			}
			
	});
}*/
textXunhuanTop(oUl_move_first,aLi_move_first);

//中间部分
var oDiv_section_main=document.getElementById('section_main');
var aDiv_smf=oDiv_section_main.children;
var arr_smf_beautyLife=[
	[{'sub':'焕然一新遇见美丽','describe':'健康非海绵文胸','color':'#ea5f8d','img':'beautyLife/TB_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'黑色潮小脚牛仔裤','describe':'黑色经典韩版修身百搭','color':'#ea5f8d','img':'beautyLife/TB_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'增高休闲鞋真皮','describe':'店长推荐款','color':'#ea5f8d','img':'beautyLife/TB_3.jpg','url':'https://www.tmall.com/'},
	{'sub':'春夏新品','describe':'美包来袭','color':'#ea5f8d','img':'beautyLife/TB_4.jpg','url':'https://www.tmall.com/'},
	{'sub':'夏日连衣裙美搭指','describe':'裙摆飞扬的年华','color':'#ea5f8d','img':'beautyLife/TB_5.jpg','url':'https://www.tmall.com/'},
	{'sub':'甜美粗跟绑带女鞋','describe':'甜美百搭稳健好走','color':'#ea5f8d','img':'beautyLife/TB_6.jpg','url':'https://www.tmall.com/'}],
	[{'sub':'优选精品','describe':'时尚畅销款','color':'#ea5f8d','img':'beautyLife/TB_right_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'街拍LOOK','describe':'抢眼才是关键','color':'#ea5f8d','img':'beautyLife/TB_right_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'木林森夏季凉鞋','describe':'全场包邮起','color':'#ea5f8d','img':'beautyLife/TB_right_3.jpg','url':'https://www.tmall.com/'}
	]
];
for(var i=0;i<arr_smf_beautyLife.length;i++){
	var str_smf='';
	var oDiv=document.createElement('div');
	if(i==0){
		oDiv.className='smf_center';
		for(var j=0;j<arr_smf_beautyLife[i].length;j++){
			str_smf+="<a href="+arr_smf_beautyLife[i][j]['url']+" target='_blank'><div>"+arr_smf_beautyLife[i][j]['sub']+"</div><div class='txt_1'>"+arr_smf_beautyLife[i][j]['describe']+"</div><img src="+arr_smf_beautyLife[i][j]['img']+" /></a>";
		}
	}
	else{
		oDiv.className='smf_right';
		for(var j=0;j<arr_smf_beautyLife[i].length;j++){
			str_smf+="<a href="+arr_smf_beautyLife[i][j]['url']+" target='_blank'><div>"+arr_smf_beautyLife[i][j]['sub']+"</div><div class='txt_1'>"+arr_smf_beautyLife[i][j]['describe']+"</div><img src="+arr_smf_beautyLife[i][j]['img']+" /></a>";
		}
	}
	oDiv.innerHTML=str_smf;
	aDiv_smf[0].appendChild(oDiv);
}

//潮电酷玩，进行整体的js写入
var arr_elecPlay=[
	[{'txt':'手机','url':'https://www.tmall.com/'},{'txt':'iPhone','url':'https://www.tmall.com/'},{'txt':'相机','url':'https://www.tmall.com/'},{'txt':'数码配件','url':'https://www.tmall.com/'},{'txt':'影音电玩','url':'https://www.tmall.com/'},{'txt':'生活电器','url':'https://www.tmall.com/'},{'txt':'个人护理','url':'https://www.tmall.com/'},{'txt':'电脑硬件','url':'https://www.tmall.com/'},{'txt':'笔记本','url':'https://www.tmall.com/'}],
	{'img':'elecPlay/TB_main.jpg','txt_li':['爆款游戏本直降400 >','ipad直降200 >','高颜值轻薄本将1000 >'],'txt_upper':'笔记本五一抢满减','txt_lower':'免息分期赢欧洲游','url':'https://www.tmall.com/'},
	[{'sub':['手机会场12期免息','抢大额优惠券'],'describe':'爆款直降700','color':'#ea5f8d','img':'elecPlay/TB_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'春季出游相机','describe':'最高12期免息','color':'#ea5f8d','img':'elecPlay/TB_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'每天都是情人节','describe':'送Ta所爱','color':'#ea5f8d','img':'elecPlay/TB_3.jpg','url':'https://www.tmall.com/'},
	{'sub':'净享生活','describe':'100多年专业领域','color':'#ea5f8d','img':'elecPlay/TB_4.jpg','url':'https://www.tmall.com/'},
	{'sub':'电脑爆款直降','describe':'最高6期免息','color':'#ea5f8d','img':'elecPlay/TB_5.jpg','url':'https://www.tmall.com/'},
	{'sub':'衣物护理季','describe':'呵护衣物 宠爱自己','color':'#ea5f8d','img':'elecPlay/TB_6.jpg','url':'https://www.tmall.com/'},
	{'sub':'笔记本五一抢满减','describe':'赢欧洲游','color':'#ea5f8d','img':'elecPlay/TB_7.jpg','url':'https://www.tmall.com/'}]
];

/*function buildMainContent(obj,arr){
	for(var i=0;i<arr.length;i++){
		var str='';
		var oDiv_m=document.createElement('div');
		if(i==0){
			oDiv_m.className='smf_sub';
			for(var j=0;j<arr[i].length;j++){
				str+="<a href="+arr[i][j]['url']+" target='_blank'>"+arr[i][j]['txt']+"</a>";
			}	
		}
		else if(i==1){
			oDiv_m.className='smf_left';
			str="<a class='smfl_t' href="+arr[i]['url']+" target='_blank'><img src="+arr[i]['img']+" /><div class='smflt_b'><div class='smfltb_t' id='move_second'><ul><li>"+arr[i]['txt_li'][0]+"</li><li>"+arr[i]['txt_li'][1]+"</li><li>"+arr[i]['txt_li'][2]+"</li></ul></div><div class='smfltb_b'><div>"+arr[i]['txt_upper']+"</div><div>"+arr[i]['txt_lower']+"</div></div></div></a>";
		}
		else if(i==2){
			oDiv_m.className='smf_center';
			oDiv_m.id='smf_elecPlay';
			for(var j=0;j<arr[i].length;j++){
				if(typeof(arr[i][j]['sub'])!=='string'){
					str+="<a class='smfc_change' href="+arr[i][j]['url']+" target='_blank'><div>"+arr[i][j]['sub'][0]+"</div><div>"+arr[i][j]['sub'][1]+"</div><div class='txt_2'>"+arr[i][j]['describe']+"</div><img src="+arr[i][j]['img']+" /></a>";
				}
				else{
					str+="<a href="+arr[i][j]['url']+" target='_blank'><div>"+arr[i][j]['sub']+"</div><div class='txt_2'>"+arr[i][j]['describe']+"</div><img src="+arr[i][j]['img']+" /></a>";
				}
			}
		}
		oDiv_m.innerHTML=str;
		obj.appendChild(oDiv_m);
	}
}*/
buildMainContent(aDiv_smf[1],arr_elecPlay,'txt_2','move_second','smf_elecPlay','','color_2');    //obj表示‘美丽人生’类的div，arr表示数据列表
//潮电酷玩部分左侧的文字向上循环运动
var oDiv_move_second=document.getElementById('move_second');
var oUl_move_second=oDiv_move_second.getElementsByTagName('ul')[0];
var aLi_move_second=oUl_move_second.getElementsByTagName('li');
textXunhuanTop(oUl_move_second,aLi_move_second);

//打造爱巢，数据及dom
var oDiv_loveHome=document.getElementById('loveHome');
var arr_loveHome=[
	[{'txt':'家具','url':'https://www.tmall.com/'},{'txt':'大家电','url':'https://www.tmall.com/'},{'txt':'四件套','url':'https://www.tmall.com/'},{'txt':'健康电器','url':'https://www.tmall.com/'},{'txt':'厨房电器','url':'https://www.tmall.com/'},{'txt':'吸顶灯','url':'https://www.tmall.com/'},{'txt':'平板电视','url':'https://www.tmall.com/'},{'txt':'装修设计','url':'https://www.tmall.com/'},{'txt':'跑步机','url':'https://www.tmall.com/'}],
	{'img':'loveHome/TB_main.jpg','txt_li':['数码家电好货盘点 >','提前加购 >','30天超长按约配送 >'],'txt_upper':'51黄金周特惠','txt_lower':'6期免息无忧购','url':'https://www.tmall.com/'},
	[{'sub':'纯正美式看这里','describe':'美式家具大牌专场','color':'#ea5f8d','img':'loveHome/TB_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'大家电','describe':'洗衣机','color':'#ea5f8d','img':'loveHome/TB_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'欧家典雅地毯','describe':'环保家居地垫可定做','color':'#ea5f8d','img':'loveHome/TB_3.jpg','url':'https://www.tmall.com/'},
	{'sub':'彩虹糖件套','describe':'彩虹糖四件套','color':'#ea5f8d','img':'loveHome/TB_4.jpg','url':'https://www.tmall.com/'},
	{'sub':'烘培小家电专场','describe':'培爱一生','color':'#ea5f8d','img':'loveHome/TB_5.jpg','url':'https://www.tmall.com/'},
	{'sub':'电视 五一狂欢购','describe':'立即抢购','color':'#ea5f8d','img':'loveHome/TB_6.jpg','url':'https://www.tmall.com/'}],
	[{'sub':'智享生活','describe':'品质生活 享你所想','color':'#ea5f8d','img':'loveHome/TB_right_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'4月仓储货拿货节','describe':'错过这个月要再等一年','color':'#ea5f8d','img':'loveHome/TB_right_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'智能家居高清监控','describe':'远程看家，高清语音','color':'#ea5f8d','img':'loveHome/TB_right_3.jpg','url':'https://www.tmall.com/'},
	{'sub':'精致生活家','describe':'开启智能生活之旅','color':'#ea5f8d','img':'loveHome/TB_right_4.jpg','url':'https://www.tmall.com/'}]
];
buildMainContent(oDiv_loveHome,arr_loveHome,'txt_3','move_third','','smf_right_loveHome','color_3'); 
var oDiv_move_third=document.getElementById('move_third');
var oUl_move_third=oDiv_move_third.getElementsByTagName('ul')[0];
var aLi_move_third=oUl_move_third.getElementsByTagName('li');  
textXunhuanTop(oUl_move_third,aLi_move_third); 
function buildMainContent(obj,arr,className_1,idName,idName_maybe_1,idName_maybe_2,className_2){//如‘美丽人生’内容写入函数
	for(var i=0;i<arr.length;i++){
		var str='';
		var oDiv_m=document.createElement('div');
		if(i==0){
			oDiv_m.className='smf_sub';
			for(var j=0;j<arr[i].length;j++){
				str+="<a href="+arr[i][j]['url']+" target='_blank'>"+arr[i][j]['txt']+"</a>";
			}	
		}
		else if(i==1){
			oDiv_m.className='smf_left';
			str="<a class='smfl_t' href="+arr[i]['url']+" target='_blank'><img src="+arr[i]['img']+" /><div class='smflt_b'><div class='smfltb_t' id="+idName+"><ul><li>"+arr[i]['txt_li'][0]+"</li><li>"+arr[i]['txt_li'][1]+"</li><li>"+arr[i]['txt_li'][2]+"</li></ul></div><div class='smfltb_b "+className_2+"'><div>"+arr[i]['txt_upper']+"</div><div>"+arr[i]['txt_lower']+"</div></div></div></a>";
		}
		else if(i==2){
			oDiv_m.className='smf_center';
			oDiv_m.id=idName_maybe_1;
			for(var j=0;j<arr[i].length;j++){
				if(typeof(arr[i][j]['sub'])!=='string'){
					str+="<a class='smfc_change' href="+arr[i][j]['url']+" target='_blank'><div>"+arr[i][j]['sub'][0]+"</div><div>"+arr[i][j]['sub'][1]+"</div><div class="+className_1+">"+arr[i][j]['describe']+"</div><img src="+arr[i][j]['img']+" /></a>";
				}
				else{
					str+="<a href="+arr[i][j]['url']+" target='_blank'><div>"+arr[i][j]['sub']+"</div><div class="+className_1+">"+arr[i][j]['describe']+"</div><img src="+arr[i][j]['img']+" /></a>";
				}
			}
		}
		else if(i==3){
			oDiv_m.className='smf_right';
			oDiv_m.id=idName_maybe_2;
			for(var j=0;j<arr[i].length;j++){
				str+="<a href="+arr[i][j]['url']+" target='_blank'><div>"+arr[i][j]['sub']+"</div><div class="+className_1+">"+arr[i][j]['describe']+"</div><img src="+arr[i][j]['img']+" /></a>";
			}
		}
		oDiv_m.innerHTML=str;
		obj.appendChild(oDiv_m);
	}
}

function textXunhuanTop(obj,arr){    //如‘美丽人生’左侧部分文字广告循环向上运动的函数
	var oUl_move_first=obj;
	var aLi_move_first=arr;
	var timer_oUl_move_first=null;
	var flag_oUl_move_first=true;
	clearInterval(timer_oUl_move_first);
	timer_oUl_move_first=setInterval(oUlMoveFirst,2000);

	function oUlMoveFirst(){
		bufferMove(oUl_move_first,{'top':-30},function (){
				clearInterval(timer_oUl_move_first);
				if(flag_oUl_move_first){
					setTimeout(function (){
						oUl_move_first.style.top='0px';
						oUl_move_first.appendChild(aLi_move_first[0]);
						timer_oUl_move_first=setInterval(oUlMoveFirst,2000);
					},2000)
					flag_oUl_move_first=false;
				}
				else{
					oUl_move_first.style.top='0px';
					oUl_move_first.appendChild(aLi_move_first[0]);
					timer_oUl_move_first=setInterval(oUlMoveFirst,2000);
				}
				
		});
	}
}

//居家生活，数据及dom
var oDiv_family=document.getElementById('family');
var arr_family=[
	[{'txt':'零食','url':'https://www.tmall.com/'},{'txt':'牛奶','url':'https://www.tmall.com/'},{'txt':'居家饰品','url':'https://www.tmall.com/'},{'txt':'保温杯','url':'https://www.tmall.com/'},{'txt':'保健品','url':'https://www.tmall.com/'},{'txt':'常用药','url':'https://www.tmall.com/'},{'txt':'热门图书','url':'https://www.tmall.com/'},{'txt':'洗发水','url':'https://www.tmall.com/'},{'txt':'卫生巾','url':'https://www.tmall.com/'},{'txt':'家庭清洁','url':'https://www.tmall.com/'},{'txt':'狗粮','url':'https://www.tmall.com/'}],
	{'img':'family/TB_main.jpg','txt_li':['有机益肥灌溉 >','自然农法栽培 >','浓甜汁足好吃 >'],'txt_upper':'台湾青成木瓜','txt_lower':'喝牛奶长大的木瓜','url':'https://www.tmall.com/'},
	[{'sub':'红罐金骏眉','describe':'买即赠品鉴好茶','color':'#ea5f8d','img':'family/TB_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'拉菲岩石古堡','describe':'拉菲官方授权','color':'#ea5f8d','img':'family/TB_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'家饰家纺大牌','describe':'健康品质新主张','color':'#ea5f8d','img':'family/TB_3.jpg','url':'https://www.tmall.com/'},
	{'sub':'美食美刻好美味','describe':'居家小美食独立小包装','color':'#ea5f8d','img':'family/TB_4.jpg','url':'https://www.tmall.com/'},
	{'sub':'春季厨房大焕新','describe':'热卖餐具满就送','color':'#ea5f8d','img':'family/TB_5.jpg','url':'https://www.tmall.com/'},
	{'sub':'云南白药牙膏团购','describe':'缓解口腔问题','color':'#ea5f8d','img':'family/TB_6.jpg','url':'https://www.tmall.com/'}],
	[{'sub':'椰岛鹿龟酒6瓶装','describe':'常饮抗疲劳，免疫调节','color':'#ea5f8d','img':'family/TB_right_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'代餐享瘦','describe':'无蔗糖健康代餐','color':'#ea5f8d','img':'family/TB_right_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'酒过三巡棕酒言欢','describe':'凤祥专卖店7年老店','color':'#ea5f8d','img':'family/TB_right_3.jpg','url':'https://www.tmall.com/'}]
];
buildMainContent(oDiv_family,arr_family,'txt_4','move_fourth','','','color_4'); 
var oDiv_move_fourth=document.getElementById('move_fourth');
var oUl_move_fourth=oDiv_move_fourth.getElementsByTagName('ul')[0];
var aLi_move_fourth=oUl_move_fourth.getElementsByTagName('li');  
textXunhuanTop(oUl_move_fourth,aLi_move_fourth); 

//户外出行，数据及dom
var oDiv_travel=document.getElementById('travel');
var arr_travel=[
	[{'txt':'车秒贷','url':'https://www.tmall.com/'},{'txt':'皮肤衣','url':'https://www.tmall.com/'},{'txt':'运动鞋','url':'https://www.tmall.com/'},{'txt':'4s保养','url':'https://www.tmall.com/'},{'txt':'行车记录仪','url':'https://www.tmall.com/'},{'txt':'轮胎','url':'https://www.tmall.com/'}],
	{'img':'travel/TB_main.jpg','txt_li':['200元优惠券免费领 >','新款低至5折 >','户外国际大牌限量抢 >'],'txt_upper':'莫干山户外嘉年华','txt_lower':'联合演绎户外新宠儿','url':'https://www.tmall.com/'},
	[{'sub':'爆款好车','describe':'首付10%起 送车险','color':'#ea5f8d','img':'travel/TB_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'T恤节活动','describe':'全场低至5折','color':'#ea5f8d','img':'travel/TB_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'T恤节','describe':'满580减50','color':'#ea5f8d','img':'travel/TB_3.jpg','url':'https://www.tmall.com/'},
	{'sub':'汽车电子','describe':'新品首发','color':'#ea5f8d','img':'travel/TB_4.jpg','url':'https://www.tmall.com/'},
	{'sub':'新品首发','describe':'即刻预订 直减100','color':'#ea5f8d','img':'travel/TB_5.jpg','url':'https://www.tmall.com/'},
	{'sub':'酷爽夏日','describe':'满299减20','color':'#ea5f8d','img':'travel/TB_6.jpg','url':'https://www.tmall.com/'}],
	[{'sub':'爱车出行','describe':'车品优选','color':'#ea5f8d','img':'travel/TB_right_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'汽车脚垫座垫上新','describe':'低至5折起','color':'#ea5f8d','img':'travel/TB_right_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'李宁轻质跑鞋','describe':'减震透气','color':'#ea5f8d','img':'travel/TB_right_3.jpg','url':'https://www.tmall.com/'}]
];
buildMainContent(oDiv_travel,arr_travel,'txt_5','move_fifth','','','color_5'); 
var oDiv_move_fifth=document.getElementById('move_fifth');
var oUl_move_fifth=oDiv_move_fifth.getElementsByTagName('ul')[0];
var aLi_move_fifth=oUl_move_fifth.getElementsByTagName('li');  
textXunhuanTop(oUl_move_fifth,aLi_move_fifth); 

//亲子时光，数据及dom
var oDiv_child=document.getElementById('child');
var arr_child=[
	[{'txt':'童装','url':'https://www.tmall.com/'},{'txt':'玩具','url':'https://www.tmall.com/'},{'txt':'待产用品','url':'https://www.tmall.com/'},{'txt':'文教用品','url':'https://www.tmall.com/'},{'txt':'宝宝用品','url':'https://www.tmall.com/'},{'txt':'儿童床品','url':'https://www.tmall.com/'},{'txt':'奶粉','url':'https://www.tmall.com/'},{'txt':'童书','url':'https://www.tmall.com/'},{'txt':'纸尿裤','url':'https://www.tmall.com/'}],
	{'img':'child/TB_main.jpg','txt_li':['全场满立减 >','夏季新品抢购 >','抢儿童礼包 >'],'txt_upper':'感知神奇的成长','txt_lower':'童装童鞋联合活动','url':'https://www.tmall.com/'},
	[{'sub':'男童夏装套装新款','describe':'大牌童装疯狂抢','color':'#ea5f8d','img':'child/TB_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'孕妈春夏美裙盛宴','describe':'海量美裙等你来','color':'#ea5f8d','img':'child/TB_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'热卖爆款推荐','describe':'流苏潮时尚女童凉鞋','color':'#ea5f8d','img':'child/TB_3.jpg','url':'https://www.tmall.com/'},
	{'sub':'亲子出游童车专场','describe':'童年美好回忆','color':'#ea5f8d','img':'child/TB_4.jpg','url':'https://www.tmall.com/'},
	{'sub':'一起成长','describe':'安全柔软舒适','color':'#ea5f8d','img':'child/TB_5.jpg','url':'https://www.tmall.com/'},
	{'sub':'疏通乳腺','describe':'十二档吸力调节','color':'#ea5f8d','img':'child/TB_6.jpg','url':'https://www.tmall.com/'}],
	[{'sub':'五一出型','describe':'五一出型、时尚相伴','color':'#ea5f8d','img':'child/TB_right_1.jpg','url':'https://www.tmall.com/'},
	{'sub':'小贵族书包','describe':'时尚韩风快乐成长','color':'#ea5f8d','img':'child/TB_right_2.jpg','url':'https://www.tmall.com/'},
	{'sub':'亲子装短袖T恤','describe':'最亲密的搭配','color':'#ea5f8d','img':'child/TB_right_3.jpg','url':'https://www.tmall.com/'}]
];
buildMainContent(oDiv_child,arr_child,'txt_6','move_sixth','','','color_6'); 
var oDiv_move_sixth=document.getElementById('move_sixth');
var oUl_move_sixth=oDiv_move_sixth.getElementsByTagName('ul')[0];
var aLi_move_sixth=oUl_move_sixth.getElementsByTagName('li');  
textXunhuanTop(oUl_move_sixth,aLi_move_sixth); 

//现在开始侧边导航栏以及相应内容的js

//滚动滑轮之后，出现导航栏

var oAside=document.getElementById('aside1');
var aAside_color=oAside.getElementsByClassName('aside_color');
var aDiv_section_main_first=oDiv_section_main.getElementsByClassName('section_main_first');
var oAside_last_li=oAside.children[0].lastElementChild||oAside.children[0].lastChild;//注意兼容的先后顺序

var arr_color=['#ea5f8d','#0aa6e8','#64C333','#F15453','#19C8A9','#F7A945','#000'];  //几个侧边栏的颜色
//滚动页面时，侧边栏的背景颜色变化
document.onscroll=function (){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	//alert(scrollTop);
	if(scrollTop>600){
		bufferMove(oAside,{'width':36,'height':332},noBackgroundColor);
	}
	else{
		bufferMove(oAside,{'width':0,'height':0},noBackgroundColor);
	}
	if(scrollTop>2000){
		fnAsideColor(0);
	}
	if(scrollTop>2400){
		fnAsideColor(1);
	}
	if(scrollTop>3000){
		fnAsideColor(2);
	}
	if(scrollTop>3400){
		fnAsideColor(3);
	}
	if(scrollTop>4000){
		fnAsideColor(4);
	}
	if(scrollTop>4400){
		fnAsideColor(5);
	}
	if(scrollTop>5000){
		fnAsideColor(6);
	}
};
//点击侧边栏，跳转到相应的内容处
for(var i=0;i<aAside_color.length;i++){
	aAside_color[i].index=i;
	aAside_color[i].onmouseover=function (){
		if(this.getAttribute('_color')){
			return false;
		}
		else{
			this.style.backgroundColor=arr_color[this.index];
			//this.style.zIndex=100;
		}
	}
	aAside_color[i].onmouseout=function (){
		if(this.getAttribute('_color')){
			return false;
		}
		else{
			this.style.backgroundColor='';
		}
	}
	aAside_color[i].onclick=function (){
		var iTarget_aside=0;
		switch (this.index){
		case 0:
			iTarget_aside=2200;
			break;
		case 1:
			iTarget_aside=2700;
			break;
		case 2:
			iTarget_aside=3300;
			break;
		case 3:
			iTarget_aside=3800;
			break;
		case 4:
			iTarget_aside=4400;
			break;
		case 5:
			iTarget_aside=4900;
			break;
		case 6:
			iTarget_aside=5500;
			break;
		}
		scrollMove(iTarget_aside);
	}
}
//点击回到顶部
oAside_last_li.onclick=function (){
	var iTarget_aside=0;
	scrollMove(iTarget_aside);
}
function fnAsideColor(num_aside){
	/*for(var i=0;i<aAside_color.length;i++){
		aAside_color[i].style.backgroundColor='';
		aAside_color[i].setAttribute('_color','');
	}*/
	noBackgroundColor();
	aAside_color[num_aside].style.backgroundColor=arr_color[num_aside];
	aAside_color[num_aside].setAttribute('_color','good');
}
function scrollMove(iTarget){
	var iSpeed=0;
	var timer=null;
	clearInterval(timer);
	timer=setInterval(function (){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		iSpeed=(iTarget-scrollTop)/5;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		document.body.scrollTop=scrollTop+iSpeed;
		document.documentElement.scrollTop=scrollTop+iSpeed;
		if(scrollTop==iTarget){
			clearInterval(timer);
		}
	},30);
}
function noBackgroundColor(){
	for(var i=0;i<aAside_color.length;i++){
		aAside_color[i].style.backgroundColor='';
		aAside_color[i].setAttribute('_color','');
	}
}
/*猜你喜欢部分*/
var arr_maybeLike=[
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_1.jpg','txt':'【官方旗舰店】华为honor/荣誉 荣耀8青春版全网通智能手机正品','price':'￥1099.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_2.jpg','txt':'飞科剃须刀全身水洗飞科电动剃须刀男士刮胡刀充电式胡须刀FS373','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_3.jpg','txt':'宾博 D3重低音苹果安卓手机挂耳运动入耳式耳机通用男女生耳塞式','price':'￥39.9'},
	[{'url':'https://www.tmall.com/','img':'maybeLike/TB_4.jpg'},{'url':'https://www.tmall.com/','img':'maybeLike/TB_brand_1.jpg'},{'url':'https://www.tmall.com/','txt':'izod官方旗舰店'},'3.1万粉丝'],
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_5.jpg','txt':'收纳博士11件真空压缩袋送手泵 大号抽气棉被子衣物收纳袋真空袋','price':'￥39.9'},
	/*---*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_6.png','txt':'ROMOSS/罗马仕 sense6 20000M毫安充电宝 正品手机通用移动电源','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_7.jpg','txt':'【天猫超市】维达超人系列软包抽纸3层120抽24包整箱 中福纸巾','price':'￥89.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_8.png','txt':'2017新款打底裤外穿夏季韩版百搭春秋小脚裤黑色薄款春季九分女裤','price':'￥24.9'},
	[{'url':'https://www.tmall.com/','img':'maybeLike/TB_9.jpg'},{'url':'https://www.tmall.com/','img':'maybeLike/TB_brand_2.jpg'},{'url':'https://www.tmall.com/','txt':'梅赛德斯-奔驰官方旗舰店'},'10.6万粉丝'],
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_10.jpg','txt':'夏季简约T恤女装宽松t恤女短袖韩范卡通体恤打底衫女上衣韩版女装','price':'￥39.9'},
	/*---*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_11.jpg','txt':'【天猫超市】维达蓝色经典系列卫生纸巾3层140g27卷有芯卷纸 箱装','price':'￥71.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_12.jpg','txt':'ROZO双头眉笔防水防汗不脱色持久一字眉初学者不晕染带眉刷非眉粉','price':'￥16.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_13.jpg','txt':'TP-LINK无线路由器TL-WR886N450M家用穿墙王 智能告诉穿墙wifi','price':'￥99.9'},
	[{'url':'https://www.tmall.com/','img':'maybeLike/TB_14.jpg'},{'url':'https://www.tmall.com/','img':'maybeLike/TB_brand_3.jpg'},{'url':'https://www.tmall.com/','txt':'ellehomme官方旗舰店'},'14.7万粉丝'],
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_15.png','txt':'飞科吹风机家用大功率电吹风发廊理发店学生宿舍冷热风吹风筒静音','price':'￥44.9'},
	/*---*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_16.png','txt':'蒙古包蚊帐三开门1.8米床双人有底1.5米支架拉链家用1.2米学生宿舍','price':'￥48.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_17.png','txt':'【三只松鼠_碧根果210g×2袋】零食坚果山核桃长寿果干果奶油味','price':'￥39.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_18.jpg','txt':'【天猫超市】光明莫斯利安200g*6盒*4组常温酸奶量贩更优惠','price':'￥159.2'},
	[{'url':'https://www.tmall.com/','img':'maybeLike/TB_19.jpg'},{'url':'https://www.tmall.com/','img':'maybeLike/TB_brand_4.jpg'},{'url':'https://www.tmall.com/','txt':'乔治白官方旗舰店'},'2.1万粉丝'],
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_20.png','txt':'鑫盾iPhone6数据线6s苹果5加长5s手机i6Plus六7P五ipad充电线器iP','price':'￥30.0'},
	/*以上是前面的四排，后续的则是一致的*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_21.jpg','txt':'红双喜电风扇家用落地扇宿舍机械台式立式工业学生寝室摇头扇','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_22.png','txt':'【三只松鼠_夏威夷果265g×2袋】零食坚果干果奶油味送开口器','price':'￥49.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_23.png','txt':'膜法世家三合一黑面膜套装21片春夏补水保湿清洁收缩毛孔面膜贴','price':'￥119.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_24.jpg','txt':'【天猫超市】金龙鱼 盘锦大米 蟹稻共生5kg 东北大米 人气爆款','price':'￥38.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_25.jpg','txt':'2017夏季薄款男士牛仔裤男修身小脚裤韩版潮流男裤休闲黑色裤子男','price':'￥69.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_26.jpg','txt':'【官方旗舰店】华为honor/荣耀 荣耀V9全网通智能大运存智能手机现货','price':'￥2799.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_27.jpg','txt':'【天猫超市】福临门 葵花籽油原香食用调和油 5L/桶 健康食用油','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_28.jpg','txt':'WRZ X6重低音电脑手机mp3K歌通用男女挂耳式运动入耳式线控麦耳机','price':'￥29.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_29.png','txt':'久量电蚊拍可充电式LED灯苍蝇拍大号网面电池灭蚊拍电蚊子拍','price':'￥29.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_30.png','txt':'奥义瑜伽垫初学者10MM加长防滑健身垫男女式加厚加宽无味瑜伽毯','price':'￥29.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_31.png','txt':'【释小龙代言】小状元溜冰鞋儿童全套男女直排轮寒冰轮滑鞋可调','price':'￥119.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_32.png','txt':'【2件套】夏季莫代尔男短袖t恤纯色v领半袖体恤打底衫男士衣服潮','price':'￥69.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_33.jpg','txt':'美的电磁炉Midea/美的 WK2102电磁炉特价家用只能电池炉灶正品','price':'￥189.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_34.jpg','txt':'百易特加厚真空压缩袋送电泵包邮棉被衣物真空收纳袋特大号','price':'￥48.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_35.png','txt':'英菲克可充电无线鼠标静音无声光电男女生电脑办公笔记本无限游戏','price':'￥29.8'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_36.png','txt':'美的正品大功率烫衣服挂烫机家用蒸汽手持挂立式迷你电熨斗熨烫机','price':'￥219.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_37.png','txt':'【江中旗舰店】江中猴菇早餐米稀15天装 营养米糊麦片 冲饮袋装原味','price':'￥98.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_38.jpg','txt':'蒙古包蚊帐1.8米床1.5双人家用有底三开门支架1.2米床单人学生宿舍','price':'￥48.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_39.jpg','txt':'2017新款Apple iPad 9.7英寸 平板电脑 32G/128G WiFi版 A9芯片','price':'￥3308.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_40.jpg','txt':'SUPOR/苏泊尔 CFXB40FC835-75电饭煲锅4L智能家用正品2-3-4-5-6','price':'￥339.0'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_41.png','txt':'Kindle官方旗舰店Kindle Paperwhite3亚马逊电子书阅读器电','price':'￥958.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_42.png','txt':'BYWOKY男士皮带真牛皮腰带平滑扣商务青年裤带男韩版潮男休闲','price':'￥29.99'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_43.png','txt':'百瑞源2016新货正宗宁夏枸杞子中宁枸杞子特级500g枸杞枸枸','price':'￥34.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_44.jpg','txt':'御泥坊盈透美肌黑面膜女收缩毛孔深层清洁控油玻尿酸面膜补水保湿','price':'￥129.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_45.png','txt':'宝家杰免手洗平板拖吧家用拖地神器旋转擦木地板地拖托把懒人拖布','price':'￥89.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_21.jpg','txt':'红双喜电风扇家用落地扇宿舍机械台式立式工业学生寝室摇头扇','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_22.png','txt':'【三只松鼠_夏威夷果265g×2袋】零食坚果干果奶油味送开口器','price':'￥49.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_23.png','txt':'膜法世家三合一黑面膜套装21片春夏补水保湿清洁收缩毛孔面膜贴','price':'￥119.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_24.jpg','txt':'【天猫超市】金龙鱼 盘锦大米 蟹稻共生5kg 东北大米 人气爆款','price':'￥38.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_25.jpg','txt':'2017夏季薄款男士牛仔裤男修身小脚裤韩版潮流男裤休闲黑色裤子男','price':'￥69.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_26.jpg','txt':'【官方旗舰店】华为honor/荣耀 荣耀V9全网通智能大运存智能手机现货','price':'￥2799.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_27.jpg','txt':'【天猫超市】福临门 葵花籽油原香食用调和油 5L/桶 健康食用油','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_28.jpg','txt':'WRZ X6重低音电脑手机mp3K歌通用男女挂耳式运动入耳式线控麦耳机','price':'￥29.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_29.png','txt':'久量电蚊拍可充电式LED灯苍蝇拍大号网面电池灭蚊拍电蚊子拍','price':'￥29.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_30.png','txt':'奥义瑜伽垫初学者10MM加长防滑健身垫男女式加厚加宽无味瑜伽毯','price':'￥29.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_31.png','txt':'【释小龙代言】小状元溜冰鞋儿童全套男女直排轮寒冰轮滑鞋可调','price':'￥119.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_32.png','txt':'【2件套】夏季莫代尔男短袖t恤纯色v领半袖体恤打底衫男士衣服潮','price':'￥69.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_33.jpg','txt':'美的电磁炉Midea/美的 WK2102电磁炉特价家用只能电池炉灶正品','price':'￥189.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_34.jpg','txt':'百易特加厚真空压缩袋送电泵包邮棉被衣物真空收纳袋特大号','price':'￥48.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_35.png','txt':'英菲克可充电无线鼠标静音无声光电男女生电脑办公笔记本无限游戏','price':'￥29.8'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_36.png','txt':'美的正品大功率烫衣服挂烫机家用蒸汽手持挂立式迷你电熨斗熨烫机','price':'￥219.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_37.png','txt':'【江中旗舰店】江中猴菇早餐米稀15天装 营养米糊麦片 冲饮袋装原味','price':'￥98.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_38.jpg','txt':'蒙古包蚊帐1.8米床1.5双人家用有底三开门支架1.2米床单人学生宿舍','price':'￥48.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_39.jpg','txt':'2017新款Apple iPad 9.7英寸 平板电脑 32G/128G WiFi版 A9芯片','price':'￥3308.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_40.jpg','txt':'SUPOR/苏泊尔 CFXB40FC835-75电饭煲锅4L智能家用正品2-3-4-5-6','price':'￥339.0'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_41.png','txt':'Kindle官方旗舰店Kindle Paperwhite3亚马逊电子书阅读器电','price':'￥958.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_42.png','txt':'BYWOKY男士皮带真牛皮腰带平滑扣商务青年裤带男韩版潮男休闲','price':'￥29.99'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_43.png','txt':'百瑞源2016新货正宗宁夏枸杞子中宁枸杞子特级500g枸杞枸枸','price':'￥34.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_44.jpg','txt':'御泥坊盈透美肌黑面膜女收缩毛孔深层清洁控油玻尿酸面膜补水保湿','price':'￥129.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_45.png','txt':'宝家杰免手洗平板拖吧家用拖地神器旋转擦木地板地拖托把懒人拖布','price':'￥89.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_21.jpg','txt':'红双喜电风扇家用落地扇宿舍机械台式立式工业学生寝室摇头扇','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_22.png','txt':'【三只松鼠_夏威夷果265g×2袋】零食坚果干果奶油味送开口器','price':'￥49.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_23.png','txt':'膜法世家三合一黑面膜套装21片春夏补水保湿清洁收缩毛孔面膜贴','price':'￥119.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_24.jpg','txt':'【天猫超市】金龙鱼 盘锦大米 蟹稻共生5kg 东北大米 人气爆款','price':'￥38.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_25.jpg','txt':'2017夏季薄款男士牛仔裤男修身小脚裤韩版潮流男裤休闲黑色裤子男','price':'￥69.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_26.jpg','txt':'【官方旗舰店】华为honor/荣耀 荣耀V9全网通智能大运存智能手机现货','price':'￥2799.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_27.jpg','txt':'【天猫超市】福临门 葵花籽油原香食用调和油 5L/桶 健康食用油','price':'￥99.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_28.jpg','txt':'WRZ X6重低音电脑手机mp3K歌通用男女挂耳式运动入耳式线控麦耳机','price':'￥29.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_29.png','txt':'久量电蚊拍可充电式LED灯苍蝇拍大号网面电池灭蚊拍电蚊子拍','price':'￥29.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_30.png','txt':'奥义瑜伽垫初学者10MM加长防滑健身垫男女式加厚加宽无味瑜伽毯','price':'￥29.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_31.png','txt':'【释小龙代言】小状元溜冰鞋儿童全套男女直排轮寒冰轮滑鞋可调','price':'￥119.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_32.png','txt':'【2件套】夏季莫代尔男短袖t恤纯色v领半袖体恤打底衫男士衣服潮','price':'￥69.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_33.jpg','txt':'美的电磁炉Midea/美的 WK2102电磁炉特价家用只能电池炉灶正品','price':'￥189.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_34.jpg','txt':'百易特加厚真空压缩袋送电泵包邮棉被衣物真空收纳袋特大号','price':'￥48.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_35.png','txt':'英菲克可充电无线鼠标静音无声光电男女生电脑办公笔记本无限游戏','price':'￥29.8'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_36.png','txt':'美的正品大功率烫衣服挂烫机家用蒸汽手持挂立式迷你电熨斗熨烫机','price':'￥219.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_37.png','txt':'【江中旗舰店】江中猴菇早餐米稀15天装 营养米糊麦片 冲饮袋装原味','price':'￥98.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_38.jpg','txt':'蒙古包蚊帐1.8米床1.5双人家用有底三开门支架1.2米床单人学生宿舍','price':'￥48.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_39.jpg','txt':'2017新款Apple iPad 9.7英寸 平板电脑 32G/128G WiFi版 A9芯片','price':'￥3308.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_40.jpg','txt':'SUPOR/苏泊尔 CFXB40FC835-75电饭煲锅4L智能家用正品2-3-4-5-6','price':'￥339.0'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_41.png','txt':'Kindle官方旗舰店Kindle Paperwhite3亚马逊电子书阅读器电','price':'￥958.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_42.png','txt':'BYWOKY男士皮带真牛皮腰带平滑扣商务青年裤带男韩版潮男休闲','price':'￥29.99'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_43.png','txt':'百瑞源2016新货正宗宁夏枸杞子中宁枸杞子特级500g枸杞枸枸','price':'￥34.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_44.jpg','txt':'御泥坊盈透美肌黑面膜女收缩毛孔深层清洁控油玻尿酸面膜补水保湿','price':'￥129.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_45.png','txt':'宝家杰免手洗平板拖吧家用拖地神器旋转擦木地板地拖托把懒人拖布','price':'￥89.9'},
	/*--*/
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_31.png','txt':'【释小龙代言】小状元溜冰鞋儿童全套男女直排轮寒冰轮滑鞋可调','price':'￥119.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_32.png','txt':'【2件套】夏季莫代尔男短袖t恤纯色v领半袖体恤打底衫男士衣服潮','price':'￥69.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_33.jpg','txt':'美的电磁炉Midea/美的 WK2102电磁炉特价家用只能电池炉灶正品','price':'￥189.0'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_34.jpg','txt':'百易特加厚真空压缩袋送电泵包邮棉被衣物真空收纳袋特大号','price':'￥48.9'},
	{'url':'https://www.tmall.com/','img':'maybeLike/TB_35.png','txt':'英菲克可充电无线鼠标静音无声光电男女生电脑办公笔记本无限游戏','price':'￥29.8'},
];
[{'url':'https://www.tmall.com/','img':'maybeLike/TB_9.jpg'},{'url':'https://www.tmall.com/','img':'maybeLike/TB_brand_2.jpg'},{'url':'https://www.tmall.com/','txt':'梅赛德斯-奔驰官方旗舰店'},'10.6万粉丝']

var re=/\./g;
var oDiv_maybeLike=document.getElementById('maybeLike');
var oUl_maybeLike=oDiv_maybeLike.getElementsByTagName('ul')[0];
var str_maybeL='';
var num_mL=0;
var iNum_begin=5500;  //当滚动到这个位置时，猜你喜欢部分就会再加载
/*for(var i=0;i<arr_maybeLike.length;i++){
	//var oLi_maybeLike=document.createElement('li');
	if(!arr_maybeLike[i].length){
		var sIndex=arr_maybeLike[i]['price'].search(re);
		str_maybeL+="<li><a href="+arr_maybeLike[i]['url']+"><img src="+arr_maybeLike[i]['img']+"><span class='maybeLike_txt_top'>"+arr_maybeLike[i]['txt']+"</span><span class='maybeLike_txt_bottom'>"+arr_maybeLike[i]['price'].slice(0,sIndex)+"<i>"+arr_maybeLike[i]['price'].slice(sIndex,)+"</i></span></a></li>";
	}
	else{
		str_maybeL+="<li class='maybeLike_li'><a class='maybeLike_li_img' href="+arr_maybeLike[i][0]['url']+"><img src="+arr_maybeLike[i][0]['img']+" /></a><a class='maybeLike_li_brand' href="+arr_maybeLike[i][1]['url']+"><img src="+arr_maybeLike[i][1]['img']+" /></a><a class='maybeLike_li_txt' href="+arr_maybeLike[i][2]['url']+">"+arr_maybeLike[i][2]['txt']+"</a><p>"+arr_maybeLike[i][3]+"</p></li>";
	}
}*/

addLi_inOul();
function maybeLikeShow(){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	if(scrollTop>iNum_begin){
		addLi_inOul();
		iNum_begin+=600;
	}
}
addEvent(document,'scroll',maybeLikeShow);
function addLi_inOul(){
	//var str_maybeL='';
	if(num_mL+10>=arr_maybeLike.length){
		num_mL=arr_maybeLike.length;
	}
	for(var i=num_mL;i<num_mL+10;i++){
		if(num_mL==arr_maybeLike.length){
			break;
		}
		else{
			if(!arr_maybeLike[i].length){
				var sIndex=arr_maybeLike[i]['price'].search(re);
				str_maybeL+="<li><a href="+arr_maybeLike[i]['url']+"><img src="+arr_maybeLike[i]['img']+"><span class='maybeLike_txt_top'>"+arr_maybeLike[i]['txt']+"</span><span class='maybeLike_txt_bottom'>"+arr_maybeLike[i]['price'].slice(0,sIndex)+"<i>"+arr_maybeLike[i]['price'].slice(sIndex)+"</i></span></a></li>";
			}
			else{
				str_maybeL+="<li class='maybeLike_li'><a class='maybeLike_li_img' href="+arr_maybeLike[i][0]['url']+"><img src="+arr_maybeLike[i][0]['img']+" /></a><a class='maybeLike_li_brand' href="+arr_maybeLike[i][1]['url']+"><img src="+arr_maybeLike[i][1]['img']+" /></a><a class='maybeLike_li_txt' href="+arr_maybeLike[i][2]['url']+">"+arr_maybeLike[i][2]['txt']+"</a><p>"+arr_maybeLike[i][3]+"</p></li>";
			}
		}
		
	}
	num_mL+=10;
	oUl_maybeLike.innerHTML=str_maybeL;
	oDiv_maybeLike.style.height=oDiv_maybeLike.children[0].offsetHeight+oUl_maybeLike.offsetHeight+oDiv_maybeLike.children[2].offsetHeight+'px';
}

function addEvent(obj,evname,fn){   //事件均不加on
	if(obj.addEventListener){
		obj.addEventListener(evname,fn,false);
	}
	else{
		obj.attachEvent('on'+evname,function (){
			fn.call(obj);
		})
	}
}

//-------------------右边的侧边栏-----------------------------------------------------

var oAside_Right=document.getElementById('aside_right');
var aoDiv_aside_right_show=oAside_Right.getElementsByClassName('aside_right_show');
 var oDiv_returnTop=oAside_Right.lastElementChild || oAside_Right.lastChild; 
bufferMove(oAside_Right,{right:0});
for(var i=0;i<aoDiv_aside_right_show.length;i++){
	aoDiv_aside_right_show[i].parentNode.onmouseover=function (){
		this.children[0].style.display='block';
		//this.children[0].style.opacity='1';
		bufferMove(this.children[0],{'opacity':100,'left':-90});
	};
	aoDiv_aside_right_show[i].parentNode.onmouseout=function (){
		bufferMove(this.children[0],{'opacity':0,'left':-110},function (){
			this.children[0].style.display='none';
		});
	};
}
oDiv_returnTop.onclick=function (){
	var iTarget_aside=0;
	scrollMove(iTarget_aside);
}






