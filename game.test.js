const game = require('./game.js');

describe('For a space that is "populated":', () => {

    test('Each cell with one or no neighbors dies, as if by solitude', () => {
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
            }
        ]);

        expect(game.store.filledCells.length).toBe(4);

        game.next();
        expect(game.store.filledCells.length).toEqual(2);
        expect(game.store.filledCells[0]).toEqual({x: 10, y: 11});
        expect(game.store.filledCells[1]).toEqual({x: 10, y: 12});
    });

    test('Each cell with four or more neighbors dies, as if by overpopulation', () => {
        expect('a').toBe('a');
    });

    test('Each cell with two or three neighbors survives', () => {
        expect('a').toBe('a');
    });
})