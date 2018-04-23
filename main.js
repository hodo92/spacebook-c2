let posts = [];


$(".add-post").click(function () {
    var postText = $("#post-name").val();
    var postIds = posts.length;
    addPost(postText, postIds);
    renderPosts();

})


var addPost = function (texts, ids) {
    let post = {
        texts: texts,
        ids: ids,
    }
    posts.push(post);

}

var renderPosts = function () {
    $(".posts").find('p').remove();
    for (let i = 0; i < posts.length; i++) {
        $(".posts").append("<p class='post' id='post' data-id=" + i + "><button type='button' class='btn btn-primary remove' data-id=" + i + ">Remove post</button>" + posts[i].texts + " " + "<form>Username:<input type='text' placeholder='user' id='user' data-id=" + i + ">Comment:<input type='text' placeholder='Add comment here' id='comment' data-id=" + i + "></form><button type='button' class='btn btn-danger comment' data-id=" + i + ">Post comment</button></p>")
    };
      

    }




$(".posts").on("click", ".remove", function () {
    var position = $(this).attr("data-id");
    posts.splice(position, 1);
    renderPosts();
})

     