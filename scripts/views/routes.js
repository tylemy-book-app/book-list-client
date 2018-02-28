'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', app.bookView.initAddForm);

page();