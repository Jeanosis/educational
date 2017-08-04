(function(document, window){
    let input = document.getElementById('txt');

    input.addEventListener("change", function(){
        let words = getWords(input.value);

        console.log('WORDS', words);
        words = removeDuplicates(words);
        console.log('Unique', words);
    });

    /**
     * Take the words from the string
     * 
     * @param {string} str String with words
     * @return {string} Words to which the string is broken
     */
    function getWords(str) {
        let beginIndex = str[0] === ' ' ? -1 : 0;
        let words = [];

        for (let i = 1; i < str.length; i++) {
            if (beginIndex > -1 && str[i] === ' ') {
                words.push(str.substring(beginIndex, i));

                beginIndex = -1;
            } else if (str[i - 1] === ' ' && str[i] !== ' ') {
                beginIndex = i;
            }
        }

        if (beginIndex > -1 && str[str.length - 1] !== ' ') {
            words.push(str.substring(beginIndex, str.length));
        }

        return words;
    }

    /**
     * Remove dublicate words
     * 
     * @param {string} words Words to which the string is broken
     * @return {string} Unique words from all words
     */
    function removeDuplicates (words) {
        let uniqueWords = [];

        for (let i = 0; i < words.length; i++) {
            uniqueWords.push(words[i]);

            for(let j = i + 1; j < words.length; j++) {
                if (words[i].toLowerCase() === words[j].toLowerCase()) {
                    uniqueWords.pop(words[j]);
                }
            }
        }

        return uniqueWords;
    }

})(document, window);