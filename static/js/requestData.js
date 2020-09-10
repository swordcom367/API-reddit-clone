

$(document).ready(function() {
   // clearTimeline();
    $(".submit").click(function() {
        var headerData =$(".header").val();
        var pictureData =$(".picture").val();
        var discriptionData =$(".discription").val();

        $.ajax({
            type: 'POST',
            crossDomain: true,
            dataType: 'JSON',
            url: 'http://localhost:8080/post',
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
    $(".getTimeline").click(grabTimeline);
});
function grabTimeline() {
    $.ajax({
        type: 'POST',
        crossDomain: true,
        dataType: 'JSON',
        url: 'http://localhost:8080/timeline',
        data: {username: $("#username").val(), apiKey: sessionStorage.ApiKey },
        success: function(jsondata){
            //clear the old data
            console.log(jsondata);
            clearTimeline();
            updateTimeLine(jsondata)
        }
    });
}
function updateTimeLine(TimeLine) {
    for (let i = 0; i < TimeLine.length; i++) {
        const element = TimeLine[i];
        let card = addCard(element);
        timeline.appendChild(card);
    }
}
function clearTimeline() {
    const timeline = document.getElementById("timelineContaner");
    if(timeline.firstChild != null) {
        while (timeline.firstChild) {
        timeline.removeChild(timeline.lastChild);
        }
    }
}