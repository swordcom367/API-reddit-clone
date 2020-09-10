let dummyData = {
    header:"gamer",
    picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInternet_meme&psig=AOvVaw17iho65tw-P_gnZ4DwTRNH&ust=1599050132275000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC36Ir8x-sCFQAAAAAdAAAAABAV",
    discription:"discription",
    //timeing: current_hour
};

//var test = addCard(dummyData);

let timeline = document.getElementById("timelineContaner");
//timeline.appendChild(test);

function addCard(timelineOBJ) {
    var timelineCard = document.createElement('div');
    timelineCard.className = "card"

    var cardImage = document.createElement('img');
    cardImage.src = timelineOBJ.picture;
    timelineCard.appendChild(cardImage);

    var timeLineBody = document.createElement('div');
    timeLineBody.className = "card-body"

    var timelinetettl = document.createElement('h5');
    timelinetettl.className="card-title"
    timelinetettl.innerText=timelineOBJ.header;

    timeLineBody.appendChild(timelinetettl);
    var timelineText = document.createElement('p');
    timelineText.className ="card-text"
    timelineText.innerText = timelineOBJ.discription
    timeLineBody.appendChild(timelineText);

    timelineCard.appendChild(timeLineBody);

    return timelineCard
}