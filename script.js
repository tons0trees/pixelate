const myTable = document.getElementById("mainTable")
let myColor = 'red'

function makeRow(paramNum) {
    const newRow = document.createElement('tr');
    myTable.appendChild(newRow);

    for (let i=0; i<paramNum; i++) {
        const newCell = document.createElement('td');
        newRow.appendChild(newCell);
    }
}

const rowButton = document.getElementById('add-row')
rowButton.addEventListener('click', function() {
    makeRow(10);
});

const select = document.getElementsByTagName('select')[0]
select.addEventListener('change', function(event) {
    console.log(event.target.value)
    myColor = event.target.value
})

const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clearCanvas)
function clearCanvas() {
    const tableArray = myTable.children;
    for (let i=0; i<tableArray.length; i++) {
        const row = tableArray[i].children
        for (let j=0; j<row.length; j++) {
            row[j].classList = [];
        }
    }
}

function colorize(clickEvent) {
    if (clickEvent.target.matches('td')) {
        // console.log(clickEvent.target.classList)
        if (clickEvent.target.classList.length) {
            // console.log(clickEvent.target.classList)
            clickEvent.target.classList = []
        } else {
            clickEvent.target.classList.add(myColor)
        }
    } 
}

myTable.addEventListener('click', colorize)


document.addEventListener('mousedown', function(event) {
    myTable.addEventListener('mouseover', colorize);
})

document.addEventListener('mouseup', function(event) {
    myTable.removeEventListener('mouseover', colorize);
})
