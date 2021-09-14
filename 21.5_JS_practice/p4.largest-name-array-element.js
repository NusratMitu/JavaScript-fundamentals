//  array element length

const friendsName = ['mitu', 'jahan', 'nusrat'];

function bestfriend(names) {
    let largestName = names[0].length;
    for (let name of names) {

        if (name.length > largestName) {
            largestName = name.length;
            var friend = friendsName.indexOf(name);
            var friendName = friendsName[friend];
        }
    }
    return friendName;
}
let bestFrindName = bestfriend(friendsName);
console.log(bestFrindName);

