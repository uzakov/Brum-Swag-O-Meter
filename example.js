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


function getImageURL() {
  return $("#image").val();
}

// send a 'positive' url
function positive(){
    clarifai.positive(getImageURL(), 'swag', cb).then(
        promiseResolved,
        promiseRejected
    );
}

// send a 'negative' url
function negative(){
    clarifai.negative(getImageURL(), 'swag', cb).then(
        promiseResolved,
        promiseRejected
    );
}

// explicitly train our concept
function train(){
    clarifai.train('swag', cb).then(
        promiseResolved,
        promiseRejected
    );
}

function promiseResolved(obj){
    console.log('promiseResolved', obj);
}

function promiseRejected(obj){
    console.log('promiseRejected', obj);
}

function predict(){
    clarifai.predict(getImageURL(), 'swag', cb).then(
        promiseResolved,
        promiseRejected
    );
}

function cb(obj){
    console.log('cb', obj);
}


$(document).ready(init);
