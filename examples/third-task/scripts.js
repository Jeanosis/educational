(function(document, window){
    var input = document.getElementById('txt');

    input.addEventListener("change", function(){
        console.clear();
        console.log(input.value);
        console.log(input.value.length);
        
        for (var i = 0; i < input.value.length; i++) {
            var symbol = input.value[i],
                words = [];

            if (symbol == ' ' && words == []) {
                i += 1;
            } else {
                var beginIndex = input.value.indexOf(symbol),
                    substring = input.value.substr(beginIndex, input.value.length);
                    words[i] = substring.split(' ');
            }
        }
        console.log(words);
    });


    // function getRGB(color) {
    //         var beginIndex = color.indexOf('('),
    //             substring = color.substring(beginIndex + 1, color.length - 1),
    //             colorParams = substring.split(', ');

})(document, window);