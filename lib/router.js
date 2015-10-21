Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', function () {
  this.render('home');
},{
  name: 'home'
});


Router.route('/new-post', function () {
  this.render('newPost');
},
{
  name: 'newPost'
}
);

