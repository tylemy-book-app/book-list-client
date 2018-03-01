'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  function reset() {
    $('.container').hide();
    $('.navigation').slideDown(350);
  }

  bookView.initIndexPage = function () {
    reset();
    $('.book-view').show();
    $('#book-list').empty();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    $('#numberOfBooks').text('Number of total books: ' + app.Book.all.length);
  };

  bookView.initDetailPage = function (ctxBook) {
    reset();
    $('.detail-view').show();
    $('#one-book').empty();
    let template = Handlebars.compile($('#detail-view-template').text());
    $('#one-book').append(template(ctxBook));
  };

  bookView.initAddForm = function () {
    reset();
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

  bookView.initUpdateFormPage = function(ctxBook) {
    reset();
    $('.update-record').show();
    $('#one-update-form').empty();
    let template = Handlebars.compile($('#update-record-template').text());
    $('#one-update-form').append(template(ctxBook));
    $('#update-record-form').on('submit', function(event) {
      event.preventDefault();
      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      module.Book.update(book);
  });

  module.bookView = bookView;
})(app);

// $(function () {
//   console.log('hi from document ready');
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });