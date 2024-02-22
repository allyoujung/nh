//메뉴
$(function(){
$(".gnb_com>li").on({"mouseover focusin":function(){
		$(this).addClass('active');
	},"mouseout focusout":function(){
		$(this).removeClass('active');
	}
	});
});
//메인슬라이드]
$(function(){
	var banner=$('.slide');
	var button=$('.pager>div');
	var leftBtn=$('.cl_left'); 
	var rightBtn=$('.cl_right'); 
	var current=0;
	var setIntervalId;
	
	console.log(banner)
	
	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			
			var prev = banner.eq(current);
			var prevBtn = button.eq(current);
			
			move(prev,0,'-100%');
			prevBtn.removeClass('on');
			current++;
			
			if(current==banner.size()){
				current=0;
			}
			
			var next = banner.eq(current);
			var nextBtn = button.eq(current);
			
			move(next,'100%',0);
			nextBtn.addClass('on');
			
		},3000);
	}
	
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},1000);
	}
	
	$('.slide').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});
	/////
	/* 양쪽 화살표 */
	rightBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		
		move(prev,0,'-100%');
		prevBtn.removeClass('on');
		current++;
		
		if(current==banner.size()){current=0;}
		
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		
		move(next,'100%',0);
		nextBtn.addClass('on');
	});
	
	leftBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		move(prev,0,'100%');
		prevBtn.removeClass('on');
		current--;
		if(current==-banner.size()){current=0;}
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		move(next,'-100%',0);
		nextBtn.addClass('on');
	});
	
	$('.contlor').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});
	//button.on({click:function(){}});
	button.click(function(){
		var tg=$(this);
		var i=tg.index();
		
		button.removeClass('on');
		tg.addClass('on');
		if(current>i){
			move2(i);
		}else{
			move1(i);
		}
		
	});
	
	function move1(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'-100%'},500);
		nextEl.css('left','100%').stop().animate({left:0},500);
		current=i;
	}
	function move2(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'100%'},500);
		nextEl.css('left','-100%').stop().animate({left:0},500);
		current=i;
	}
	
});

// 메인 scroll 변수 
const doAnimationSlideblock = function (){
    setTimeout(()=>{
        document.querySelector('.slide_all').style.display = "block";
    }, 0)
}
const doAnimationSlidenone = function (){
    setTimeout(()=>{
        document.querySelector('.slide_all').style.display = "none";
    }, 0)
}
const doAnimationQuickMenublock = function (){
    setTimeout(()=>{
        document.querySelector('.quick_menu').style.display = "block";
    }, 0)
}
const doAnimationQuickMenunone = function (){
    setTimeout(()=>{
        document.querySelector('.quick_menu').style.display = "none";
    }, 0)
}

// Do Animation according the scroll location
function setAnimation(range1, doAnimation){
    window.addEventListener('load', ()=>{
        let scrollLocation = window.scrollY;
        if(range1<scrollLocation){
            doAnimation();
        } else{
            return 0;
        }
    })
    window.addEventListener('scroll', ()=>{
        let scrollLocation = window.scrollY;
        if(range1<scrollLocation){
            doAnimation();
        } else{
            return 0;
        }
    })
}

function init(){
    setAnimation(0, doAnimationSlideblock);
    setAnimation(110, doAnimationSlidenone);
	setAnimation(0, doAnimationQuickMenunone);
	setAnimation(130, doAnimationQuickMenublock);
}

init();

$('.quick_btn').click(function(){
			$('.slide_all').css({"display":"block","zIndex":"9999"});
			return false;
		});
		//index01.css 끝

		
//라운지 슬라이드 왼쪽

let moving=$('.sub_left'),
    imgWidth=moving.find('>div').width(),
    setIntervalId=undefined;
	
	console.log(imgWidth)

function slide(){
    setIntervalId=setInterval(() => {
        moving.animate({left:-imgWidth},1000, function(){
            $(this).children('div:first').insertAfter($(this).children('div:last'));
            $(this).css({left:0});
        });
    }, 3000);
}
slide();

$('.sub_left, .prev, .next').on({'mouseover':function(){
    clearInterval(setIntervalId);
},'mouseout':function(){
    slide();
}
});

function left(){
    moving.find('div:last').insertBefore(moving.find('div:first'));
    moving.css({left:-200}).stop().animate({left:0},1000)
}
function right(){
    moving.animate({left:-imgWidth},1000, function(){
        $(this).children('div:first').insertAfter($(this).children('div:last'));
        $(this).css({left:0});
    });
}

$('.prev').click(function(){
    left();
    return false;
});
$('.next').click(function(){
    right();
    return false;
});

//라운지 슬라이드 오른쪽
var imgslied=$('.f_img>div'),
	pager=$('.pager2>div'),
	cur=0,
	setIntervalId2=undefined;
	
	times();
	function times(){
		setIntervalId2=setInterval(function(){
			var prev=imgslied.eq(cur);
			var prevpager=pager.eq(cur);
			move1(prev,0,'-100%');
			prevpager.removeClass('on');
			cur++;
			if(cur==imgslied.size()){cur=0;}
			var next=imgslied.eq(cur);
			var nextpager=pager.eq(cur);
			move1(next,'100%',0);
			nextpager.addClass('on');
		},2000);
	}
	function move1(tg, start, end){
		tg.css('left',start).stop().animate({left:end},1000);
	} 