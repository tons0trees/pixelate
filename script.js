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
rowButton.addEventListener('click', function(clickEvent) {
    makeRow(10);
});

function colorize (clickEvent) {
    if (clickEvent.target.matches('td')) {
        console.log(clickEvent.target.classList)
        if (!clickEvent.target.classList.length) {
            console.log(select)
            clickEvent.target.classList.toggle(myColor)
        }
    } 

}

myTable.addEventListener('click', colorize)

const select = document.getElementsByTagName('select')[0]
select.addEventListener('change', function(event) {
    console.log(event.target.value)
    myColor = event.target.value
})
