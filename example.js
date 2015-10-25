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

var phishPositives = [
  'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpa1/v/t34.0-12/12178296_995357990484275_903342983_n.jpg?oh=1c3ed5c0e0bc39ecb68c2fe3a318e723&oe=562E5371&__gda__=1445897774_ea59f5c139fd2fcc83c1d72bb0290638'
];

$(document).ready(init);
