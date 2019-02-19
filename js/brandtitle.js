$(function(){
    // 渲染品牌大全标题
    $.ajax({
        url:'http://47.52.242.30:9090/api/getbrandtitle',
        success:function(result){
            console.log(result);
            var html=template('brandtitle',result)
            $('.mmb-brandtitle').html(html)
        }
    })
    // 获取要查看的标题的id
    $('.mmb-brandtitle').on('tap','li',function(){
        var brandTitleId = $(this).data('brand-title')
        var brandtitle = $(this).data('title')
        var $this = $(this);
        var brandtitleid =$(this).data('brand-title-id')
        location='brand.html?brandtitleid='+brandtitleid+'&brandtitle='+brandtitle
    })
})