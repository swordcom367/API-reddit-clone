

$(document).ready(function() {
   // clearTimeline();
    $(".submit").click(function() {

        $.ajax({
            type: 'POST',
            crossDomain: true,
            dataType: 'JSON',
            url: 'http://localhost:8080/post',
            data: createPostRequest(),
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
        data: grabTimelineRequest(),
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