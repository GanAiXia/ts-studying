class xjj {
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log("hello")
    }
}

let zxjj:xjj = new xjj('fbb',18)
console.log(zxjj)
zxjj.say() 