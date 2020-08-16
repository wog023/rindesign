	function sideClear(){
		$('.side').removeClass('side-click')
		$('.side p').removeClass('side-home-now').removeClass('side-works-now').removeClass('side-about-now').removeClass('side-contact-now')
		console.log('468735')
	}
	function go(){
		$('.side-home a').click(function(){	
			if($('.side-home p').hasClass('side-home-now')){
				home()
			}
		})
		$('.side-works a').click(function(){	
			if($('.side-works p').hasClass('side-works-now')){
				works()
			}
		})
		$('.side-contact a').click(function(){	
			if($('.side-contact p').hasClass('side-contact-now')){
				contact()
			}
		})
		$('.side-about a').click(function(){	
			if($('.side-about p').hasClass('side-about-now')){
				about()
			}
		})
		
	}
	// setTimeout(function(){
	// 				$('.side').removeClass('side-click')
	// 			},100)


	function sideNow(){
		if (now=='works') {
			$('.side-works p:nth-of-type(1)').addClass('side-works-now')
		}else if (now=='about') {
			$('.side-about p:nth-of-type(1)').addClass('side-about-now')
		}else if (now=='contact') {
			$('.side-contact p:nth-of-type(1)').addClass('side-contact-now')
		}else if (now=='about') {
			$('.side-about p:nth-of-type(1)').addClass('side-about-now')
		}
		console.log(now)
	}

	function sideMobile(){
		$('.side a').removeAttr('href')
		$('.side').click(function(){
			$('.side').removeClass('side-click')
			$(this).addClass('side-click')
			$('.side p').css('opacity','1')
			$('.side p').removeClass('side-home-now').removeClass('side-works-now').removeClass('side-about-now').removeClass('side-contact-now')
			
		})

		$('.side-home').click(function(){			
			$('.side-home p').addClass('side-home-now')
			sideNow()
		})
		$('.side-works').click(function(){			
			$('.side-works p').addClass('side-works-now')
			sideNow()

		})
		$('.side-about').click(function(){			
			$('.side-about p').addClass('side-about-now')
			sideNow()
		})
		$('.side-contact').click(function(){			
			$('.side-contact p').addClass('side-contact-now')
			sideNow()
		})

	}











	function sidePC(){
		$('.side-home a').click(function(){	home() })
		$('.side-contact a').click(function(){	contact() })
		$('.side-works a').click(function(){	works() })
		$('.side-about a').click(function(){	about() })
	}






	// $('#about,#works').click(function(){
	// 	sideClear()
	// 	sideNow()
	// })



	//點擊boy取消side
	//click的東西的所有parent都沒有.side
	//length:數量

            $('body').click(function(evt) {
                if($(evt.target).parents(".side").length==0) {
                    	sideClear()
						sideNow()
                }
            });