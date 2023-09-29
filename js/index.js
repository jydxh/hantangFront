
//banner轮播图
$(function() {
	//初始化一个变量，用于保存zindex的值
	var myIndex = 1;
	$('.banner ol li').click(function(event) {
		//点击一次，让当前要出现的这张图片的zindex加1
		myIndex++;
		$(this).addClass('current').siblings('li').removeClass('current');
		//找这组ul 下边对应的li
		var index = $(this).index();
		//如果当前要点击的  大于  自动编号，那么从右侧出现   否则就是从左侧

		$('.banner ul li').eq(index).css({zIndex:myIndex}).hide().fadeIn(500);
		num = index;
	});
	//自动播放  向右播放
	function autoPlay(){
		num++;//自动编号的累加
		myIndex++;//层次的自加 ，目的是让当前要出现的li，在最上层
		if(num > 3){
			num=0;
		}
		$('.banner ol li').eq(num).addClass('current').siblings('li').removeClass('current');

		$('.banner ul li').eq(num).css({zIndex:myIndex}).hide().fadeIn(500);
	}
	function prevPlay(){
		num--;//自动编号的累加
		myIndex++;//层次的自加 ，目的是让当前要出现的li，在最上层
		if( num < 0 ){
			num=3;
		}
		$('.banner ol li').eq(num).addClass('current').siblings('li').removeClass('current');

		$('.banner ul li').eq(num).css({zIndex:myIndex}).hide().fadeIn(500);
	}
	var timer = null;
	var num = 0;
	timer=setInterval(autoPlay,4000);

	$('.banner-bd').hover(function() {
		clearInterval(timer);
		$('.banner .left').stop().animate({left:0},100);
		$('.banner .right').stop().animate({right:0},100);
	}, function() {
		clearInterval(timer);
		timer=setInterval(autoPlay,4000);
		$('.banner .left').stop().animate({left:-40},100);
		$('.banner .right').stop().animate({right:-40},100);
	});

	$('.banner .right').click(function(event) {
		autoPlay();
	});
	$('.banner .left').click(function(event) {
		prevPlay();
	});
});
//新闻轮播
$(function(){
	var timer = null;
	var num = 0;
	
	var first = $('.focus ul li').eq(0).clone();
	$('.focus ul').append(first);
	
	$('.focus ol li').click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		
		$('.focus ul').animate({left:-index*373},300);
		num = index;
	});
	function autoPlay(){
		num++;
		if(num > 4){
			$('.focus ul').css({left:0}).animate({left:-373},300)
		}else{
			$('.focus ul').animate({left:-num*373},300);
		}
		$('.focus ol li').eq(num).addClass('current').siblings().removeClass('current');
	}
	timer = setInterval(autoPlay,4000);
	
	$('.focus').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(autoPlay,4000);
	});
});


