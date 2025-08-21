(function ($) {
  $(document).ready(function () {
    let _baseUrl = location.protocol + '//' + location.host;

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
    * Check is empty select  
    * @param {Object} selectID
    * @return { Void }
    */ 
    function checkSelect(selectID) {
      $(selectID).on('change', function (e) {

        if (this.value == '') {
          $(this).css('border', '1px solid red');
        } else {
          $(this).css('border', '1px solid green');
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

    $('#suggestacorrection').on('show.bs.modal', function (e) {
      if (window.innerWidth < 576) {
        var headerTop = $('.site-header .header__container').position().top;
        var headerHeight = $('.site-header .header__container').outerHeight();
        var modalTopSpace = headerTop + headerHeight;
        $(this).find('.modal-dialog').css('margin-top', modalTopSpace);
      }
    });

    var suggestion_correction = $('body').find('#suggestion_correction');
    if (suggestion_correction) {
      //run time form validation
      checkNameEmpty("#name");
      checkValidEmail("#inputEmail");
      checkComment("#message");
      checkSelect("#correction_type");
    }

    $('body').on('change', '#user_copy', function () {

      if ($(this).is(':checked')) {
        $(this).closest('.form-check').find('label').addClass('checked');
      } else {
        $(this).closest('.form-check').find('label').removeClass('checked');
      }
    });

    $("#suggestion_correction").submit(function (event) {
      event.preventDefault();
      var submitText = $(this).find('.btn-primary');
      if ($(submitText).hasClass('loading')) {
        submitText.removeClass('loading')
      } else {
        submitText.addClass('loading')
      }

      var isValid = true;
      if ($("#name").val() == '') {
        $("#name").css('border', '1px solid red');
        isValid = false;
      }

      if ($("#inputEmail").val() == '') {
        $("#inputEmail").css('border', '1px solid red');
        isValid = false;
      }

      if ($("#inputEmail").val() != '') {
        var email = $("#inputEmail").val();
        if (!validateEmail(email)) {
          isValid = false;
        }
      }
      if ($("#correction_type option:selected").val() === "") {
        $("#correction_type").css('border', '1px solid red');
        isValid = false;
      }

      if ($("#message").val() == '') {
        $("#message").css('border', '1px solid red');
        isValid = false;
      }

      if (!isValid) {
        submitText.removeClass('loading')

        return false;
      }
      var suggestion_response = $('body').find('#suggestion_response');
      suggestion_response.html('').show();

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
          suggestion_response.html('').html(result.message);

          if (result.is_error) {
            suggestion_response.addClass('alert-danger');
          } else {
            suggestion_response.addClass('alert-success');
          }

          suggestion_response.show();
          setTimeout(function () {
            suggestion_response.fadeOut();

            if (!result.is_error) {
              $('body').find("#suggestacorrection").modal('hide');
              $('#suggestion_correction').trigger("reset");
            }
          }, 5000);
        }
      });
    });
  })
})(jQuery)