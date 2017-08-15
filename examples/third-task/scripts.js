(function(document, window){
    var input = document.getElementById('txt');

    input.addEventListener("change", function(){
        var words = getWords(input.value);

        console.log('WORDS', words);
        // words = removeDuplicates(words);
        // console.log('Unique', words);
    });

    /**
     * Take the words from the string
     * 
     * @param {string} str String with words
     * @return {string} Words to which the string is broken
     */
    function getWords(str) {
        // var beginIndex = str[0] === ' ' ? -1 : 0;
        // var words = [];

        // for (var i = 1; i < str.length; i++) {
        //     if (beginIndex > -1 && str[i] === ' ') {
        //         words.push(str.substring(beginIndex, i));

        //         beginIndex = -1;
        //     } else if (str[i - 1] === ' ' && str[i] !== ' ') {
        //         beginIndex = i;
        //     }
        // }

        // if (beginIndex > -1 && str[str.length - 1] !== ' ') {
        //     words.push(str.substring(beginIndex, str.length));
        // }

        // return words;



        str = str.match(/\b\S+\b/g);
        // str = str.match(/Vas/g);

        // str = str.replace(//g, '');
        // var n = str.search(/Vas/gi);
        // console.log(n)
        return str;


    }

    // function removeDuplicates(words) {
    //     var uniqueWords = [];

    //     for (var i = 0; i < words.length; i++) {
    //         var isUnique = true;

    //         for (var j = i + 1; j < words.length; j++) {
    //             if (words[i].toLowerCase() === words[j].toLowerCase()) {
    //                 isUnique = false;
    //                 break;
    //             }
    //         }

    //         if (isUnique) {
    //             uniqueWords.push(words[i]);
    //         }
    //     }

    //     return uniqueWords;

    // }

    
    /**
     * Remove dublicate words
     * 
     * @param {string} words Words to which the string is broken
     * @return {string} Unique words from all words
     */
    // function removeDuplicates (words) {
    //     var uniqueWords = [];

    //     for (var i = 0; i < words.length; i++) {
    //         uniqueWords.push(words[i]);

    //         for(var j = i + 1; j < words.length; j++) {
    //             if (words[i].toLowerCase() === words[j].toLowerCase()) {
    //                 uniqueWords.pop(words[j]);
    //             }
    //         }
    //     }

    //     return uniqueWords;
    // }
})(document, window);