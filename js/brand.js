$(function(){
    // 获取brandId
    var brandtitleid = getQueryString('brandtitleid')
    // 获取brandtitle
    var brandtitle = getQueryString('brandtitle')
    console.log(brandtitleid);
    $.ajax({
        url:'http://47.52.242.30:9090/api/getbrand',
        data:{
            brandtitleid:brandtitleid,
        },
        success:function(result){
            console.log(result);
            var html = template('getbrand',result)
            $('#main .ultop').html(html)
        }
    })
    // 截取字符串
    brandtitle = brandtitle.slice(0,4)
    console.log(brandtitle);
    $('#main .title span').html(brandtitle)

    // 注册点击事件
    $('#main .ultop').on('tap','li',function(){
        var $this = $(this)
        var dataTitleId = $this.data('brand-title-id')
        var brandName = $this.data('brand-name')
        console.log(dataTitleId);
        location='brandproductlist.html?dataTitleId='+dataTitleId+'&brandName='+brandName
    })



     // 使用网上封装好的正则的方式完成url参数的值的获取
     function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            // 默认使用encodeURI去对中文进行的加密  使用decodeURI解密
            return decodeURI(r[2]);
        }
        return null;
    }
})