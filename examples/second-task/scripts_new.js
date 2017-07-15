(function(document, window){
    let table = document.querySelector('#table');
    let rows = table.querySelectorAll('tr');
    let sum = [];

    for (let row of rows) {
        let columns = row.querySelectorAll('td');

        columns.forEach((column, i) => {
            let cell = parseFloat(column.innerHTML);

            cell = isNaN(cell) ? 0 : cell;            
            if (i >= sum.length) {
                sum.push(cell);
            } else {
                sum[i] += cell;
            }
        });
    }

    for(var i = 0; i < sum.length; i++) {
        var td = document.createElement('td');
        document.getElementById('results').appendChild(td);
        td.innerHTML = sum[i];
    }
    console.log('SUM', sum);
})(document, window);