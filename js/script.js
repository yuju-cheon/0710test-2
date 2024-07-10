$(".sub,.sub_bg").hide();
$(".menu>li").mouseover(function(){
 $(".sub,.sub_bg").show();
})
$(".menu>li").mouseout(function(){
 $(".sub,.sub_bg").hide();
})

/* mobile header */
$(".m_sub,.m_nav_bg").hide();

$(".m_btn").click(function(){
 $(".m_nav_bg").show();
$("html").addClass("m_nav_open")
 $(".m_nav").addClass("m_nav_active")
})
$(".m_close").click(function(){
 $(".m_nav_bg").fadeOut(700);
 $(".m_nav").removeClass("m_nav_active");
 $("html").removeClass("m_nav_open")
})
$(".m_menu>li").click(function(){
 $(this).toggleClass("active");
 $(this).siblings().removeClass("active");
 $(this).children(".m_sub").slideToggle();
 $(this).siblings().children(".m_sub").slideUp();
})
/*lang */
$(".lang").hide();
$(".lang_list").mouseover(function(){
 $(this).find(".lang").show();
})
$(".lang_list").mouseout(function(){
 $(this).find(".lang").hide();
})
/*header fixed */
$(window).scroll(function(){
 let scrTop=$("html").scrollTop();

 if(scrTop>30){
  $(".header").addClass("fixed")
  $(".logo img").attr("src","imgs/logo_wh.png")
  $(".h_icons>li:nth-child(2) img").attr("src","imgs/h_icon1_wh.png")
  $(".h_icons>li:nth-child(3) img").attr("src","imgs/h_icon2_wh.png")
 }else{
  $(".header").removeClass("fixed")
  $(".logo img").attr("src","imgs/logo.png")
  $(".h_icons>li:nth-child(2) img").attr("src","imgs/h_icon1.png")
  $(".h_icons>li:nth-child(3) img").attr("src","imgs/h_icon2.png")

 }
})

/*main slide*/
const main=new Swiper('.main_swiper',{
 loop:true, //슬라이드 순환
 autoplay: { //자동 재생
  delay: 3000, //지연시간, 밀리초단위, 1초 =1000
  disableOnInteraction: false, 
 },
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 navigation: {
   nextEl: ".main_next",
   prevEl: ".main_prev",
 },
})
/*자동재생 일시정지-다시시작 */
$(".main_play").hide();
$(".main_pause").click(function(){
  main.autoplay.stop(); //오토플레이 정지
 $(".main_play").show();
 $(".main_pause").hide();
})
$(".main_play").click(function(){
 main.autoplay.start(); //오토플레이 시작
$(".main_play").hide();
$(".main_pause").show();
})
/*box1 slide */
const box1=new Swiper('.box1',{
  loop:true, //슬라이드 순환
  autoplay: { //자동 재생
  delay: 4200, //지연시간, 밀리초단위, 1초 =1000
  disableOnInteraction: false,},
  pagination:{el:'.box1 .swiper-pagination', type: 'fraction'},
  navigation:{ nextEl: ".box1_next",prevEl: ".box1_prev",}
})
$(".box1_play").hide();
$(".box1_pause").click(function(){
  box1.autoplay.stop(); //오토플레이 정지
 $(".box1_play").show();
 $(".box1_pause").hide();
})
$(".box1_play").click(function(){
  box1.autoplay.start(); //오토플레이 정지
 $(".box1_play").hide();
 $(".box1_pause").show();
})

$(".notice2").hide();
$(".tab_title>li:nth-child(2)").click(function(){
  $(".notice2").show();
  $(".notice1").hide();
  $(this).addClass("active")
  $(this).siblings().removeClass("active")
})
$(".tab_title>li:nth-child(1)").click(function(){
  $(".notice2").hide();
  $(".notice1").show();
  $(this).addClass("active")
  $(this).siblings().removeClass("active")
})

$(".site_list").hide();
$(".family_site").mouseover(function(){
  $(this).children(".site_list").show();
})
$(".family_site").mouseout(function(){
  $(this).children(".site_list").hide();
})

$(".top_btn").click(function(){
  $("html").animate({scrollTop:'0'},500)
})

$(".top_btn").hide();
$(window).scroll(function(){
let i=$("html").scrollTop();

if (i>100){
  $(".top_btn").fadeIn();
}else{
   $(".top_btn").fadeOut();
}


})