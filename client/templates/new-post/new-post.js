Template.newPost.rendered = function(){
    $('#summernote').summernote({height: 500});
}

Template.newPost.events({
   'click #submit': function (event) {
     event.preventDefault();
     //var title = $('#titleInput').val()
     var content = $('#summernote').code()
     console.log(title);
     var post = {
     //title: title,
     content: content
     };
     console.log(post);
     return false;
   }
 });