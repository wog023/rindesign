function copy() {
	$('.copy').click(function(){
		  $('body').append('<textarea id="clip_area">asps135794@gmail.com</textarea>');  
		  var clip_area = $('#clip_area');
		  clip_area.text();
		  clip_area.select();
		  document.execCommand('copy');		    
		  clip_area.remove();
	})
}
function cross(){
	$('.cross img').click(function(){
		
		$('.ball').css('animation-play-state','running')
		setTimeout(function(){
			$('.contact-content').hide()
		},1200)
		setTimeout(function(){
			$('#contact').hide()
		},3000)
		// setTimeout(function(){
		// 	$('.side-contact').removeClass('side-click')
		// },100)
		clear()
	})

}
function animationStop(){
	$('.contact-content').show()
	setTimeout(function(){
		$('.ball').css('animation-play-state','paused')
	},3000)
}



function contact(){
	// now = 'contact'
	// $('#home,#works,#about').hide()
	$('#contact').show()
	// setTimeout(function(){$('.ball').hide()},4000)
	copy()
	cross()
	animationStop()
}