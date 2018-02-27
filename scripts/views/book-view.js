'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  bookView.initIndexPage = function () {
    console.log ('hi from initIndexPage');
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    $('#numberOfBooks').text('Number of total books: ' + app.Book.all.length);
  };

  module.bookView = bookView;
})(app);

$(function () {
  console.log('hi from document ready');
  app.Book.fetchAll(app.bookView.initIndexPage);
});