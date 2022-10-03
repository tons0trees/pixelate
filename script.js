const myTable = document.getElementById("mainTable")

function makeRow(paramNum) {
    const newRow = document.createElement('tr');
    myTable.appendChild(newRow);

    for (let i=0; i<paramNum; i++) {
        const newCell = document.createElement('td');
        newRow.appendChild(newCell);
    }
}

const rowButton = document.getElementById('add-row')
rowButton.addEventListener('click', function(clickEvent) {
    makeRow(10);
});

myTable.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.matches('td')) {
        clickEvent.target.classList.toggle('red')
    }
})