/**
 * 
 * 乐购商城首页JS
 * 2020-10-22 by zcw
 */
//当页面加载完毕
$(function(){
$('#banner').tyslide({
    boxh:460,//盒子的高度
    w:1150,//盒子的宽度
    h:390,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:25,//控制按钮宽度
    controlsH:25,//控制按钮高度
    radius:10,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
});


/*图书 电子书轮播 */
$(function(){
    $('#ebooks-banner').tyslide({
        boxh:223,//盒子的高度
        w:380,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"white",//当前控制按钮的颜色
    
    });
    })

/*电子书 table切换 */
var $lis = $('.ebooks .ebooks-nav > li');
$lis .mouseover(function(){
    //给自己添加激活类active 把兄弟的都干掉
    $(this).addClass('active').siblings().removeClass('active');
    //获取index
    var index = $(this).index();

    //选中内容
    var $ebooksList = $('ebooks-list');
    //显示索引等于当前Index
    $ebooksList.eq(index).show().siblings('.ebooks-list').hide();
})


/*新书列表交互效果*/
$('.ebooks .right-box ul > li').mouseenter(function () {
    //所有兄弟:隐藏详情 显示标题
    $(this).siblings().find('.desc').hide();//隐藏详情
    $(this).siblings().find('.ebooks-title').show();//显示标题

//当前：隐藏标题 显示详情
$(this).find('.ebooks-title').hide();//当前：隐藏标题
$(this).find('.desc').show();//当前：显示详情
})
})

/*女装图轮播 */
$(function(){
    $('#clothes-banner').tyslide({
        boxh:340,//盒子的高度
        w:427,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:25,//控制按钮宽度
        controlsH:4,//控制按钮高
        controlsColor:"gray",//普通控制按钮的颜色
        controlsCurrentColor:"white",//当前控制按钮的颜色
    
    });
    })

/*运动图轮播 */
$(function(){
    $('#sport-banner').tyslide({
        boxh:340,//盒子的高度
        w:427,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:25,//控制按钮宽度
        controlsH:4,//控制按钮高
        controlsColor:"gray",//普通控制按钮的颜色
        controlsCurrentColor:"white",//当前控制按钮的颜色
    
    });
    })

/*童装图轮播 */
$(function(){
    $('#kid-banner').tyslide({
        boxh:340,//盒子的高度
        w:427,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:25,//控制按钮宽度
        controlsH:4,//控制按钮高
        controlsColor:"gray",//普通控制按钮的颜色
        controlsCurrentColor:"white",//当前控制按钮的颜色
    
    });

 /* 推广商品切换 */
 $('.promotion .promotion-title ul li').mouseenter(function(){
    //导航激活类的切换
    $(this).addClass('active').siblings().removeClass('active')
    //内容切换
    //获取对应索引
    var index = $(this).index();
    $('.promotion .promotion-content .inner-box').animate({
        'left' : -index * 1170
    })
})

/* 电子书切换 */
$('.ebooks .left-box .top .fr li').mouseenter(function(){
    //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
    })

/* 服装切换 */
$('.clothes .left-box .top .fr li').mouseenter(function(){
    //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
    })

/* 运动切换 */
$('.sport .left-box .top .fr li').mouseenter(function(){
    //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
    })

/* 童装切换 */
$('.kid .left-box .top .fr li').mouseenter(function(){
    //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
    })
/*返回顶部*/
 //绑定滚动时间
$(document).scroll(function(){
   //获取距离顶部的距离
   var topDistance=$('html,body').scrollTop();
   //判断
   if(topDistance>500){
      $('.backToTop').fadeIn();
   }else{
    $('.backToTop').fadeOut();
   }
}) 

//返回顶部功能
$('.backToTop').click(function(){
   $('html,body').animate({
       scrollTop:0
   },300)
})

/*二维码滑出效果*/
$('.qr-code .ticket').hover(function(){
    //让二维码滑出
    $('.qr-code div').stop(true).animate({
        left:'-100px'
    })
},function(){
    //让二维码收回
    $('.qr-code div').stop(true).animate({
        left:0
    })
}) 

/* 顶部搜索框交互*/
$(document).scroll(function(){
    //获取到顶部的距离
    var topDistance=$('html,body').scrollTop();
    //判断
    if(topDistance>500){
        //如果滚动距离大于500，滚下来
        $('.top-search-box').slideDown(300)
    }else{
        // 否则，收回去
        $('.top-search-box').slideUp(300)
    }
})

/*楼梯跳转*/
$('.floor li').click(function(){
    //获取索引
    var index=$(this).index();
    //选中每一个板块到顶部的偏移
    var topOffset=$('.floorBox').eq(index).offset().top;
    //让滚动条滚到这个位置
    $('html,body').animate({
        scrollTop:topOffset-80
    })
})
})