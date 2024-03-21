
//gnb
$('.gnb').hover(function(){
    //마우스가 진입 했을 때 할 일
    /* $('.subnav').show() */
   /*  $('.subnav').fadeIn() */
    $('.subnav').stop().slideDown();
},function(){
    //마우스가 벗어나면 할 일
   /*  $('.subnav').hide() */
    /* $('.subnav').fadeOut() */
    $('.subnav').stop().slideUp();
})

//banner slide

/* 
setInterval(할일, 시간) => 시간마다 할일
setInterval(function(){}, 3000) => 3초마다 할일 */

/* 
if(조건문){조건문이 참일 때 할 일}

if(조건문){
    조건문이 참일 때 할 일
}else{
    조건문이 거짓일 때 할 일
}

if(조건문a){
    조건문이 참일 때 할 일
}else if(조건문b){
    조건문a이 거짓이고 조건문b는 참일 때 할 일
}else{
    모든 조건문에 만족하지 않을 때 할 일
} */

let num=0;
setInterval(function(){
    if(num<2){
        num++; //1씩 증가
    }else{
        num=0
    }
    let slidePosition=num*(-300)+"px"

/*     console.log(slidePosition) */
   // $('.main ul').animate({실행문},1000)
    $('.main ul').animate({
        top:slidePosition
    },1000)
}, 3000)