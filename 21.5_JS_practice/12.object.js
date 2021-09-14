// 12. declare an object and change any property of that object.

let student = { name: 'jon', id: 10, address: 'chittagong' };

student.address = 'dhaka';        //1
student["address"] = 'barisal';   //2
var newAddress = 'address';       //3
student[newAddress] = 'chattogram';

console.log(student);