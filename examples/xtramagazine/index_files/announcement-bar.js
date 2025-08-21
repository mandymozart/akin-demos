jQuery(function ($) {
  $(document).ready(function () {
    const hamburgerButton = document.querySelectorAll(".hamburger");
    for (let i = 0; i < hamburgerButton.length; i++) {
      hamburgerButton[i].addEventListener('click', function(event) {
          if ($(".announcement-bar").hasClass('force-close')) return false;

          if (this.classList.contains('is-active')) {
            $(".announcement-bar").slideUp('slow');
          } else{
            $(".announcement-bar").slideDown('slow');
          }
      });
    }

    // Get announcement bar via AJAX
    let _baseUrl = location.protocol + '//' + location.host;
    $.ajax({
      type: 'POST',
      url: _baseUrl + "/wp-admin/admin-ajax.php",
      data: {
        action: 'get_announcement_data'
      },
      dataType: "json",
      // async: true,
      success: function (responce) {
        if (responce['process'] == 'success') {
          $("#announcement-bar-wrapper").html(responce['HTML']);
          // Set the site-content top padding.
          setSiteContentPadding();
          setClickEvents();
        }
      }
    });

    function setSiteContentPadding() {
      if ($(".announcement-bar").is(":visible")) {
        let siteContentPadding = jQuery(".site-content").css('padding-top');
        let announcementBarHeight = parseInt($("#announcement-bar-wrapper").outerHeight());
        let modifiedPaddingTop = parseInt(siteContentPadding) + parseInt(announcementBarHeight);

        if($('body').hasClass('show-nav-bar')) {
          let siteHeaderHeight = jQuery(".site-header").css('height');
          let modifiedheaderHeight = parseInt(siteHeaderHeight);
          $(".site-content").css('padding-top', modifiedheaderHeight   + 'px');
        } else {
          $(".site-content").css('padding-top', modifiedPaddingTop + 'px');
        }
      }
    }

    function setClickEvents() {
      $('.announcement-bar span,#destination').click(function (event) {
        event.preventDefault();
        let obj = $(this);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        let postID = $('.announcement-bar').data('post-id');
        let item = [{
          post_id: postID,
          cookie_set_date: today
        }];
        let prevCookie = getCookie('announcement_post_id');
        let newItem = [];
        if (prevCookie != '') {
          newItem = JSON.parse(prevCookie);
        }
        newItem.push(item);

        let _baseUrl = location.protocol + '//' + location.host;
        $.ajax({
          type: 'POST',
          url: _baseUrl + "/wp-admin/admin-ajax.php",
          data: {
            action: 'set_announcement_cookie',
            post_id: postID,
            cookie_set_date: today
          },
          dataType: "json",
          async: false,
          success: function (responce) {
            if (responce['process'] == 'success') {
              $(".announcement-bar").slideUp('slow', function () {
                if (obj.attr('id') == 'destination') {
                  window.location = obj.attr('href');
                } else{
                  $(".announcement-bar").addClass('force-close')
                }

                // Set the site-content top top padding.
                let siteContentPadding = $(".site-content").css('padding-top');
                let announcementBarHeight = $(".announcement-bar").outerHeight();
                siteContentPadding = parseInt(siteContentPadding) - parseInt(announcementBarHeight);

                if ($(".announcement-bar").is(":visible")) {
                  siteContentPadding = parseInt(siteContentPadding) + parseInt(announcementBarHeight);
                  $(".site-content").css('padding-top', siteContentPadding + 'px');
                } else {
                  let siteHeaderHeight = jQuery(".site-header").outerHeight();
                  siteContentPadding = parseInt(siteHeaderHeight);
                }

                $(".site-content").css('padding-top', siteContentPadding + 'px');

                let newsLettersElement = $('.select-all-wrap');

                if (newsLettersElement.length > 0) {
                  let currentPadding = newsLettersElement.css('top');
                  let newPadding = parseInt(currentPadding) - parseInt(announcementBarHeight);
                  newsLettersElement.css('top', newPadding + 'px')
                }
              });
            }
          }
        });
      })
    }
  })
});

function setCookie(key, value, expiry) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}