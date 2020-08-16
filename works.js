// var web = [web1,web2]
// var web2 ='1'
// var workblock1 = {name:'.work-block1 .name',name1:'.work-block1 .name'}
// var web1 = {name:'4CloveR1',type:'music plater2',img:'url(images/4clover.png)'}

var web = [
	{},
	{name:'4CloveR',type:'music plater',img:'url(images/4clover.png)'},
	{name:'Hotelroom',type:'website',img:'url(images/hotelroom2.png)'},
	{name:'Rin Design',type:'website',img:'url(images/comingsoon.png)'}
]
var redesign = [
	{},
	{name:'路易莎咖啡 Redesign',type:'website',img:'url(images/louisa1.png)'},
	{name:'碳佐麻里 Redesign',type:'website',img:'url(images/tan.png)'},
	{name:'-',type:'-',img:'url(images/comingsoon.png)'}
]
var ui = [
	{},
	{name:'Sell Phone',type:'website',img:'url(images/sellphone2.jpg)'},
	{name:'Checkout',type:'webpage',img:'url(images/4clover.png)'},
	{name:'-',type:'-',img:'url(images/comingsoon.png)'}
]
var pixel = [
	{},
	{name:'呆呆獸',type:'pixel art (50*50px)',img:'url(images/呆呆獸.png)'},
	{name:'鬼斯',type:'pixel art (50*50px)',img:'url(images/鬼斯.png)'},
	{name:'風に薫る夏の記憶',type:'pixel art',img:'url(images/kaze.png)'}
]
function webShow(){
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',web[i].img)
		$('.work-block'+i+' .name').text(web[i].name) 
		$('.work-block'+i+' .type').text(web[i].type) 
	}
}
function redesignShow(){
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',redesign[i].img)
		$('.work-block'+i+' .name').text(redesign[i].name) 
		$('.work-block'+i+' .type').text(redesign[i].type) 
	}
}
function uiShow(){
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',ui[i].img)
		$('.work-block'+i+' .name').text(ui[i].name) 
		$('.work-block'+i+' .type').text(ui[i].type) 
	}
}
function pixelShow(){
	for(var i=1;i<=3;i++){
		$('.work-block'+i+' .pic').css('background-image',pixel[i].img)
		$('.work-block'+i+' .name').text(pixel[i].name) 
		$('.work-block'+i+' .type').text(pixel[i].type) 
	}
}
$('.web').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
	webShow()
})
$('.redesign').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
	redesignShow()
})
$('.ui').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
	uiShow()
})
$('.pixel').click(function(){
	$('.navbar p').removeClass('nav-choose')
	$(this).addClass('nav-choose')
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
		$('#home,#contact,#about').hide()
		$('#works').show()
		$('.sidebar').show()
		sideClear()
		$('.side-works p').addClass('side-works-now')
		now = 'works'
		// setTimeout(function(){
		// 	$('.side-works').removeClass('side-click')
		// },100)
	}

	function worksMobile(){

	}

