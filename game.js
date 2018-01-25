
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

function reset() {
    store.filledCells = [];
}

function next() {
    store.filledCells = store.filledCells.filter((mainCell) => {
        const neighbours = store.filledCells.filter((otherCell) => {
            const xDiff = Math.abs(mainCell.x - otherCell.x);
            const yDiff = Math.abs(mainCell.y - otherCell.y);

            const isSelf = (xDiff + yDiff === 0);
            const isNeighbour = (xDiff <= 1 && yDiff <= 1);

            return !isSelf && isNeighbour;
        });

        // console.log('mainCell:', mainCell);
        // console.log('neighbours:', neighbours);
        // console.log('=============================');

        if (neighbours.length <= 1) {
            return false;
        }


        if (neighbours.length >= 4) {
            return false;
        }

        return true;
    });
}

module.exports = {
    store,
    populateCells,
    next,
    reset,
};
