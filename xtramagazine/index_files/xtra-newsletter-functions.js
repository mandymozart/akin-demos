(function ($) {
  $(document).ready(function () {
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function clear_error_message() {
      var checkboxError = document.querySelectorAll('.checkbox_error');
      checkboxError.forEach(box => {
        box.remove();
      });
    }

    let unsubscribe_lists_ids = [];
    let unsubscribe_lists = document.getElementById('unsubscribe_lists')
    let mc_update = document.getElementById('mc-update-btn');
    let original_choices = 0;

    function setUnsubscribeList($this, action) {
      let subscribed_checked_choices = 0;
      let current_choices = 0;

      if (action == 'single_click') {
        if(selectAllNewsletterEmail.checked) {
          selectAllNewsletterEmail.checked = false
        }
      }

      document.querySelectorAll('.news-list-wrap .form-check-input').forEach(function(element) {
        if (element.dataset.mc_status == 'subscribed' && element.checked) {
          subscribed_checked_choices++;
        }

        if (element.checked) {
          current_choices++;
        }
      })

      if($this.checked == false && $this.dataset.mc_status != 'none') {
        if (action == 'select_all') {
            if ($this.dataset.mc_status == 'subscribed') {
              unsubscribe_lists_ids.push($this.value);
            }
        } else {
          unsubscribe_lists_ids.push($this.value);
        }
      } else {
        var index = unsubscribe_lists_ids.indexOf($this.value);
        if (index !== -1) {
          unsubscribe_lists_ids.splice(index, 1);
        }
      }

      unsubscribe_lists_ids = unsubscribe_lists_ids.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
      });

      if (unsubscribe_lists_ids && mc_update != null) {
        if (original_choices == subscribed_checked_choices && subscribed_checked_choices == current_choices) {
          mc_update.disabled = true;
        }else {
          mc_update.disabled = false;
        }
      }

      if (unsubscribe_lists != null) {
        unsubscribe_lists.value = unsubscribe_lists_ids.join(",");
      }
    }

    document.querySelectorAll('.news-list-wrap .form-check-input').forEach(function(element) {
      if (element.checked) {
        original_choices++;
      }

      element.addEventListener('change', function(e) {
       setUnsubscribeList(this, 'single_click');
      })
    })

    function setNewsletterCheckBoxValue(selectAllvalue) {
      document.querySelectorAll('.news-list-wrap .form-check-input').forEach(function(element) {
        if (selectAllvalue) {
          element.checked = true;
        } else {
          element.checked = false;
        }

        setUnsubscribeList(element, 'select_all');
      });
    }

    let selectAllNewsletterEmail = document.getElementById('select-all');

    if (selectAllNewsletterEmail != null) {
      selectAllNewsletterEmail.addEventListener('change', function(e) {
        setNewsletterCheckBoxValue(this.checked);
      });
    }

    setTimeout(function () {
      let newSletters = document.querySelector('.newsletter-wrap');
      if (newSletters) {
        let announcementBarHeight =  document.getElementById('announcement-bar-wrapper');
        let headerHeight = document.getElementById('masthead').offsetHeight;

        if (announcementBarHeight.length > 0) {
          announcementBarHeight.offsetHeight;
          headerHeight = parseInt(headerHeight) - parseInt(announcementBarHeight) ;
        }

        let wpadminbar_height = document.getElementById('wpadminbar');
        if (wpadminbar_height != null) {
          headerHeight = parseInt(headerHeight) + parseInt(wpadminbar_height.offsetHeight);
        }

        document.querySelector(".select-all-wrap").style.top = headerHeight + "px";
      }
    }, 1000);

    var newsletterEmail = document.getElementById('newsletter_email');
    var newsletterResponse = document.getElementById('newsletter-response');
    var finishSection = document.getElementById('finish-box');
    var subscribeSection = document.getElementById('subscribe-box');
    var subscribeAgainSection = document.getElementById('subscribe-again-box');
    var errorConnectingToMailchimp = document.getElementById('error-connecting-to-mailchimp');
    var mixMailchimpResponse = document.getElementById('mix-mailchimp-response');
    var update_preferences = document.getElementById('update_preferences');
    var new_audience = document.getElementById('new_audience');

    if (newsletterEmail != null) {
      newsletterEmail.addEventListener('focusout', function (event) {
        if (!validateEmail((event.target.value))) {
          newsletterEmail.classList.add('border-danger');
          newsletterResponse.classList.remove('d-none');
          newsletterResponse.innerHTML = '<p class="alert alert-danger col-8 mt-2">'+ newsletter_ajax_var.invalid_email_message +'<p>';
        } else {
          newsletterEmail.classList.remove('border-danger')
          newsletterResponse.classList.add('d-none');
        }
      });
    }

    // Process newsletter
    $('#newsletter-subcription-form').submit(function (e) {
      e.preventDefault();
      var ajaxProcess = true;
      let audienceName = [];
      let add_new_audience = {};
      if (newsletterEmail.value == '') {
        newsletterEmail.classList.add('border-danger');
      } else if (!validateEmail(newsletterEmail.value)) {
        newsletterEmail.classList.add('border-danger');
      } else {
        newsletterEmail.classList.remove('border-danger')
        var audienceIDs = document.getElementsByName('audience_ids[]');
        var audienceIDsChecked = false;
        clear_error_message();

        if (update_preferences){
          audienceIDsChecked = true;
        }

        // looping through all checkboxes
        for (var i = 0; i < audienceIDs.length; i++) {

          if (audienceIDs[i].checked) {
            audienceName.push(audienceIDs[i].dataset.audience_name)
            if (update_preferences) {
              add_new_audience[audienceIDs[i].value] = audienceIDs[i].dataset.mc_status;
            }
          }

          if (!audienceIDs[i].checked && !audienceIDsChecked) {
            var newElement = document.createElement('p');
            newElement.classList.add('checkbox_error', 'alert', 'alert-danger', 'mt-2');
            newElement.innerHTML = newsletter_ajax_var.checkbox_error_message;
            var elementParent = audienceIDs[i].parentNode;
            elementParent.appendChild(newElement);
            ajaxProcess = false;
          } else {
            audienceIDsChecked = true;
            ajaxProcess = true;
            clear_error_message();
          }
        }

        if (ajaxProcess) {

          let subscribeType = window.localStorage.getItem('subscribeType');
          let subscribePagepath = window.localStorage.getItem('subscribePagepath');
          new_audience.value = JSON.stringify(add_new_audience);
          if (subscribeType != null && audienceName.length > 0) {
            let eventLabel = 'Confirm Subscription - ('+ subscribeType +') - (' + audienceName.toString() +') - (' + subscribePagepath+')';
            let subscribeEvent = {
              'event': 'newsletter-signup',
              'event_category': 'NTG newsletter',
              'event_action': 'newsletter signup',
              'event_noninteraction': false,
              'label' : eventLabel
            };

            // push to dataLayer
            window.dataLayer = window.dataLayer || [];
            try {
              window.localStorage.removeItem('subscribeType');
              window.localStorage.removeItem('subscribePagepath');
              window.dataLayer.push(subscribeEvent);
            } catch (err) {}
          }

          $.ajax({
            url: newsletter_ajax_var.admin_ajax,
            method: "POST",
            data: $(this).serialize(),
            beforeSend: function () {
              newsletterResponse.classList.remove('d-none')
              newsletterResponse.innerHTML = '<span class="text-info">Processing...</span>';
            },
            dataType: "json",
            success: function (response) {
              newsletterResponse.classList.remove('d-none');

              if (response.is_error) {
                newsletterResponse.innerHTML = response.message;
              } else if (response.is_update_preferences && !response.is_error) {
                mc_update.disabled = true;
                newsletterResponse.innerHTML = response.message;
                if ('audience_ids' in response){
                  for (let updatedaudienceDetails in response.audience_ids) {
                    let mc_status = document.getElementById(updatedaudienceDetails);
                    mc_status.dataset.mc_status = response.audience_ids[updatedaudienceDetails].updated_status;
                  }
                }
              } else if ('audience_ids' in response) {
                let html = '';
                let isError = existingSubscriptions = indexCount= statusCode404 = is_completed = 0;

                for (let audienceDetails in response.audience_ids) {
                  let audienceClass = 'success alert alert-success mt-3';
                  let statusCode = response.audience_ids[audienceDetails].status_code;

                  if (response.audience_ids[audienceDetails].is_error && statusCode != 404) {
                    audienceClass = 'error alert alert-danger error mt-3';
                    isError++;
                    let audienceName = $("#" + audienceDetails).data('audience_name');
                    let messageString = response.audience_ids[audienceDetails].message.replace("{{NAME}}", audienceName);
                    html += '<p class="' + audienceClass + '">' + messageString + '</p>';
                  } else if (response.audience_ids[audienceDetails].is_error == false) {
                    is_completed++;
                  }

                  if (statusCode == 400) {
                    existingSubscriptions++;
                    isError--;
                  } else if (statusCode == 404){
                    statusCode404++;
                  }

                  indexCount++
                }

                if (statusCode404 == indexCount) {

                  if (errorConnectingToMailchimp.classList.contains('d-none')) {
                    subscribeSection.classList.add('d-none');
                    errorConnectingToMailchimp.classList.remove('d-none');
                  }
                } else {

                  if (indexCount == isError) {
                    newsletterResponse.innerHTML = html;
                  } else if (indexCount == existingSubscriptions) {

                    if (!finishSection.classList.contains('d-none')) {
                      finishSection.classList.add('d-none');
                    }
                    subscribeAgainSection.classList.remove('d-none');
                    subscribeSection.classList.add('d-none');
                  } else if (is_completed == indexCount) {

                      finishSection.classList.remove('d-none');
                      subscribeSection.classList.add('d-none');

                      if (!subscribeAgainSection.classList.contains('d-none')) {
                        subscribeAgainSection.classList.add('d-none');
                      }
                  } else {

                    if (mixMailchimpResponse.classList.contains('d-none')) {
                      subscribeSection.classList.add('d-none');
                      mixMailchimpResponse.classList.remove('d-none');
                    }
                  }
                }
              }

              setTimeout(function () {
                newsletterResponse.classList.add('d-none');
              }, 15000);
            }
          });
        }
      }
      newsletter_email.focus();
    });

    [...document.querySelectorAll('.subscribe-btn')].forEach(element => element.addEventListener('click', function(event) {
      event.preventDefault();
      let subscribeType = element.dataset.subscribetype ? element.dataset.subscribetype : false;
      let eventLabel = 'Subscribe Now button click - ('+ subscribeType +') - (' + window.location.pathname +')'
      window.localStorage.removeItem('subscribeType');
      window.localStorage.removeItem('subscribePagepath');
      window.localStorage.setItem('subscribeType', subscribeType);
      window.localStorage.setItem('subscribePagepath', window.location.pathname)
      let subscribeEvent = {
        'event': 'newsletter-signup',
        'event_category': 'NTG newsletter',
        'event_action': 'newsletter signup',
        'event_noninteraction': false,
        'label' : eventLabel
      };

      // push to dataLayer
      window.dataLayer = window.dataLayer || [];
      try {
        window.dataLayer.push(subscribeEvent);
      } catch (err) {}

      window.location = element.getAttribute('href');
    }));
  })
})(jQuery)
