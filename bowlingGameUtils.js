
const score = (Rolls) => {
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

