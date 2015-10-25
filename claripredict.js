var clarifai;

// on document ready, instantiate the Clarifai object
function init(){
    clarifai = new Clarifai(
        {
            'clientId': 'HY8s4PXksIVD-QgPdGg2jyEi3AvWp1ltaGIWLOiZ',
            'clientSecret': 'p4rJp9nEELx9i14xTsWsP-EaAUThcRfKcgEaZJpc'
        }
    );
}

pics = new Array();

function predicter(){
  $.get("http://52.10.115.116/api/getTweets.php?query=technicalteamsolutions", function(data)
{
  pics = data;
});
}

var vals = [];

function predictmultiple(){
  for (var i = 0; i < pics.length; i++){
    var thing = {
      url: pics[i],
      val: predict(pics[i])
    };
    vals.push(thing);
  }
}

function sortswag(){
  predictmultiple();
  vals.sort(
    function(a,b) {
      if (a[1] == b[1])
      return a[1] < b[1] ? -1 : 1;
}
);
}

function promiseResolved(obj){
    console.log('promiseResolved', obj);
}

function promiseRejected(obj){
    console.log('promiseRejected', obj);
}

function predict(url){
    clarifai.predict(url, 'swag', cb).then(
        promiseResolved,
        promiseRejected
    );
}

function cb(obj){
    console.log('cb', obj);
}


$(document).ready(function() {
  predicter();
  init();
}
);
