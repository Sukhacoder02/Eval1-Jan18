const getScore = (Rolls) => {

    let length = Rolls.length;
    if(!Array.isArray(Rolls)) {
        throw new Error('Input is not an array');
    }
    if(length !== 20 && length !== 21){
        throw new Error('Not a 10-frame game');
    }

    
    let frames = [];
    let i =0;
    for(i=0;i<=16;i+=2) {
        let first = Rolls[i];
        let second = Rolls[i+1];
        if(first === 10 || first + second == 10) {
            frames.push([first,second,Rolls[i+2]]);
        } else if(first + second < 10) {
            frames.push([first,second]);
        }
    }
    if(Rolls[i] === 10 || Rolls[i] + Rolls[i+1] === 10) {
        // Rolls[i+2] is fill ball
        frames.push([Rolls[i],Rolls[i+1],Rolls[i+2]]);
    } else if(Rolls[i] + Rolls[i+1] < 10){
        frames.push([Rolls[i],Rolls[i+1]]);
    }
    let score = 0;
    frames.forEach((frame) => {
        frame.forEach((pins)=> {
            score += pins;
        });
    });
    return score;
}

const getBestScore = (Games) => {
    if(!Array.isArray(Games)) {
        throw new Error('Input is not a 2d array');
    }
    let bestScore = 0;
    Games.forEach((game) => {
        let thisGameScore = getScore(game);
        if(thisGameScore > bestScore) {
            bestScore = thisGameScore;
        }
    });
    return bestScore;
}

const games = [
    [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
    [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
console.log(getBestScore(games))


module.exports = {getBestScore,getScore};