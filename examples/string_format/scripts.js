(function(document, window){
    var input = document.getElementById('txt');

    input.addEventListener('change', function(event) {
        var element = event.target;
        var str = element.value;

        console.log("Before editing: '" + str + "'");
        str = str.replace(/[ ]{2,}/g, ' ');// /\s\s+/g, ' ');
        str = str.replace(/(^ | $)/g, '');
        console.log("After editing: '" + str + "'");
    });
})(document, window);