

module.exports.dummyTimeLine = (num) => {
    let dummyData =[];
    for (let i = 0; i < num; i++) {
        var date = new Date();
        var current_hour = date.getHours();
        dummyData.unshift({
            header:"gamer",
            picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInternet_meme&psig=AOvVaw17iho65tw-P_gnZ4DwTRNH&ust=1599050132275000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC36Ir8x-sCFQAAAAAdAAAAABAV",
            discription:"discription",
            timeing: current_hour
        });
    }
    return dummyData;
}