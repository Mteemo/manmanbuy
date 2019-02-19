$(function(){
    var url = location.href;
    // console.log(url);
    var id = url.split("=")[1];
    // console.log(id);
    
    // 详情 请求

    $.ajax({
        url:"http://localhost:9090/api/getdiscountproduct",
        data:{
            productid:id
        },
        success:function(obj){
            console.log(obj);
            var html = template("details",obj)
            $(".goods").html(html);
        }
    });


    $("#btn").on("tap",function(){
        console.log($("#idtext").val());
        var p
        
    })
    

    
    
    
    
})