
function makeGrid(cellPerSide) {

    const gridWidth = 500;
    const gridHeight = 500;
    
    const conContainer = document.getElementById('content')
    const grid = document.createElement('div');
    
    
    grid.style.width = `${gridWidth}px`;
    grid.style.height = `${gridHeight}px`;
    grid.style.border = '1px solid black';

    var cellSize = gridWidth/cellPerSide

    // creates rows
    for (let i = 1; i < cellPerSide; i++) {

        const row = document.createElement('div')
        row.id ='row'
        row.style.width = `${gridWidth}px`;
        row.style.height = `${cellSize}px`;
        row.style.border = '1px solid red';
        row.flexDirection = 'column';

        // creates the cells
        for (let j = 1; j < cellPerSide; j ++) {

            const cell = document.createElement('div')
            cell.id ='cell'
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
    
            row.appendChild(cell)
        }
        
        grid.appendChild(row)
    }
    conContainer.appendChild(grid)

}

makeGrid(16);
