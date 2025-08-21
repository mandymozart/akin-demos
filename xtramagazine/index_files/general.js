(function ($) {

  $(function () {
    var isDragging = false;
    var wasDragging = false;

    // Detect dragging in candy bar and disable links accordingly
    $('.candy-menu ul')
      .mousedown(function () {
        $(window).mousemove(function () {
          isDragging = true;
          $(window).unbind("mousemove");
        });
      })
      .mouseup(function () {
        wasDragging = isDragging;
        isDragging = false;
        $(window).unbind("mousemove");
      });

    $('.candy-menu ul a').on('click', function (e) {
      // If on a drag disable link follow
      if (wasDragging) e.preventDefault();
    });

    $.fn.isInViewport = function () {
      let elementTop = $(this).offset().top;
      let elementBottom = elementTop + $(this).outerHeight();
      let viewportTop = $(window).scrollTop();
      let viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $.fn.calcPercentage = function () {
      let elementTop = $(this).offset().top;
      let elementBottom = elementTop + $(this).outerHeight();
      let viewportTop = $(window).scrollTop();
      let viewportBottom = viewportTop + $(window).height();

      let percentage = (viewportBottom - elementTop) / (elementBottom - elementTop) * 100;
      return Math.floor(percentage);
    };

    /**
     * If an article track scroll depth
     */
    if ($('.entry-content-holder').length > 0) {
      let push25, push50, push75, push100 = false;

      $(window).on('resize scroll', function () {
        if ($('.entry-content-holder').isInViewport()) {
          let readPercentage = $('.entry-content-holder').calcPercentage();
          // do something
          if (!push25 && readPercentage == 25) {
            push25 = true;
            pushDataLayer('25');
          }
          if (!push50 && readPercentage == 50) {
            push50 = true;
            pushDataLayer('50');
          }
          if (!push75 && readPercentage == 75) {
            push75 = true;
            pushDataLayer('75');
          }
          if (!push100 && readPercentage == 100) {
            push100 = true;
            pushDataLayer('100');
          }
        } else { }

      });
    }

    /**
     * Check is valid email
     * @param {string} email
     * @return {bool}
     */
    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    /**
     * Newsletter email input change event
     */
    var emailInput = document.querySelectorAll(".mc-email-input");
    emailInput.forEach(function (e) {
      e.addEventListener("change", function (item) {
        let emailVal = this.value;

        if (!isEmail(emailVal)) {
          this.style.border = "1px solid red";
          return false;
        } else {
          this.style.border = "none";
        }
      });
    });

    /**
     * Newsletter signup click event
     */
    $(document).on("click","#mc-embedded-subscribe, #mc-embedded-subscribe-block", function (event) {

      event.preventDefault();
      $this = $(this);
      let frmID = $this.closest("form").attr("id");
      let emailElement = $this.closest("form").find("input[type=email]");
      let emailVal = emailElement.val();

      if (!isEmail(emailVal)) {
        emailElement.css("border", "1px solid red");
        return false;
      } else {
        emailElement.css("border", "none");
      }

      // Determine source of MC newsletter subscription
      if (frmID == "mc-embedded-subscribe-form-footer") {
        source = "footer";
      } else if (frmID == "mc-inline-subscribe-block-form") {
        source = "article";
      } else {
        source = "drawer";
      }

      // push to dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "newsletter-signup",
        mc_signup_source: source,
      });

      $("#" + frmID).submit();
    });

    $(document).on("DOMSubtreeModified", "#mce-error-response, #mce-success-response", function (event) {
      let responseDivObj = $(this);
      if (responseDivObj.attr('id') == 'mce-success-response') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'success': true
        });
      } else {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'success': false
        });
      }
    })

    $(document).on("click", "#search", function () {
      $("#s").focus();
    })
    
    /**
     * Set title attribute on Youtube Iframes
     * 
     * @return {void}
     */
    async function addTitlesToVideoIframes() {
      var iframes = document.getElementsByTagName('iframe');

      // Loop through iframes and set the title on Youtube URLs
      for (var i=0; i<iframes.length; i++) {
        var title = iframes[i].getAttribute("title");
        var url = iframes[i].src;

        if (url != undefined || url != '') {
          var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
          var match = url.match(regExp);

          // The URL matches youtube call the noembed service
          if (match && match[2].length == 11 && title == null) {
            var data = await fetch('https://noembed.com/embed?dataType=json&url='+ url)
              .then(res => res.json())
              .then(data => data.title);

            // Create and set the title attribute
            var att = document.createAttribute("title");
            att.value = data;
            iframes[i].setAttributeNode(att);
          }
        }
      }
    }

    $(document).ready(function () {
      $(window).on("load", function () {
        if (jQuery(window).width() >= 992) {
          chkAdvOverlapping();
        }
      });

      let hash = window.location.hash;
      if ( hash ) {
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }

      addTitlesToVideoIframes();

    })


    // Community presentation scroll handler
    if (document.body.classList.contains('community-presentation')) {
      window.onscroll = function () { handleScroll() };
      window.onresize = function (event) { handleScroll() };
      var header = document.getElementById("join-block");
      const rect = header.getBoundingClientRect();
      const device = window.matchMedia("(max-width: 576px)").matches;
      function handleScroll() {
        if (window.matchMedia("(max-width: 767px)").matches) {
          header.style.opacity = "0";
          jQuery("#join-block-new").show();
          $('#join-block-new').fadeIn("slow", function () {
            $(this).addClass('btmsticky')
          });
        } else {
          jQuery("#join-block-new").show();
          if (window.pageYOffset > rect.top) {

            header.style.opacity = "0.0";
            $('#join-block-new').fadeIn("slow", function () {
              $(this).addClass('btmsticky')
            });
          } else if (window.pageYOffset <= rect.top) {
            header.style.opacity = "1";
            $('#join-block-new').fadeOut("slow", function () {
              $(this).removeClass('btmsticky')
            });
          }
        }
      }
    }

  });


})(jQuery);

function chkAdvOverlapping() {
  let advScrollTop = new Array();
  let advCoveredArea = new Array();
  let advertisementHeight = 0;
  let advEndPoint = 0;

  let lastObj = jQuery(".entry-content").not('div.empty').children('div.ad-container:last');

  if (lastObj.length > 0) {
    advertisementHeight = parseInt(jQuery(lastObj).find('.advertisement').outerHeight(), 10);
    advEndPoint = parseInt(jQuery(lastObj).offset().top, 10) + advertisementHeight;
    if (advEndPoint > jQuery(".entry-footer").offset().top) {
      jQuery(".entry-footer").css('margin-top', advertisementHeight - 20);
    }
  }

  jQuery("figure.alignwide, figure.alignfull").each(function (index, value) {
    for (let j = 0; j < advCoveredArea.length; j++) {
      let imgBottomOffset = jQuery(this).offset().top + jQuery(this).outerHeight();
      if ((jQuery(this).offset().top >= advScrollTop[j] && jQuery(this).offset().top <= advCoveredArea[j]) || (imgBottomOffset >= advScrollTop[j] && imgBottomOffset <= advCoveredArea[j])) {
        jQuery(this)
          .removeClass('alignwide')
          .removeClass('alignfull')
          .addClass('aligncenter');
      }
    }

  })
}

function pushDataLayer(value) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'article-milestone',
    'scroll_measure_percent': value + '%',
    'scroll_measure_value': value
  });
}

function handleWindow() {
  var body = document.querySelector('body');

  if (window.innerWidth > body.clientWidth + 5) {
    body.classList.add('has-scrollbar');
  } else {
    body.classList.remove('has-scrollbar');
  }
}

handleWindow();
window.addEventListener('resize', handleWindow());

// Resize fix for iOS in drawer menu
let vh = window.innerHeight * 0.01;
// Set the value in the --vh custom property to root of document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});