module.exports.createPost = function createPost(head,pic,disc,time,poster) {
    var post = {
        header: head,
        picture:pic,
        discription:disc,
        timing:time,
        user:poster
    }
    return post;
}