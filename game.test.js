const game = require('./game.js');

describe('For a space that is "populated":', () => {
    beforeEach(() => {
        game.reset();
    });

    test('Each cell with one or no neighbors dies, as if by solitude', () => {
        // 0000
        game.populateCells([
            {
                x: 10,
                y: 10,
            },
            {
                x: 10,
                y: 11,
            },
            {
                x: 10,
                y: 12,
            },
            {
                x: 10,
                y: 13,
            },
        ]);

        expect(game.store.filledCells.length).toBe(4);

        game.next();
        //  X00X
        expect(game.store.filledCells.length).toEqual(2);
        expect(game.store.filledCells[0]).toEqual({ x: 10, y: 11 });
        expect(game.store.filledCells[1]).toEqual({ x: 10, y: 12 });
    });

    test('Each cell with four or more neighbors dies, as if by overpopulation', () => {

        expect(game.store.filledCells).toEqual([]);

        // 00
        // 00
        // 00
        game.populateCells([
            {
                x: 10,
                y: 10,
            },
            {
                x: 10,
                y: 11,
            },
            {
                x: 10,
                y: 12,
            },
            {
                x: 11,
                y: 10,
            },
            {
                x: 11,
                y: 11,
            },
            {
                x: 11,
                y: 12,
            },
        ]);

        game.next();

        // 00
        // XX
        // 00
        expect(game.store.filledCells.length).toEqual(4);
        expect(game.store.filledCells[0]).toEqual({ x: 10, y: 10 });
        expect(game.store.filledCells[1]).toEqual({ x: 10, y: 12 });
        expect(game.store.filledCells[2]).toEqual({ x: 11, y: 10 });
        expect(game.store.filledCells[3]).toEqual({ x: 11, y: 12 });

        game.reset();

        // 0X0
        // 0X0
        // 0X0
        game.populateCells([
            {
                x: 10,
                y: 10,
            },
            {
                x: 10,
                y: 11,
            },
            {
                x: 10,
                y: 12,
            },
            // {
            //     x: 11,
            //     y: 10,
            // },
            // {
            //     x: 11,
            //     y: 11,
            // },
            // {
            //     x: 11,
            //     y: 12,
            // },
            {
                x: 12,
                y: 10,
            },
            {
                x: 12,
                y: 11,
            },
            {
                x: 12,
                y: 12,
            },
        ]);

        game.next();

        // XXX
        // 0X0
        // XXX
        expect(game.store.filledCells.length).toEqual(2);
        expect(game.store.filledCells[0]).toEqual({ x: 10, y: 11 });
        expect(game.store.filledCells[1]).toEqual({ x: 12, y: 11 });
    });

    test('Each cell with two or three neighbors survives', () => {
        expect(game.store.filledCells).toEqual([]);

        // X0X
        // 0X0
        // X0X
        game.populateCells([
            {
                x: 11,
                y: 10,
            },
            {
                x: 10,
                y: 11,
            },
            {
                x: 12,
                y: 11,
            },
            {
                x: 11,
                y: 12,
            },
        ]);

        game.next();

        expect(game.store.filledCells.length).toEqual(4);
    });
});
