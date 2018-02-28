'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  bookView.initIndexPage = function () {
    console.log ('hi from initIndexPage');
    $('.container').hide();
    $('.book-view').show();
    $('#book-list').empty();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    $('#numberOfBooks').text('Number of total books: ' + app.Book.all.length);
  };

  bookView.initAddForm = function () {
    console.log ('hi from initAddForm');
    $('.container').hide();
    $('.add-new').show();
    $('#new-book-form').on('submit', function(event) {
      event.preventDefault();
      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      module.Book.createBook(book);
    });
  };
  module.bookView = bookView;
})(app);

// $(function () {
//   console.log('hi from document ready');
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });