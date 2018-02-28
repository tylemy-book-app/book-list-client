'use strict';

page('/api/v1', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/api/v1/books', app.bookView.initAddForm);

page();