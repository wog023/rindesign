



function about(){
	now = 'about'
	$('.container').addClass('container-footer')
	$('#home,#contact,#works').fadeOut(800)
	$('#about').fadeIn(800)	
	$('.sidebar,.top').fadeIn(800)
	sideClear()
	$('.side-about p').addClass('side-about-now')
	// setTimeout(function(){
	// 	$('.side-about').removeClass('side-click')
	// },100)

}