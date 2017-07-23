(function(document, window){
    var input = document.getElementById('txt');

    input.addEventListener("change", function(){
        
        var beginIndex = 0;
        var lastIndex = 0;
        var words = [];

        for(var i = 0; i < input.value.length; i++) {

            if(input.value[i + 1] !== ' ' && beginIndex === 0) {
                beginIndex = i - 1;
            } else if(input.value[i] !== ' ' && input.value[i + 1] === ' ') {
                lastIndex = i;
            }
        }
        words += input.value.substring(beginIndex, lastIndex + 1);
        console.log(words.split(' '));
    });

})(document, window);