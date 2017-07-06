(function(document, window){
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");
    var sum = [];

    for(var i = 0; i < rows.length; i++) {
        var columns = rows[i].getElementsByTagName('td');

        for (var j = 0; j < columns.length; j++) {
            var cell = parseFloat(columns[j].innerHTML);

            if (isNaN(cell)) {
                continue;
            }
            
            if (j >= sum.length) {
                sum.push(cell);
            } else {
                sum[j] += cell;
            }
        }
    }

    console.log('SUM', sum);
})(document, window);