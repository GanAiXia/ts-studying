// let reg1:RegExp = new RegExp("jspang")
// console.log(reg1)

// let reg2:RegExp = new RegExp("jspang",'gi')
// console.log(reg2)

// let reg3:RegExp = /jspang/
// console.log(reg3)
// let reg4:RegExp = /jspang/gi
// console.log(reg4)

// let reg:RegExp = /jspang/i
// let website:string = 'jspang.com'
// let res:boolean = reg.test(website)
// console.log(res)

let reg:RegExp = /jspang/i
let website:string = 'jspang.com'
console.log(reg.exec(website));
