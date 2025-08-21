(function ($) {
  $(document).ready(function () {
    let _baseUrl = location.protocol + '//' + location.host;

    const contributor_email = document.querySelector("#contributor-email");

    if (contributor_email != null) {
      contributor_email.addEventListener("click", contributoremailClick, false);
    }

    function contributoremailClick(event) {
      event.preventDefault();
      $("#contributor-contact-form").modal('show');
    }

    /**
     * Apply CSS for empty element object 
     * @param { Object } inputID
     * @return { Void }
     */
    function checkNameEmpty(inputID) {
      $(inputID).blur(function () {

        if ($(this).val() == '') {
          $(this).css('border', '1px solid red');
        } else {
          $(this).css('border', '1px solid green');

        }
      });
    }

    /**
     * Check Regex to validate
     * @param {String} email
     * @return { Bool }
     */
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(email);
    }


    /**
     * Validation for email input using validateEmail Function
     * @param {Object} email
     * @return { Void }
     */
    function checkValidEmail(emailInputID) {
      $(emailInputID).blur(function () {
        var email = $(emailInputID).val();

        if (validateEmail(email)) {
          $(this).css('border', '1px solid green');

        } else {
          $(this).css('border', '1px solid red');
        }
      });
    }

    /**
     * Check is empty textarea
     * @param {Object} commentID
     * @return { Void }
     */
    function checkComment(commentID) {
      $(commentID).blur(function () {

        if ($(this).val() == '') {
          $(this).css('border', '1px solid red');
        } else {
          $(this).css('border', '1px solid green');

        }
      });

    }

    $('#contributor-contact-form').on('show.bs.modal', function (e) {
      if (window.innerWidth < 576) {
        var headerTop = $('.site-header .header__container').position().top;
        var headerHeight = $('.site-header .header__container').outerHeight();
        var modalTopSpace = headerTop + headerHeight;
        $(this).find('.modal-dialog').css('margin-top', modalTopSpace);
      }
    });

    var contributor_contact_form = $('body').find('#contributor-contact-form');
    if (contributor_contact_form) {
      //run time form validation
      checkNameEmpty("#contributor_contact_name");
      checkValidEmail("#contributor_contact_email");
      checkComment("#contributor_contact_message");
    }

    $('body').on('change', '#contributor_contact_user_copy', function () {

      if ($(this).is(':checked')) {
        $(this).closest('.form-check').find('label').addClass('checked');
      } else {
        $(this).closest('.form-check').find('label').removeClass('checked');
      }
    });

    $("#contributor_contact").submit(function (event) {
      event.preventDefault();
      var submitText = $(this).find('.btn-primary');
      if ($(submitText).hasClass('loading')) {
        submitText.removeClass('loading')
      } else {
        submitText.addClass('loading')
      }

      var isValid = true;
      if ($("#contributor_contact_name").val() == '') {
        $("#contributor_contact_name").css('border', '1px solid red');
        isValid = false;
      }

      if ($("#contributor_contact_email").val() == '') {
        $("#contributor_contact_email").css('border', '1px solid red');
        isValid = false;
      }

      if ($("#contributor_contact_email").val() != '') {
        var email = $("#contributor_contact_email").val();
        if (!validateEmail(email)) {
          isValid = false;
        }
      }

      if ($("#contributor_contact_message").val() == '') {
        $("#contributor_contact_message").css('border', '1px solid red');
        isValid = false;
      }

      if (!isValid) {
        submitText.removeClass('loading')

        return false;
      }
      var contributor_contact_response = $('body').find('#contributor_contact_response');
      contributor_contact_response.html('').show();

      $.ajax({
        url: _baseUrl + "/wp-admin/admin-ajax.php",
        type: 'POST',
        dataType: "json",
        data: $(this).serialize(),
        beforeSend: function () {
          submitText.html('Processing...');
        },
        success: function (result) {
          submitText.html('Submit').removeClass('loading');
          contributor_contact_response.html('').html(result.message);

          if (result.is_error) {
            contributor_contact_response.addClass('alert-danger');
          } else {
            contributor_contact_response.addClass('alert-success');
          }

          contributor_contact_response.show();
          setTimeout(function () {
            contributor_contact_response.fadeOut();

            if (!result.is_error) {
              $('body').find("#contributor-contact-form").modal('hide');
              $('#contributor_contact').trigger("reset");
            }
          }, 5000);
        }
      });
    });
  })
})(jQuery)