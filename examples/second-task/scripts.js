(function(document, window){
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");
    var sum = [];

    for(var i = 0; i < rows.length; i++) {
        var columns = rows[i].getElementsByTagName('td');

        for (var j = 0; j < columns.length; j++) {
            var cell = parseFloat(columns[j].innerHTML);

            if (isNaN(cell)) {
                cell = 0;
            }

            if (j >= sum.length) {
                sum.push(cell);
            } else {
                sum[j] += cell;
            }
        }
    }
    for(var i = 0; i < sum.length; i++) {
        var td = document.createElement('td');
        document.getElementById('results').appendChild(td);
        td.innerHTML = sum[i];
    }
    console.log('SUM', sum);
})(document, window);