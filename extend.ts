class king {
   public name: string;
   public age: number;
   public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public say(){
        console.log("hello")
    }
}

let kingcando:king = new king('kingcando',18,'web')

console.log(kingcando)
kingcando.say()