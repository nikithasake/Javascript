class Mobile {
    constructor(p, r){
        this.name = p
        this.ram = r
    }

    set priceSet(p){
        //The set method will take only one parameter
        if(p > 0){
            this.price = p
        }
        else{
            console.log("The price need to be above 0")
        }        
    }

    get getName(){
        //The get method will return n number of varibles, but don't take any parameters
        return this.name
    }

    mobileDetails(){
        console.log("Mobile: ",this.name,"\t price: ", this.price, "\t ram: ", this.ram)
    }
}

let mobile1 = new Mobile("Redmi", "6gb")

console.log(mobile1)//mobile { name: 'Redmi', ram: '6gb' }
mobile1.priceSet = 20000
console.log("setPrice: ", mobile1)//mobile { name: 'Redmi', ram: '6gb', price: 20000 }

console.log("getName: ",mobile1.getName)//getName:  Redmi

mobile1.mobileDetails()//Mobile:  Redmi   price:  20000   ram:  6gb