const friendsName = ['mushfiq', 'sakib', 1,'taskin', 'tamim'];
// const friendsName =[];

function perfectFriend(names) { 
   if( names.length == 0 ){
       return 'please give array elements';   
   }
   else 
   for( let name of names){
    if( typeof(name) != 'string'){
        return 'please enter string as input ';
    }
    else
    for(let name of names){
        if ( typeof(name) == 'string'){
            if(name.length == 5){
                return name;
            } 
    }
    return 'you don\'t have frinds whose name has five letter';
}
let friendName = perfectFriend(friendsName);
console.log(friendName);
