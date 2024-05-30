//ToggleClass(ClassName)
// $('.class').click(function () {}); 
// function(){} -- JS函數寫法 
//.click點擊事件
//ToggleClass-在指定Class內做切換(增加)cl
//增添了class " close "後該項目就會被隱藏
//有的變沒有，沒有的變有
$('.btn').click(function () {
    $('.hamburger-menu').toggleClass('close');
    $('.hamburger-close').toggleClass('close');
    $('.Nav-bar').toggleClass('active');
});