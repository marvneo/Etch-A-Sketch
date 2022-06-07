
makeGrid(9);
colorCells();

function makeGrid(cellPerSide) {

    const conContainer = document.getElementById('content')
    const grid = document.createElement('div');

    const gridWidth = 500;
    const gridHeight = 500;
    
    grid.style.width = `${gridWidth}px`;
    grid.style.height = `${gridHeight}px`;
    grid.style.border = '1px solid black';

    var cellSize = gridWidth/cellPerSide

    // creates rows
    for (let i = 0; i < cellPerSide; i++) {

        const row = document.createElement('div')
        row.id ='row'
        row.style.width = `${gridWidth}px`;
        row.style.height = `${cellSize}px`;

        // creates the cells
        for (let j = 0; j < cellPerSide; j ++) {

            const cell = document.createElement('div')
            cell.id ='cell'
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.border = '1px solid black;'
            cell.style.display = 'table-cell';
            
            row.appendChild(cell);
        }
        grid.appendChild(row);

    }
    conContainer.appendChild(grid);

}

function colorCells() {

    const cells = document.querySelectorAll('#cell')

    cells.forEach(cell => {
        cell.addEventListener('click', event => {
            cell.style.backgroundColor ='black';
        })
        
    })

}