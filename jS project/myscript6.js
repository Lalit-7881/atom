var firstname = prompt("First name please")
var lastname = prompt("last name plsease ")
var age = prompt("how old you are ?")
var petname = prompt ("what is your pet name ?")
var height= prompt("what is you height ?")
alert("THANK YOU  SO MUCH FOR INFORMATION !")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond =null;


if (firstname[0]===lastname[0]){
  nameCond= true;
}else{
  nameCond= false;
}



if (age >20 && age <30){
  ageCond= true;
}else{
  ageCond= false;
}

if(height >170) {
  heightCond= true;
}else {
  heightCond = false;
}

if (petname[petname.length-1] === "y") {
  petCond = true;
}else {
  petCond= false;
}

  if(nameCond && ageCond && heightCond && petCond) {
    console.log("Welcome Spy");
    alert("welcome!")
  }else{
    console.log("you are not spy");
    alert("you are not spy")
  }
