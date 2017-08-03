(function(document, window){
    var input = document.getElementById('txt');

    input.addEventListener("change", function(){
        var words = getWords(input.value);

        console.log('WORDS', words);
        words = removeDuplicates(words);
        console.log('Unique', words);
        // console.log(words[0] === words[1]);
        // var beginIndex = 0;
        // var lastIndex = 0;
        // var str = [];
        // var words = [];
        

        // for(var i = 0; i < input.value.length; i++) {

        //     if(input.value[i + 1] !== ' ' && beginIndex === 0) {
        //         beginIndex = i - 1;
        //     } else if(input.value[i] !== ' ' && input.value[i + 1] === ' ') {
        //         lastIndex = i;
        //     }
        // }
        // str += input.value.substring(beginIndex, lastIndex + 1);
        // words = str.split(' ');

        // console.log(words);
        // // Работает только если после последнего слова поставить пробел

        // var sameWords = '';

        // for (var i = 0; i < words.length; i++) {
        //     for(var j = i + 1; j < words.length; j++) {
        //         if(words[i] === words[j]) {
        //             if(words[j] === words[j+1]){
        //                 i += 1;
        //             } else {
        //                 sameWords += words[j];
        //             }
        //         }   
        //     }
        // }
        // console.log(sameWords);
        // // Когда слова повторяются больше 2-х раз и разные слова размещены не последовательно, происходит дичь
        
    });

    function getWords(str) {
        var beginIndex = str[0] === ' ' ? -1 : 0;
        var words = [];

        for (var i = 1; i < str.length; i++) {
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

    function removeDuplicates(words) {
        var uniqueWords = [];

        for (var i = 0; i < words.length; i++) {
            var isUnique = true;

            for (var j = i + 1; j < words.length; j++) {
                if (words[i].toLowerCase() === words[j].toLowerCase()) {
                    isUnique = false;
                    break;
                }
            }

            if (isUnique) {
                uniqueWords.push(words[i]);
            }
        }

        return uniqueWords;
    }
})(document, window);