$(document).ready(function() {
    $(".login").click(()=>{
        $.ajax({
            type: 'POST',
            crossDomain: true,
            dataType: 'JSON',
            url: 'http://localhost:8080/login',
            data: {
                username:$("#username").val(),
                password:$("#password").val()
            },
            success: function(jsondata){
                console.log(jsondata);
                sessionStorage.ApiKey = jsondata.APIKey
                console.log(sessionStorage.ApiKey);
                clearTimeline();
                grabTimeline();
            }
        });
    });
})