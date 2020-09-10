$(document).ready(function() {
    $(".login").click(()=>{
        $.ajax({
            type: 'POST',
            crossDomain: true,
            dataType: 'JSON',
            url: 'http://localhost:8080/login',
            data: loginRequest(),
            success: function(jsondata){
                console.log(jsondata);
                sessionStorage.ApiKey = jsondata.APIKey
                sessionStorage.username = $("#username").val();
                clearTimeline();
                grabTimeline();
            }
        });
    });
})