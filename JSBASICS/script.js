/*
//decision making
var age=18;
if(age<18)
{
    console.log("minor");
}
else{ console.log("major");
}

//using ternary operator
age>=18?console.log("major"):console.log("minor");
*/

/*functions
function harshitha(firstName,lastName){
    console.log(firstName+" "+lastName);
}
harshitha('Harshi','Annadurai');
*/
//arrays-push-pop-unshift
/*
var names=["Harshitha","Krithi","Ankitha"];
console.log(names[2]);
names.push("akhila");

console.log(names);
names.pop();

console.log(names);
names.unshift("Ram");

console.log(names);

*/
//challenge two

/*

function tip(amount){
    var finalAm;
    if(amount<50){
        finalAm=(.2*amount);
        
    }
    else if(amount>=50 && amount<200)
    {
        finalAm=(.15*amount);
    }
    else if(amount>=200)
    {finalAm=(.1*amount);
    }
    return finalAm;
}

var restBills=[124,48,268];
var finalWithTip=[0,0,0];
var final=[0,0,0];
final[0]=tip(restBills[0]);
final[1]=tip(restBills[1]);
 final[2]=tip(restBills[2]);
finalWithTip[0]=final[0]+restBills[0];
finalWithTip[1]=final[0]+restBills[1];
finalWithTip[2]=final[0]+restBills[2];
console.log(final);

console.log(finalWithTip);

/*object creation*/

var myDetails={
    firstName:'Harshitha',
    lastName:'Annadurai',
    dob:1998,
    family:['harshitha','shreyas'],
    calcAge:function(dob){return 2019-dob;}
};
console.log(myDetails.firstName);
var z='dob';
console.log(myDetails[z]);
myDetails.dob=1997;
console.log(myDetails);

//object creation
var shiva=new Object();
shiva.firstName="deepthi";
console.log(shiva);

console.log("i am"+myDetails.calcAge(myDetails.dob)+" years old");