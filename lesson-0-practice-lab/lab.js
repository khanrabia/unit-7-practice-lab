module.exports.fellows = "awesome"
module.exports.food = "mac and cheese"
module.exports.favoriteSeason = "winter"


function getFavoriteNumber(){
    let favNum = 3;
    return favNum;
}

module.exports.getFavoriteNumber = getFavoriteNumber();
console.log(`Favorite Number: ${getFavoriteNumber}`)