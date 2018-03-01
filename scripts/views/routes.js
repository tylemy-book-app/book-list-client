'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', app.bookView.initAddForm);
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));


page('/admin', (ctx, next) => app.adminView.initAdminPage(ctx, next), (ctx) => app.adminView.verify);

page();