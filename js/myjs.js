$(function () {
    /*滚动监听*/
    $('body').scrollspy({target: '.collapse'});

    setTimeout(function () {
        $(".container").addClass("comein");
    },200);
    $('#fullpage').fullpage({
        anchors: ['one', 'two', 'three', 'four','five'],
        // 显示项目符号
        navigation: true,
        // 循环滚动
        loopBottom: true,

        onLeave: function (index, nextIndex, direction) {
            // 当我们离开第一屏幕的时候，section1 就移除 comein
            $(".container").removeClass('comein');
            // 如果下一屏幕的的索引号是 1 说明我们要到第一屏幕了 添加 comein
            if (nextIndex == 1) {
                $(".container").addClass('comein');
            }0

            if (nextIndex != 1) {
                // 如果不是第一屏幕 就给背景添加旋转的  因为逆时针所以- 60deg
                $(".bg").addClass('rotate');
            } else {
                $(".bg").removeClass('rotate');
            }

            if (nextIndex == 2){
                $(".text-center").addClass("p3");
                $(".all-center").addClass("p2")
            }else {
                $(".text-center").removeClass("p3");
                $(".all-center").removeClass("p2")
            }

            if (nextIndex == 3){
                $(".section3 h1").animate({"top": "0px"},2000,"easeOutBack");
                $(".section3 .introduce").animate({"bottom": "0px"},2000, "easeOutCirc")
            }else {
                $(".section3 h1").animate({"top": "-500px"},2000,"easeOutBack");
                $(".section3 .introduce").animate({"bottom": "-500px"},2000, "easeOutCirc")
            }

            if (nextIndex == 4){
                $(".myCanvas").addClass("p4")
            } else {
                $(".myCanvas").removeClass("p4")
            }
        }
    });

});

