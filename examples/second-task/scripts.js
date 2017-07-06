(function(document){
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");
    var elements = [];
    var sum = [];

    for(var i = 0; i < rows.length; i++) {
        if(elements.length <= i) {
            elements.push(rows[i]);

            for(var a = 0; a < rows.length; a++) {
                elements[i] += rows[i].getElementsByTagName("td");
            }
        }
        console.log(elements[i]);
    }

})(document);