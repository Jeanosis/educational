(function(document, window){
    var input = document.getElementById('txt');
    input.addEventListener("change", function(){

        //(\b\w+\b)\s+(?=(.*\b\1\b\s+){2,})
        // console.log(str);
        var words = remainingWords(words);
        console.log(words);
    });

    function remainingWords(words) {
        var str = input.value,
            regexp = /(\b\w+\b)(?=(.*\b\1\b){2,})/gi;
        // последние найденные слова лагают,
        // хотя слово повторяющееся определяет праильно

        str = str.match(regexp);

        var uniqueWords = [];
        
            for (var i = 0; i < str.length; i++) {
                uniqueWords.push(str[i]);
    
                for(var j = i + 1; j < str.length; j++) {
                    if (str[i].toLowerCase() === str[j].toLowerCase()) {
                        uniqueWords.pop(str[j]);
                    }
                }
            }
        return uniqueWords;
    }

})(document, window);