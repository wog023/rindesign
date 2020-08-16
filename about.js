



function about(){
	now = 'about'
	$('.container').addClass('container-footer')
	$('#home,#contact,#works').hide()
	$('#about').show()	
	$('.sidebar').show()
	sideClear()
	$('.side-about p').addClass('side-about-now')
	// setTimeout(function(){
	// 	$('.side-about').removeClass('side-click')
	// },100)

}