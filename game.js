
const store = {
    dims: {
        width: 50,
        height: 50,
    },
    filledCells: [],
}

function populateCells(cellsArray = []) {
    store.filledCells = cellsArray;
}

function checkForNeighbours(currentCell, otherCells) {

}

function next() {
    const deadCellIndexes = [];

    store.filledCells.forEach((mainCell, i) => {
        let totalNeighbours = 0;

        store.filledCells.forEach((otherCell, j) => {
            const xDiff = Math.abs(mainCell.x - otherCell.x);
            const yDiff = Math.abs(mainCell.y - otherCell.y);

            if (xDiff + yDiff === 0) return; // if self

            if (xDiff === 1 || yDiff === 1) {
                totalNeighbours++;
            }
        });

        if (totalNeighbours < 2) {
            deadCellIndexes.push(i);
        }
    });

    store.filledCells = store.filledCells.filter((cell, i) => {
        return deadCellIndexes.indexOf(i) === -1;
    });
}

module.exports = {
    store,
    populateCells,
    next,
}
