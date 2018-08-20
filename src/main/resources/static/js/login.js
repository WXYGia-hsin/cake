var LOGIN_URL="http://localhost:8081/user/login";
$(function(){
    $("#btn1").click(function(){
        var json=JSON.stringify($("#login1").serializeObject());
        $.ajax({
            url:LOGIN_URL,
            dataType:"json",
            data:json,
            type:"post",
            contentType:"application/json",
            statusCode:{
                200:function(data){
                    alert("登录成功");
                    //window.localStorage//application
                    //window.sessionStorage，当重定向之后，数据丢失
                    window.location="product.html?username="+data.username;

                },
                409:function(){
                    alert("登录失败");

                },

            }


        });


    });


});