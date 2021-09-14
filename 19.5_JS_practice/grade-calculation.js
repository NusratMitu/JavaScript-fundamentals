function gradeOf(number){
    if( (number>=1) && (number<=59))
        return "your grade is F";
    
    else if(number>=60 && number<=69 )
        return "your grade is D";
    
    else if(number>=70 && number<=79 )
        // console.log("your grade is C");
        return "your grade is C";

    else if(number>=80 && number<=89 )
        return "your grade is B";
    
    else if(number>=90 && number<=100 )
        return "your grade is A";
     
    else
        return "invalid input";
}

let myGrade = gradeOf(78);
console.log(myGrade);