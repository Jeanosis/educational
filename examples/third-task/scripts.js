(function(document, window){
    var input = document.getElementById('txt');

    input.addEventListener("change", function(){
        
        var beginIndex = 0;
        var lastIndex = 0;
        var str = [];
        var words = [];

        for(var i = 0; i < input.value.length; i++) {

            if(input.value[i + 1] !== ' ' && beginIndex === 0) {
                beginIndex = i - 1;
            } else if(input.value[i] !== ' ' && input.value[i + 1] === ' ') {
                lastIndex = i;
            }
        }
        str += input.value.substring(beginIndex, lastIndex + 1);
        words = str.split(' ');

        console.log(words);
        // Работает только если после последнего слова поставить пробел

        var sameWords = '';

        for (var i = 0; i < words.length; i++) {
            for(var j = i + 1; j < words.length; j++) {
                if(words[i] === words[j]) {
                    if(words[j] === words[j+1]){
                        i += 1;
                    } else {
                        sameWords += words[j];
                    }
                }   
            }
        }
        console.log(sameWords);
        // Когда слова повторяются больше 2-х раз и разные слова размещены не последовательно, происходит дичь
        
    });

})(document, window);