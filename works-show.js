function worksShow(){
	$('.work-block .launch a').click(function(){

		if($('.show').css('z-index')==2){
			const imgSrc = $(this).attr('data-show')
			$('.showImg img').attr('src',imgSrc)
			$('.show').fadeIn()
			$('.show').css({'display':'flex'})
			$('html').addClass('container-fixed')
		}

	})


//點擊外部消失
	$('.show').click(function(evt) {
        if($(evt.target).parents(".showImg").length==0) {
            $('.show').fadeOut()
			$('html').removeClass('container-fixed')
      }
    });
}


