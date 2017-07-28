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

        
    });

})(document, window);