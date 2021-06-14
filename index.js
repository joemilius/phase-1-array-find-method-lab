function superbowlWin(record){  
    let chiefsWins = record.find(superbowlObject => superbowlObject.result === 'W')
    console.log(chiefsWins)
    if (chiefsWins){
        return chiefsWins.year
    }
}    


// function superbowlWin(array) {
//     return (array.find(array => array.result === "W"));
// //     if (win){
// //         return Object.values(win);
// //     }     
//    } 