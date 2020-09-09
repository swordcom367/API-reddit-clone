

$(document).ready(function() {
    $(".submit").click(function() {
        console.log("testing");
        var headerData =$(".header").val();
        var pictureData =$(".picture").val();
        var discriptionData =$(".discription").val();

        $.ajax({
            type: 'POST',
            crossDomain: true,
            dataType: 'JSON',
            url: 'http://localhost:8080/login',
            data: {
                header:headerData, 
                picture: pictureData, 
                discription:discriptionData,
                timing:"test time",
                user:"username"
            },
            success: function(jsondata){
                updateTimeLine(jsondata);
            }
        });
    });


    var timeline = document.getElementById("timelineContaner");
    $(".getTimeline").click(function() {
        $.ajax({
            type: 'POST',
            crossDomain: true,
            dataType: 'JSON',
            url: 'http://localhost:8080/timeline',
            data: {username: $("#username").val(), apiKey: sessionStorage.ApiKey },
            success: function(jsondata){
                //clear the old data
                console.log(jsondata);
                updateTimeLine(jsondata)
            }
        });
    });
});
function updateTimeLine(TimeLine) {
    for (let i = 0; i < TimeLine.length; i++) {
        const element = TimeLine[i];
        let card = addCard(element);
        timeline.appendChild(card);
    }
}