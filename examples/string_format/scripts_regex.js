(function(document, window){
    var input = document.getElementById('txt');


    //task 1
    var str = "hello hello Hello sdasd asda sd as",
        regexp = /(\bhello\b([^a-z]+)?){2,}/gi;
    
    str = str.match(regexp);

    console.log('task 1:', str[0]);

    //task 2
    str = "Hello      hello; - hello";
    str = str.replace(/([^a-z]+)/gi, ', ');

    console.log('task 2:', str);

    //task 3
    str = ' sda sd a hello Hello fasfasf hello';
    regexp = /hello/i;
    str = str.match(regexp);

    console.log('task 3:', str[0]);

    
})(document, window);