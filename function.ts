//TS函数
// function searchXiao(age:number):string {
//     return '找到了'+age+'的人'
// }

// var age:number = 18
// var result:string = searchXiao(age)
// console.log(result)

//可选参数加 ？
// function searchXiao(age:number,stature?:string):string {
    
//     let yy:string = ''
//     yy = '找到了' + age + '岁'
//     if (stature != undefined) {
//         yy = yy + stature
//     }

//     return yy + '的人'
// }

// var age:number = 18
// var result:string = searchXiao(age,'handsome')
// console.log(result)

//...参数
function searchXiao(...xuqiu:string[]):string {
    
    let yy:string = '找到'
    
    for (let i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i]
        if (i < xuqiu.length) {
            yy = yy + '、'
        }
    }
    yy = yy + '的人'
    return yy
}

var result:string = searchXiao('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result)