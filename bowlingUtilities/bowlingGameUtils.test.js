
const {getBestScore,getScore} = require('./bowlingGameUtils.js');

const games = [
    [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
    [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
describe('Bowling Game Utilities:-',() => {
    // describe('getBestScore function:- ',() => {
    //     it('Should get the best score when input is a 2d array of numbers',() => {
    //         expect(getBestScore(games)).toEqual([90,30,16]);
    //     });
    //     it('Should throw an error when input is not a 2d array',() => {
    //         expect(()=>getScore('avc')).toThrow('Input is not a 2d array');
    //     })
    // });
    describe('getScore function:-', () => {
        it('Should get the score of the game when input is a array of numbers',() => {
            expect(getScore(games[0])).toBe(90);
        });
        it('Should get the score of the game when input is a array of numbers',() => {
            expect(getScore(games[2])).toBe(16);
        });
        it('Should throw an error when game is not a 10-frame game',() => {
            expect(()=>getScore([1,2,3,5])).toThrow('Not a 10-frame game');
        });
        it('Should throw an error when input is not an array',() => {
            expect(()=>getScore('avc')).toThrow('Input is not an array');
        })
    });
});