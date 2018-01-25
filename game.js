
const store = {
    dims: {
        width: 20,
        height: 20,
    },
    filledCells: [],
};

function populateCells(cellsArray = []) {
    store.filledCells = cellsArray;
}

function reset() {
    store.filledCells = [];
}

const array = new Array(20).fill();

const allCells = [];

array.forEach((a, x) => {
    array.forEach((b, y) => {
        allCells.push({
            x: x + 1,
            y: y + 1,
        });
    });
});



function addCells() {
    const filledCellStrings = store.filledCells.map((c) => JSON.stringify(c));
    allCells.forEach((cell) => {
        const filledCellIndex = filledCellStrings.indexOf(JSON.stringify(cell));

        // landed on a filled cell
        if (filledCellIndex > -1) {
            store.filledCells.forEach((mainCell) => {
                const filledNeighbours = store.filledCells.filter((otherCell) => {
                    const xDiff = Math.abs(mainCell.x - otherCell.x);
                    const yDiff = Math.abs(mainCell.y - otherCell.y);

                    const isSelf = (xDiff + yDiff === 0);

                    const isNeighbour = (xDiff <= 1 && yDiff <= 1);
                    return !isSelf && isNeighbour;
                });

                console.log('filledNeighbours:', filledNeighbours);


                if (filledNeighbours.length >= 3) {
                    store.filledCells.push(cell);
                }
            });
        }
    });
}

function removeCells() {
    store.filledCells = store.filledCells.filter((mainCell) => {
        const filledNeighbours = store.filledCells.filter((otherCell) => {
            const xDiff = Math.abs(mainCell.x - otherCell.x);
            const yDiff = Math.abs(mainCell.y - otherCell.y);

            const isSelf = (xDiff + yDiff === 0);
            const isNeighbour = (xDiff <= 1 && yDiff <= 1);

            return !isSelf && isNeighbour;
        });

        // console.log('mainCell:', mainCell);
        // console.log('neighbours:', neighbours);
        // console.log('=============================');

        if (filledNeighbours.length <= 1) {
            return false;
        }

        if (filledNeighbours.length >= 4) {
            return false;
        }

        return true;
    });
}

module.exports = {
    store,
    populateCells,
    removeCells,
    addCells,
    reset,
};
