'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', app.bookView.initAddForm);

page();