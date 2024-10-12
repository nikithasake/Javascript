var User = function(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function(){
        console.log(`In the user function ${firstName}`)
    }
}
User.prototype.getLastName = function(){
    console.log(`Getting my last name using Prototype : ${this.lastName}`)
}
var nikki = new User("Nikki", "Sake")

nikki.getName()//In the user function Nikki
nikki.getLastName()//Getting my last name using Prototype : Sake

var prashuu = new User("Prashuu", "Puvvada")

prashuu.getName()//In the user function Prashuu
prashuu.getLastName()//Getting my last name using Prototype : Puvvada