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
    let res = document.createElement('tr');
    for (let i of sum) {
        let td = document.createElement('td');
        table.appendChild(res);
        res.appendChild(td);
        td.innerHTML = i;
    }
    console.log('SUM', sum);
})(document, window);