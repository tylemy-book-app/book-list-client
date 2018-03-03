'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', app.bookView.initAddForm);
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
// need to add route for init update
// the directions are asking us to call fetchOne and then initAddForm
// bleh this is wrong
// :book-id before update?
// page('/books/:book_id/update', ctx => app.Book.fetchOne(ctx, app.bookView.initUpdateFormPage(ctx)));
page('/books/:book_id/update', (ctx, next) => app.Book.fetchOne(ctx, next), (ctx) => app.bookView.initUpdateFormPage(ctx));


// page('/admin', (ctx, next) => app.adminView.initAdminPage(ctx, next), (ctx) => app.adminView.login(ctx));

page('/admin', app.adminView.initAdminPage);

page();