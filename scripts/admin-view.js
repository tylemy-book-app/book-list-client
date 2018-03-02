'use strict';

var app = app || {};

(function (module){
  const adminView = {};

  adminView.initAdminPage = function(ctx, next) {
    $('#admin-form').on('submit', function (event) {
      event.preventDefault();
      let tokenEntered = event.target.passphrase.value;

      $.get(`${__API_URL__}/admin`, { tokenEntered })
        // .then(function (verified) {
        //   if verified do something
        //   localStorage.tokenVerified = true;
        //   page('/wherever')
        // else do a different thing
        //   localStorage.tokenVerified = false;
        //   page('/somewhereElse')
        // })
        .catch(err)

    })
    next();
  }

  adminView.verify(function(ctx) {
    // if localStorage.token do something
    // else do another thing
  });

  module.adminView = adminView;
})(app);