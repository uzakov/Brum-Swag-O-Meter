/*
 * Returns a Clarifai object with our credentials (oh noes).
 */
function swagClarifai() {
  return new Clarifai({
      'clientId':'HY8s4PXksIVD-QgPdGg2jyEi3AvWp1ltaGIWLOiZ',
      'clientSecret':'p4rJp9nEELx9i14xTsWsP-EaAUThcRfKcgEaZJpc'
    });
}

/*
 * Splits the images text field into an array of strings seperated by new lines.
 */
function getImageArray() {
  return $("#images").val().split("\n");
}

/*
 * Sets up JQuery event listeners and handlers.
 */
$(document).ready(function() {

  /*
   * Submits the given images as swag (when the user clicks swag button)
   */
  $("#trainer").children("input[value='swag']").click(function() {
    var clarifai = swagClarifai();
    clarifai.positive(getImageArray(), 'swag');
    clarifai.train('swag');
  });

  /*
   * Submits the given images as not swag (when the user clicks not swag button)
   */
  $("#trainer").children("input[value='notSwag']").click(function() {
    var clarifai = swagClarifai();
    clarifai.negative(getImageArray(), 'swag');
    clarifai.train('swag');
  });
});
