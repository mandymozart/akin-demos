(function($) {
  $(document).ready(function() {

    // Get related article via AJAX
    let _baseUrl = location.protocol + '//' + location.host;
    $.ajax({
      type: 'POST',
      url: _baseUrl + "/wp-admin/admin-ajax.php",
      data: {
        action: 'get_related_article_data',
        post_id: ajax_var.post_id,
        nonce: ajax_var.nonce,
        template: 'thumbnail'
      },
      dataType: "json",
      success: function (responce) {
        if (responce['process'] == 'success') {
          $(".related-article").html(responce['HTML']);
          // Set the site-content top padding.
        }
      }
    });

  })
})(jQuery)