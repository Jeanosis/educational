(function(document, window){
    var input = document.getElementById('txt');
    input.addEventListener("change", function(){

        var uniqueWords = remainingWords(uniqueWords);
        console.log(uniqueWords);
    });

    function remainingWords(uniqueWords) {
        var str = input.value;

        str = str.match(/(\b\w+\b)(?=(.*\b\1\b){2,})/gi);
        
        if(str) {
            var words_str = str.join(' ');

            words_str = words_str.replace(/(\b\w+\b)\s+(?=.*\1)/gi, '');

            return words_str.split(' ');
        }
    }

})(document, window);