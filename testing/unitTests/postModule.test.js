const postModdle = require('../../dataModels/postModel')
test('testing the post DataModdle',() => {
    let post = {
        header: "gamer",
        picture:"gamer pic",
        discription:"youtube Coments",
        postTime:"will be real latter",
        user:"yourmom"
    }
    expect(postModdle.createPost("gamer","gamer pic","youtube Coments","will be real latter","yourmom")).toStrictEqual(post);
})