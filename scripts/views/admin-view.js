'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000';
// var __API_URL__ = 'https://tf-jc-booklist.herokuapp.com';

(function (module){
  const adminView = {};

  function reset() {
    $('.container').hide();
    $('.navigation').slideDown(350);
  }

  adminView.initAdminPage = function() {
    reset();
    
    console.log('from initadminpage');
    localStorage.setItem('adminRights', false);
    $('.admin-page').show();
    $('#admin-form').on('submit', function (event) {
      event.preventDefault();
      let tokenValue = event.target.passcode.value;
      console.log(tokenValue);
    
      $.get(`${__API_URL__}/admin`, {tokenValue})
        .then(function (success) {
          if (success) {
            localStorage.setItem('adminRights', true);
            alert('You are now logged in');
            page('/');
          } else {
            localStorage.setItem('adminRights', false);
            alert('Stop trying to steal our stuff');
            page('/');
          }
    //     //   localStorage.tokenVerified = true;
    //     //   page('/wherever')
    //     // else do a different thing
    //     //   localStorage.tokenVerified = false;
    //     //   page('/somewhereElse')
    //     // })
    //     .catch(err)

    });
    // next();
  });
  }
  // adminView.login(function(ctx) {
  //   // if localStorage.token do something
  //   // else do another thing
  // });

  module.adminView = adminView;
})(app);