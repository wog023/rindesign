


const navContact = '.navi>p:nth-child(2),.navi>p:nth-child(3),.navi>p:nth-child(4),.navi>p:nth-child(5),.navi>p:nth-child(10),.navi>p:nth-child(14),.navi>p:nth-child(19)'
		// $(navContact).addClass('nav-contact')
const navWorks = '.navi>p:nth-child(6),.navi>p:nth-child(7),.navi>p:nth-child(8),.navi>p:nth-child(9),.navi>p:nth-child(15)'
		// $(navWorks).addClass('nav-works')
const navAbout = '.navi>p:nth-child(12),.navi>p:nth-child(17),.navi>p:nth-child(22),.navi>p:nth-child(23),.navi>p:nth-child(24)'
		// $(navAbout).addClass('nav-about')
	

//清除變色
	function clear(){
		$(navContact).removeClass('nav-contact')
		$(navWorks).removeClass('nav-works')
		$(navAbout).removeClass('nav-about')
	}
//點擊其他區域清除
	$('#home').click(function(evt) {
        if($(evt.target).parents(".navi").length==0) {
            clear()
        }
    });


//變色後按下會移動
	$(navContact).click(function(){
		if($(this).hasClass('nav-contact')){
			contact()
		}
	})
	$(navWorks).click(function(){
		if($(this).hasClass('nav-works')){
			works() //改成連結
		}
	})
	$(navAbout).click(function(){
		if($(this).hasClass('nav-about')){
			about() //改成連結
		}
	})



//click變色
function homeClickMobile(){
	$('.navi>p:nth-child(2)').click(function(){
		clear()
		$(navContact).addClass('nav-contact')	
	})
	$('.navi>p:nth-child(6)').click(function(){
		clear()
		$(navWorks).addClass('nav-works')
	})
	$('.navi>p:nth-child(12)').click(function(){
		clear()
		$(navAbout).addClass('nav-about')
	})
}
////////////////////////////////////////////////////////////////
//PC按下傳送
	function homeClickPC(){
		$('.navi>p:nth-child(2)').click(function(){
			contact()
		})
		$('.navi>p:nth-child(6)').click(function(){
			works()
		})
		$('.navi>p:nth-child(12)').click(function(){
			about()
		})
	}

/////////////////////////////////////////////////////////////////////////
//PC hover
$('.navi>p:nth-child(2)').hover(function(){
	$(navContact).addClass('nav-contact-hover')
},function(){
	$(navContact).removeClass('nav-contact-hover')
})
$('.navi>p:nth-child(6)').hover(function(){
	$(navWorks).addClass('nav-works-hover')
},function(){
	$(navWorks).removeClass('nav-works-hover')
})
$('.navi>p:nth-child(12)').hover(function(){
	$(navAbout).addClass('nav-about-hover')
},function(){
	$(navAbout).removeClass('nav-about-hover')
})
/////////////////////////////////////////////////////////////////////////////

function home(){
		$('.container').removeClass('container-footer')
		$('#works,#contact,#about,.sidebar').hide()
		$('#home').show()
		clear()
		// $('#navi').toggle().toggle()

	}

// $('.side-home a').click(function(){
// 	home()
// })
	// home()



