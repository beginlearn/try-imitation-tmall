
//header标签顶部网站导航下拉框中的第一项内容 hot
var aLi_Hot=[{'name':'天猫超市','state':'noHot'},{'name':'喵鲜生','state':'noHot'},{'name':'科技产品','state':'new'},{'name':'女装产品','state':'hot'},{'name':'酷玩街','state':'noHot'},{'name':'内衣产品','state':'hot'},{'name':'试美妆','state':'noHot'},{'name':'运动新品','state':'noHot'},{'name':'时尚先生','state':'hot'},{'name':'精明妈咪','state':'noHot'},{'name':'吃乐会','state':'new'},{'name':'企业采购','state':'noHot'},{'name':'会员积分','state':'noHot'},{'name':'天猫国际','state':'noHot'}];
//header标签顶部网站导航下拉框中的第二项内容 market
var aLi_Market=[{'name':'美妆','state':'noHot'},{'name':'电器','state':'noHot'},{'name':'女装','state':'hot'},{'name':'男装','state':'hot'},{'name':'女鞋','state':'noHot'},{'name':'男鞋','state':'noHot'},{'name':'内衣','state':'hot'},{'name':'箱包','state':'noHot'},{'name':'运动','state':'noHot'},{'name':'母婴','state':'noHot'},{'name':'家装','state':'noHot'},{'name':'医药','state':'noHot'},{'name':'食品','state':'noHot'},{'name':'配饰','state':'new'},{'name':'汽车','state':'noHot'}];
//header标签顶部网站导航下拉框中的第三项内容 brand
var aLi_Brand=['尚天猫','大牌街','潮牌街','天猫原创','什么牌子好'];

//从此处开始写一个可以更改header标签顶部网站导航下拉框内容的代码
var oDiv_wn=document.getElementById('website_nav');
var aUl_wn=oDiv_wn.getElementsByTagName('ul');
//更新header标签顶部网站导航下拉框中的hot、Market内容 
/*for(var i=0;i<aLi_Hot.length;i++){
	var oLi=document.createElement('li');
	if(aLi_Hot[i]['state']=='noHot'){
		oLi.innerHTML="<a href='#'>"+aLi_Hot[i]['name']+"</a>";
	}
	else{
		if(aLi_Hot[i]['state']=='new'){
			oLi.innerHTML="<a class='wn_a' href='#'>"+aLi_Hot[i]['name']+"<img class='wn_img' src='tm_top_new.gif' /></a>";
			
		}
		else{
			oLi.innerHTML="<a class='wn_a' href='#'>"+aLi_Hot[i]['name']+"<img class='wn_img' src='tm_top_hot.gif' /></a>";
		}
	}
	aUl_wn[0].appendChild(oLi);
}*/
wnAppend(aLi_Hot,aUl_wn[0]);
wnAppend(aLi_Market,aUl_wn[1]);
function wnAppend(obj,oParent){
	for(var i=0;i<obj.length;i++){
		var oLi=document.createElement('li');
		if(obj[i]['state']=='noHot'){
			oLi.innerHTML="<a href='#'>"+obj[i]['name']+"</a>";
		}
		else{
			if(obj[i]['state']=='new'){
				oLi.innerHTML="<a class='wn_a' href='#'>"+obj[i]['name']+"<img class='wn_img' src='tm_top_new.gif' /></a>";
				
			}
			else{
				oLi.innerHTML="<a class='wn_a' href='#'>"+obj[i]['name']+"<img class='wn_img' src='tm_top_hot.gif' /></a>";
			}
		}
		oParent.appendChild(oLi);
	}
}

//更新header标签顶部网站导航下拉框中的Brand内容
for(var i=0;i<aLi_Brand.length;i++){
	var oLi=document.createElement('li');
	oLi.innerHTML="<a href='#'>"+aLi_Brand[i]+"</a>";
	aUl_wn[2].appendChild(oLi);
}

//处理搜索框下面的热点搜索项
function hotPoint(){
	var aLi_hotPoint=[{'name':'衬衫男','color':'red'},{'name':'连衣裙','color':'#999'},{'name':'四件套','color':'#999'},{'name':'笔记本电脑','color':'red'},{'name':'吊顶灯','color':'#999'},{'name':'奶粉','color':'#999'},{'name':'运动鞋','color':'red'},{'name':'双肩包','color':'#999'},{'name':'口红','color':'red'}];
	var str_hotPoint='';
	var oDiv_hc_search=document.getElementById('hc_search');
	var oUl_hotPoint=document.createElement('ul');
	for(var i=0;i<aLi_hotPoint.length;i++){
		str_hotPoint+="<li><a href='#' style='color:"+aLi_hotPoint[i]['color']+"'>"+aLi_hotPoint[i]['name']+"</a></li>";
	}
	oUl_hotPoint.innerHTML=str_hotPoint;
	oUl_hotPoint.className='hc_search_hotPoint';
	oDiv_hc_search.appendChild(oUl_hotPoint);
	}
hotPoint();

//处理nav导航栏中鼠标移入，有一个小猫升起的问题
naverCatMove();
function naverCatMove(){
	var oDiv_naver=document.getElementById('naver');
	var aA_naver=oDiv_naver.getElementsByTagName('a');
	var aImg_naver=oDiv_naver.getElementsByTagName('img');
	var aImg_naver_cat=[];
	for(var i=0;i<aImg_naver.length;i++){
		if(aImg_naver[i].className=='naver_cat'){
			aImg_naver_cat.push(aImg_naver[i]);
		}
	}
	//alert(aImg_naver_cat.length);
	for(var i=0;i<aA_naver.length;i++){
		aA_naver[i].index=i;
		aA_naver[i].onmouseover=function (){
			aImg_naver_cat[this.index].style.left=Math.round((this.offsetWidth-aImg_naver_cat[this.index].offsetWidth)/2)+'px';
			aImg_naver_cat[this.index].style.transition='0.5s';
			aImg_naver_cat[this.index].style.top='-9px';
		};
		aA_naver[i].onmouseout=function (){
			aImg_naver_cat[this.index].style.transition='0s';
			aImg_naver_cat[this.index].style.top='0px';
		};
	}
}


















