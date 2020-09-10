//data modles for requests 

function grabTimelineRequest() {
    let request = {
        username: $("#username").val(), 
        filter: $(".filter").val(),
        apiKey: sessionStorage.ApiKey 
    }
    console.log($(".filter").val());
    return request;
}
function createPostRequest() {
    let headerData =$(".header").val();
    let pictureData =$(".picture").val();
    let discriptionData =$(".discription").val();

    let request = {
            header:headerData, 
            picture: pictureData, 
            discription:discriptionData,
            timing:"test time",
            user:sessionStorage.username,
            apiKey: sessionStorage.ApiKey
    }

    return request;
}

function loginRequest()  {
   let request = {
        username:$("#username").val(),
        password:$("#password").val()
    }

    return request;
}