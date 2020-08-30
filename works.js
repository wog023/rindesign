

var web = [
	{},
	{name:'4CloveR',type:'music plater',img:'url(images/4clover.png)',link:'https://wog023.github.io/4clover'},
	{name:'Hotelroom',type:'website',img:'url(images/hotelroom2.png)',link:'https://wog023.github.io/hotelroom'},
	{name:'Rin Design',type:'website',img:'url(images/rindesign.png)',link:'https://wog023.github.io/rindesign'}
]
var redesign = [
	{},
	{name:'路易莎咖啡 Redesign',type:'website',img:'url(images/louisa1.png)',link:'https://wog023.github.io/Redesign-louisacoffee'},
	{name:'碳佐麻里 Redesign',type:'website',img:'url(images/tan.png)',link:'https://i.imgur.com/TnawYM9.jpg'},
	{name:'-',type:'-',img:'url(images/comingsoon.png)',link:'javascript:void(0)'}
]
var ui = [
	{},
	{name:'Sell Phone',type:'website',img:'url(images/sellphone2.jpg)',link:'javascript:void(0)',src:'images/sellphone-full.jpg'},
	{name:'Checkout',type:'webpage',img:'url(images/4clover.png)',link:'javascript:void(0)',src:'images/checkout.png'},
	{name:'404 Page',type:'web page',img:'url(images/404page.png)',link:'javascript:void(0)',src:'images/404page.png'}
]
var pixel = [
	{},
	{name:'呆呆獸',type:'pixel art (50*50px)',img:'url(images/呆呆獸.png)',link:'javascript:void(0)',src:'images/呆呆獸.png'},
	{name:'鬼斯',type:'pixel art (50*50px)',img:'url(images/鬼斯.png)',link:'javascript:void(0)',src:'images/鬼斯.png'},
	{name:'風に薫る夏の記憶',type:'pixel art',img:'url(images/kaze.png)',link:'javascript:void(0)',src:'images/kaze.gif'}
]


function showPic(i){
	

}




//跳出分頁
$('.work-block .launch a').click(function(){this.target = "_blank";})
function webShow(){
	
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',web[i].img)
		$('.work-block'+i+' .name').text(web[i].name) 
		$('.work-block'+i+' .type').text(web[i].type)
		$('.work-block'+i+' .launch a').attr('href',web[i].link)
		$('.work-block .launch a').click(function(){this.target = "_blank";})//跳出分頁

	}
}
function redesignShow(){
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',redesign[i].img)
		$('.work-block'+i+' .name').text(redesign[i].name) 
		$('.work-block'+i+' .type').text(redesign[i].type) 
		$('.work-block'+i+' .launch a').attr('href',redesign[i].link)
		$('.work-block .launch a').click(function(){this.target = "_blank";})//跳出分頁

	}
}
function uiShow(){
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',ui[i].img)
		$('.work-block'+i+' .name').text(ui[i].name) 
		$('.work-block'+i+' .type').text(ui[i].type) 
		$('.work-block'+i+' .launch a').attr('href',ui[i].link)	
		$('.work-block .launch a').click(function(){this.target = "";})//不跳分頁
		$('.work-block'+i+' .launch a').attr('data-show',ui[i].src)
		worksShow()

	}
}
function pixelShow(){
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',pixel[i].img)
		$('.work-block'+i+' .name').text(pixel[i].name) 
		$('.work-block'+i+' .type').text(pixel[i].type) 
		$('.work-block'+i+' .launch a').attr('href',pixel[i].link)
		$('.work-block .launch a').click(function(){this.target = "";})//不跳分頁
		$('.work-block'+i+' .launch a').attr('data-show',pixel[i].src)
		worksShow()
	}
}
//選擇web
$('.web').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
	$('.show').css('z-index','-1')
	webShow()
})
//選擇redesign
$('.redesign').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
	$('.show').css('z-index','-1')
	redesignShow()
})
//選擇ui
$('.ui').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
	$('.show').css('z-index','2')
	uiShow()
})
//選擇pixel
$('.pixel').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
	$('.show').css('z-index','2')
	pixelShow()
})
webShow()





// $('.work-block1 .pic').css('background-image',web[0].img)
// $('.work-block1 .name').text(web[0].name) 
// $('.work-block1 .type').text(web[0].type) 

// $('.work-block2 .pic').css('background-image',web[1].img)
// $('.work-block2 .name').text(web[1].name) 
// $('.work-block2 .type').text(web[1].type) 















///////////////////////////////////////////////////////////////////
	function works(){
		$('.container').addClass('container-footer')
		$('#home,#contact,#about').fadeOut(800)
		$('#works').fadeIn(800)
		$('.sidebar,.top').fadeIn(800)
		sideClear()
		$('.side-works p').addClass('side-works-now')
		now = 'works'
		// setTimeout(function(){
		// 	$('.side-works').removeClass('side-click')
		// },100)
	}

	function worksMobile(){

	}

