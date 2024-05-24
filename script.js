$(document).ready(function() {

    // Get the modal and button elements
    var modal = $('#modal');
    var btnOpen = $('#open-modal');
    var btnClose = $('#close-modal');
  
    // Open the modal when the open button is clicked
    btnOpen.click(function() {
      modal.show();
    });
  
    // Close the modal when the close button or the background is clicked
    btnClose.click(function() {
      modal.hide();
    });
  
    // Close the modal when the user clicks outside of it (optional)
    $(window).click(function(event) {
      if (event.target == modal[0]) {
        modal.hide();
      }
    });
  
  });
  