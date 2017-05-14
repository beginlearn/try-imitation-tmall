//article部分上层的js
var arr_af_img=[[{bg:'mainImg/TB1DVvSQpXXXXXbaXXXSutbFXXX.jpg_q100.jpg_.webp.jpg',url:'https://pages.tmall.com/wow/act/17176/mychy?spm=875.7931836/B.2016006.d1.QVdplp&wh_weex=true&pos=1&acm=07055-1.1003.2.1653645&scm=1003.2.07055-1.OTHER_1490793921960_1653645'},
{bg:'mainImg/small11.jpg',url:'https://pages.tmall.com/wow/tmall-3c/16342/awesomecollection?spm=875.7931836/B.2016006.2.QVdplp&trackInfo=20160815100201;4653384362;59603;534516179126;3;59603_534516179126;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;1;0&item_id=534516179126&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=7&activity_id=59603&acm=07055.1003.1.1192426&scm=1003.1.20160815.OTHER_0_1652097',bgcolor:'#c0f3e2'},
{bg:'mainImg/small12.jpg',url:'https://pages.tmall.com/wow/act/17106/heyueji1?spm=875.7931836/B.2016006.3.QVdplp&trackInfo=20160815100201;4708687582;59984;539384070628;3;59984_539384070628;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;2;0&item_id=539384070628&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=8&activity_id=59984&acm=07055.1003.1.1192426&scm=1003.1.20160815.OTHER_0_1655126',bgcolor:'#c0f3e2'}],
[{bg:'mainImg/TB1-2SeC6PpXXXXXaXpXXSutbFXXX.jpg',url:'http://www.robam.com/'}],
[{bg:'mainImg/TB1-3n2FPQpXXXXckaXXXSutbFXXX.jpg',url:'https://nutrilon.tmall.com/?spm=875.7931836/B.2016006.d3.QVdplp&pos=1&acm=201602266.1003.1.981201&scm=1003.1.201602266.THJH_26799-C1S1_981201'},
{bg:'mainImg/small31.jpg',url:'https://pages.tmall.com/wow/baihuo/17215/tmfsj?spm=875.7931836/B.2016006.6.QVdplp&trackInfo=20160815100201;4654963422;59629;534651688334;3;59629_534651688334;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;3;0&item_id=534651688334&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=9&activity_id=59629&acm=07055.1003.1.1192426&scm=1003.1.20160815.OTHER_0_1652045',bgcolor:'#f6feff'},
{bg:'mainImg/small32.jpg',url:'https://content.tmall.com/wow/pegasus/subject/0/669642169/7321577?spm=875.7931836/B.2016006.7.QVdplp&trackInfo=20160815100201;4020897702;54087;539532720026;3;54087_539532720026;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;4;0&item_id=539532720026&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=10&activity_id=54087&acm=07055.1003.1.1192426&id=7321577&scm=1003.1.20160815.OTHER_0_1645986&gccpm=13323334.600.2.subject-1009',bgcolor:'#f6feff'}],
[{bg:'mainImg/TB1-4iFqRPXXXXXcrXpXXSutbFXXX.jpg',url:'https://detail.tmall.com/item.htm?id=35481983854&rn=bba19fed31f8275e24e31e79b1f059c0&abbucket=15&sku_properties=10187648:21959&ali_trackid=17_453c4be85a3a328fe37a0d2280fa670c&spm=875.7931836/B.2016006.d4.QVdplp'}],
[{bg:'mainImg/TB2-5munkkMFkpuFjSspnXXb4qFXa_!!46-0-yamato.jpg_q100.jpg_.webp.jpg',url:'https://pages.tmall.com/wow/jz/17173/design?spm=875.7931836/B.2016006.d5.QVdplp&wh_weex=true&trackInfo=7055201;4688964572;59868;539730166399;3;59868_539730166399;1007.14152.68669.100200300000000;36c60207-a94b-40e2-8464-ecdfdd1291f5;1;0&item_id=539730166399&pvid=&pos=2&activity_id=59868&acm=07055-2.1003.2.1654179&scm=1003.2.07055-2.OTHER_1489485270497_1654179'},{bg:'mainImg/small51.jpg',url:'https://pages.tmall.com/wow/tmall-3c/14619/2017414?spm=875.7931836/B.2016006.10.QVdplp&trackInfo=20160815100201;4633424962;58753;546880479651;3;58753_546880479651;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;5;0&item_id=546880479651&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=11&activity_id=58753&acm=07055.1003.1.1192426&scm=1003.1.20160815.OTHER_0_1655353',bgcolor:'#bef5e3'},{bg:'mainImg/small52.jpg',url:'https://pages.tmall.com/wow/jz/17173/design?spm=875.7931836/B.2016006.11.QVdplp&wh_weex=true&trackInfo=20160815100201;4641122772;59259;523050891401;3;59259_523050891401;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;6;0&item_id=523050891401&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=12&activity_id=59259&acm=07055.1003.1.1192426&scm=1003.1.20160815.OTHER_0_1654038',bgcolor:'#bef5e3'}],
[{bg:'mainImg/TB1-6eZdoQFXXXXcAXXXXXXXXXXXX-1130-500.jpg_q100.jpg_.webp.jpg',url:'https://content.tmall.com/wow/pegasus/subject/0/2616970884/7378042?spm=875.7931836/B.2016006.d6.QVdplp&pos=3&acm=07055-3.1003.2.1655628&scm=1003.2.07055-3.OTHER_1489772029892_1655628'},
{bg:'mainImg/small61.jpg',url:'https://pages.tmall.com/wow/miao/act/2017xinqitian?spm=875.7931836/B.2016006.13.QVdplp&trackInfo=20160815100201;4705657652;60028;538878793708;3;60028_538878793708;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;7;0&item_id=538878793708&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=13&activity_id=60028&acm=07055.1003.1.1192426&scm=1003.1.20160815.OTHER_0_1655649',bgcolor:'ffdbbb'},
{bg:'mainImg/small62.jpg',url:'https://pages.tmall.com/wow/act/14619/xxsh?spm=875.7931836/B.2016006.14.QVdplp&wh_weex=true&trackInfo=20160815100201;4544610982;58418;542451420306;3;58418_542451420306;1007.14152.68669.100200300000000;e707c6c5-1a78-4b34-8b14-1def35be1e3c;8;0&item_id=542451420306&pvid=e707c6c5-1a78-4b34-8b14-1def35be1e3c&pos=14&activity_id=58418&acm=07055.1003.1.1192426&scm=1003.1.20160815.OTHER_0_1642516',bgcolor:'ffdbbb'}]];

var arr_af_img_bgcolor=['#A7E6E1','#E8E8E8','#fcc26e','#E8E8E8','#E4DECA','#4678ff'];
var aSection=document.getElementsByTagName('section');
var oDiv_af_img=document.getElementById('af_img');
var oUl_in_afImg=oDiv_af_img.children[0];
var aLi=oUl_in_afImg.children;
var aDiv_in_afImg=oDiv_af_img.getElementsByTagName('div');
var num=0;
var timer=null;
//动态建立6个展示的图片
for(var i=0;i<arr_af_img.length;i++){
	var oDiv_create=document.createElement('div');
	if(arr_af_img[i].length==1){
		var oA=document.createElement('a');
		oA.className='af_img_bg';
		oA.href=arr_af_img[i][0].url;
		oA.target='_blank';
		oA.innerHTML='<img src="'+arr_af_img[i][0].bg+'" />';
		oDiv_create.appendChild(oA);
	}
	else{
		for(var j=0;j<arr_af_img[i].length;j++){
			var oA=document.createElement('a');
			if(j==0){
				oA.className='af_img_bg';
			}
			else{
				oA.className='af_img_small';
			}
			oA.href=arr_af_img[i][j].url;
			oA.target='_blank';
			oA.style.backgroundColor='';
			oA.innerHTML='<b style="background-image:url('+arr_af_img[i][j].bg+');"></b>';
			oDiv_create.appendChild(oA);
		}
	}
	oDiv_af_img.appendChild(oDiv_create);
}
changeImg();
timer=setInterval(changeNum,3000);
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function (){
		clearInterval(timer);
		num=this.index;
		changeImg();
	};
	aLi[i].onmouseout=function (){
		timer=setInterval(changeNum,3000);
	};
}
function changeNum(){
	aDiv_in_afImg[num].style.opacity='0';
	aDiv_in_afImg[num].style.filter='alpha(opacity:0)';
	num++;
	if(num==6){
		num=0;
	}
	setTimeout(changeImg,300);
}
function changeImg(){
	for(var i=0;i<aDiv_in_afImg.length;i++){
		aDiv_in_afImg[i].className='hide';
		aLi[i].style.backgroundColor='rgba(162,162,162,0.8)';
	}
	aLi[num].style.backgroundColor='rgba(241,241,241,0.8)';
	aDiv_in_afImg[num].style.opacity='1';
	aDiv_in_afImg[num].style.filter='alpha(opacity:100)';
	aDiv_in_afImg[num].className='';
	aSection[0].style.backgroundColor=arr_af_img_bgcolor[num];
}


/*--------------------------------------------------------------------------------------------------------*/
//处理article中商品框的动作

var oDiv_data=[{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#e54077'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#e54077'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#e54077'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#e54077'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#e54077'},{'txt':'百搭船袜','colr':'#e54077'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#e54077'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#e54077'},{'txt':'风衣'},{'txt':'短外套','colr':'#e54077'},{'txt':'卫衣'},{'txt':'小西装','colr':'#e54077'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#e54077'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#e54077'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#e54077'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#e54077'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#e54077'},{'txt':'蕾丝半身裙','colr':'#e54077'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#e54077'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#e54077'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#e54077'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#e54077'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#e54077'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#e54077'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#e54077'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#e54077'},{'txt':'唐装'},{'txt':'小码女服','colr':'#e54077'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#e54077'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#e54077'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#e54077'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#e54077'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#e54077'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#e54077'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#e54077'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#e54077'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#e54077'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#e54077'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#e54077'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']},
{
'left':[
	{
		'headline':'当季流行>','content':[{'txt':'2017春季新品','colr':'#666'},{'txt':'商场同款'},{'txt':'气质连衣裙'},{'txt':'羽绒服','colr':'#666'},{'txt':'中长款毛呢'},{'txt':'百搭休闲裤','colr':'#666'},{'txt':'无痕文胸'},{'txt':'运动文胸','colr':'#666'},{'txt':'超柔内裤'},{'txt':'潮流家居服','colr':'#666'},{'txt':'百搭船袜','colr':'#666'}]
	},
	{
		'headline':'精选上装>','content':[{'txt':'羽绒服','colr':'#666'},{'txt':'毛衣'},{'txt':'针织衫'},{'txt':'衬衫','colr':'#666'},{'txt':'风衣'},{'txt':'短外套','colr':'#666'},{'txt':'卫衣'},{'txt':'小西装','colr':'#666'}]
	},
	{
		'headline':'浪漫裙装>','content':[{'txt':'连衣裙','colr':'#666'},{'txt':'蕾丝连衣裙'},{'txt':'印花连衣裙'},{'txt':'真丝连衣裙','colr':'#666'},{'txt':'半身裙'},{'txt':'牛仔裙','colr':'#666'},{'txt':'百褶裙'},{'txt':'背心裙','colr':'#666'},{'txt':'a字裙'},{'txt':'棉麻连衣裙','colr':'#666'},{'txt':'蕾丝半身裙','colr':'#666'},{'txt':'包臀'},{'txt':'长袖连衣裙'}]
	},
	{
		'headline':'女士下装>','content':[{'txt':'牛仔裤','colr':'#666'},{'txt':'休闲裤'},{'txt':'哈伦裤'},{'txt':'背带裤','colr':'#666'},{'txt':'小脚裤'},{'txt':'西装裤','colr':'#666'},{'txt':'打底裤'},{'txt':'阔腿裤','colr':'#666'},{'txt':'短裤'}]
	},
	{
		'headline':'特色女装>','content':[{'txt':'时尚气质套装','colr':'#666'},{'txt':'休闲运动套'},{'txt':'精选妈妈装'},{'txt':'大码女装','colr':'#666'},{'txt':'职业旗袍'},{'txt':'优雅旗袍','colr':'#666'},{'txt':'精致礼服'},{'txt':'婚纱','colr':'#666'},{'txt':'唐装'},{'txt':'小码女服','colr':'#666'}]
	},
	{
		'headline':'文胸塑身>','content':[{'txt':'光面文胸','colr':'#666'},{'txt':'运动文胸'},{'txt':'美背文胸'},{'txt':'羽绒服','colr':'#666'},{'txt':'聚拢文胸'},{'txt':'大杯文胸','colr':'#666'},{'txt':'轻薄塑身'}]
	},
	{
		'headline':'家居服>','content':[{'txt':'春夏家居服','colr':'#666'},{'txt':'纯棉家居服'},{'txt':'莫代尔家居服'},{'txt':'真丝家居服','colr':'#666'},{'txt':'春夏睡裙'},{'txt':'男士家居服','colr':'#666'},{'txt':'情侣家居服'},{'txt':'性感睡裙','colr':'#666'}]
	},
	{
		'headline':'内裤背心>','content':[{'txt':'男士内裤','colr':'#666'},{'txt':'女士内裤'},{'txt':'男士内裤多条装'},{'txt':'女士内裤多条装','colr':'#666'},{'txt':'莫代尔内裤'}]
	},
	{
		'headline':'袜类>','content':[{'txt':'船袜','colr':'#666'},{'txt':'长筒丝袜'},{'txt':'男士运动袜'},{'txt':'女士装饰袜','colr':'#666'},{'txt':'潮流渔网袜'}]
	}
	
],'right':['pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB3.jpg','pinpai/TB4.jpg','pinpai/TB1.jpg','pinpai/TB3.jpg','pinpai/TB2.jpg','pinpai/TB3.jpg','pinpai/TB5.jpg']}
];

var oDiv_article_first=document.getElementById('article_first');
var aDiv_af_hide=[];
var oUl_af_ul=document.getElementById('af_ul');
var aLi_af_ul=oUl_af_ul.children;
var arr_af_ul=['#e54077','#427def','#6347ed','#e54077','#6347ed','#427def','#e54077','#f7a831','#f7a831','#427def','#dd2727','#427def','#f7a831','#43c9b3','#dd2727','#43c9b3'];

//该循环生成16个隐藏的窗口
for(var i=0;i<oDiv_data.length;i++){
	txtColor(oDiv_data[i],arr_af_ul[i]);
	setWin(oDiv_data[i],oDiv_af_img);
}
//该循环生成class是af_hide的对象列表
for(var i=0;i<oDiv_article_first.children.length;i++){
	if(oDiv_article_first.children[i].className=='af_hide'){
		aDiv_af_hide.push(oDiv_article_first.children[i]);
	}
}

//该循环表示，鼠标移入移出，窗口的出现与消失

for(var i=0;i<aLi_af_ul.length;i++){
	aLi_af_ul[i].index=i;
	aDiv_af_hide[i].index=i;
	aLi_af_ul[i].onmouseover=function (){
		this.style.backgroundColor='#fff';
		this.children[0].style.color=arr_af_ul[this.index];
		aDiv_af_hide[this.index].style.display='block';
	};
	aDiv_af_hide[i].onmouseover=function (){
		aLi_af_ul[this.index].style.backgroundColor='#fff';
		aLi_af_ul[this.index].style.color=arr_af_ul[this.index];
		this.style.display='block';
	};
	
	aLi_af_ul[i].onmouseout=function (){
			this.children[0].style.color='#000';
			this.style.backgroundColor='#eee';
			aDiv_af_hide[this.index].style.display='none';
		
	};
	aDiv_af_hide[i].onmouseout=function (){
			aLi_af_ul[this.index].children[0].style.color='#000';
			aLi_af_ul[this.index].style.backgroundColor='#eee';
			this.style.display='none';
	};
}

//处理oDiv_data中的文字颜色
function txtColor(obj,col){
	for(var i=0;i<obj['left'].length;i++){
		for(var j=0;j<obj['left'][i]['content'].length;j++){
			if(obj['left'][i]['content'][j]['colr']){
				obj['left'][i]['content'][j]['colr']=col;
			}
		}
	}
}

//建立隐藏窗口
function setWin(obj,parentObj){
	var oDiv_z=document.createElement('div');
	oDiv_z.className='af_hide';
	for(var attr in obj){
		var oDiv=document.createElement('div');
		if(attr=='left'){
			var oUl=document.createElement('ul');
			oUl.className='afh_left_ul';
			for(var i=0;i<obj['left'].length;i++){
				var oLi=document.createElement('li');
				var str='';
				for(j=0;j<obj['left'][i]['content'].length;j++){
					str+="<a href='#' target='_blank' style='color:"+obj['left'][i]['content'][j]['colr']+";'>"+obj['left'][i]['content'][j]['txt']+"</a>";
				}
				oLi.innerHTML="<h4>"+obj['left'][i]['headline']+"</h4><div>"+str+"</div>";
				oUl.appendChild(oLi);
			}
			oDiv.appendChild(oUl);
			oDiv.className='afh_left';
		}
		else if(attr=='right'){
			oDiv.className='afh_right';
			var str2='';
			for(var i=0;i<obj['right'].length;i++){
				str2+="<a href='#' target='_blank'><img src='"+obj['right'][i]+"' /></a>";
			}
			oDiv.innerHTML=str2;
		}
		oDiv_z.appendChild(oDiv);
	}
	parentObj.parentNode.insertBefore(oDiv_z,parentObj);
}


//计算json的长度的函数
function jsonLength(obj){
	var len=0;
	for(attr in obj){
		len++;
	}
	return len;
}