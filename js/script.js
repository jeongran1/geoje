$(document).ready(function(){

    //header hide
    $(window).scroll(function(event){
        let st = $(this).scrollTop();
        // console.log(st)
        if(st>386){
            $('.header').addClass('hide')
            $('.mb-bt').addClass('hide')
        }else{
            $('.header').removeClass('hide')
            $('.mb-bt').removeClass('hide')
        }
    })
    //ALL MENU POP_UP
    const all_menu = $('.all-menu')
    const all_menu_wrapper = $ ('.all-menu-wrapper')
    const all_menu_mask = $('.all-menu-mask')
    const all_menu_close = $('.all-menu-close')
    
    all_menu.click(function(){
        // all_menu_wrapper.classList.add('ㅋ클래스명')
        all_menu_wrapper.addClass('all-menu-wrapper-active')
        all_menu_mask.addClass('all-menu-mask-active')
    })
    all_menu_close.click(function(){
        all_menu_wrapper.removeClass('all-menu-wrapper-active')
        all_menu_mask.removeClass('all-menu-mask-active')
    })

    //모바일 메뉴 기능 
    //.mb-bt 를 저장해서 활용하자
    $('.mb-bt').click(function(e){
        e.preventDefault();
        // .mb-bt = this 로 대신사용 가능
        $('.mb-bt').toggleClass('mb-bt-open')
        $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
        $('.mb-nav').toggleClass('mb-nav-open')
        $('.mb-menu>li').height(54)
    })
    //화면사이즈체크
    $(window).resize(function(){
        //윈도우 너비를 체크해줌
        let temp = $(window).width();
        // console.log(temp);
        if(temp > 1220){
            $('.mb-bt').removeClass('mb-bt-open')
        $('.mb-menu-mask').removeClass('mb-menu-mask-active')
        $('.mb-nav').removeClass('mb-nav-open')
        }else {
            $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
            $('.all-menu-mask').removeClass('all-menu-mask-active')
        }
        })
    //모바일 메뉴 펼치기
    //1. 모바일 메뉴 불러오기
    const mb_mainmenu = $('.mb-mainmenu')
    //2. 모바일 서브메뉴 불러오기
    const mb_submenu = $('.mb-submenu')
    //3. 펼쳐진 서브메뉴의 높이값
    // 모바일 하이트는 배열로 선언되어져있음  
    let mb_submenu_height = [];
    
    
    //4. 높이값 계산을 실행
    // 배열명.forEach(function(item,index){할일})    
        // $.each(배열명,function(index, item){할일})
        $.each(mb_submenu, function(index){
            //각가의 .mb-submenu로 가서 11의 갯수를 파악한다. 
            let count = $(this).find('li').length;
            // console.log(count)
            //최종결과저장 (51px * count +22)
            mb_submenu_height[index]=51*count+22;
        })
        // console.log(mb_submenu_height)
        let mb_li = $('.mb-menu > li')
        $.each(mb_mainmenu, function(index){
            $(this).click(function(e){
                e.preventDefault();
               
                //mb-mainmenu-open이 있으면 펼치고 없으면 닫기
                $(this).toggleClass('mb-mainmenu-open')
                let active = $(this).hasClass('mb-mainmenu-open')
                if(active) { 
                    //클릭된 li>a (depth1)의 ul의 높이값을 temp에 저장
                    let temp = mb_submenu_height[index]
                    //해당요소의 높이부여
                    mb_li.eq(index).height(temp+54)
                }else {
                    //클릭이 안된경우 
                    mb_li.eq(index).height(54)
                }
            })
        })
        //모바일 메뉴 배경을 클릭시 사라짐 
        const mb_menu_mask = $('.mb-menu-mask')
        mb_menu_mask.click(function(){
            //모바일 버튼 기능 초기화
            $('.mb-bt').removeClass('mb-bt-open')
            $('.mb-menu-mask').removeClass('mb-menu-mask-active')
            $('.mb-nav').removeClass('mb-nav-open')
            $('.mb-menu>li').height(54)
            $('.mb-mainmenu').removeClass('mb-mainmenu-open')
        })

    new Swiper(".sw-visual", {
        autoplay: true,
        loop: true, 
        speed: 3000,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,

        },
      });
        let sw_banner =new Swiper(".sw-banner", {
        slidesPerView: 2,
        spaceBetween: 13,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        autoplay: {
            delay:2000,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints:{
            1023: {
                slidesPerView:6,
            },
            882:{
                slidesPerView:5,
            },
            676: {
                slidesPerView:4,
            },
            450:{
                slidesPerView:3,
            },
            320:{
                slidesPerView:2,
            }
        },
        navigation: {
          nextEl: ".banner-forward",
          prevEl: ".banner-back",
        }
      });
      const banner_back = $('.banner-back')
      const banner_play = $('.banner-play')
      const banner_forward = $('.banner-forward')

      banner_play.click(function(){
        $(this).toggleClass("banner-play-start")
        let temp = $(this).hasClass('banner-play-start')
        if(temp){
            //슬라이드 작동 안함
            sw_banner.autoplay.stop();
        }else {
            sw_banner.autoplay.start();
        }
      })
      banner_back.click(function(){
        let temp = banner_play.hasClass("banner-play-start")
        if (temp==true){
            banner_play.removeClass("banner-play-start")
            sw_banner.autoplay.start()
        }
      })
      banner_forward.click(function(){
        let temp = banner_play.hasClass("banner-play-start")
        if (temp==true){
            banner_play.removeClass("banner-play-start")
            sw_banner.autoplay.start()
        }
      })
      const go_top = $('.gotop')
      go_top.click(function(){
        $('html, body').animate({
            scrollTop:0
        },500)
      })
})
