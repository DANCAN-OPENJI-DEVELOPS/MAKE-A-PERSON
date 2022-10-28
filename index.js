const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  //let [firstName, secondName] = firstAndLastName.split(" ");
  let myNames = firstAndLast;
 // console.log(firstName)
  //console.log(secondName)
  this.getFullName = function() {
    return myNames;
  };
  this.getFirstName = function() {
    //console.log([firstName, secondName])
   // return firstName.split(" ")[0];
    return myNames.split(" ")[0];
  }
  this.getLastName = function() {
   // const [firstName, secondName] = firstAndLastName.split(" ")
   return myNames.split(" ")[1]
  }
  this.setFullName = function(firstAndLast) {
    //console.log([firstName, secondName])
   // const [firstName, secondName] = firstAndLastName.split(" ");
     myNames = firstAndLast
  }
  this.setFirstName = function(first) {
     myNames = first + " " + myNames.split(" ")[1];
  }
  this.setLastName = function (last) {
    myNames = myNames.split(" ")[0] + " " + last
  } 
  //return firstAndLastName;
   };

var bob = new Person("Bob Ross");
bob.getFullName();
