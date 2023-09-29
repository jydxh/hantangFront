$(function(){
	$('.nav-bd>ul>li:not(:first)').mouseenter(function(){
		$(this).find('a').css('color','#fff');
		$(this).find('i').animate({'top':0},100);
		/*var index = $(this).index();
		$('.subnav div').eq(index-1).show().siblings().hide();*/
		$(this).find('ul').slideDown(100);
	}).mouseleave(function(){
		$(this).find('a').css('color','#666');
		$(this).find('i').animate({'top':'100%'},100);
		/*$('.subnav div').hide();*/
		$(this).find('ul').slideUp(100);
	});
	
	$('.search a').hover(function(){
		$(this).children('img').show();
	},function(){
		$(this).children('img').hide();
		
	})
});
//内页左侧
$(function(){
	var timer = null;
	var num = 0;
	var h = $('.subnav-ft-bd').height();
	function autoPlay(){
		num++;
		if(num > h){
			num = 0;
		}
		$('.subnav-ft-bd ul').css({top:-num});
	}
	timer = setInterval(autoPlay,30);
	$('.subnav-ft-bd').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(autoPlay,30);
	})
});
