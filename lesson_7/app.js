// //truthy and falsy - выражения
// // falsy -> false, 0, '', "",``,undefined,null,NaN,-0,0n
// //7,8) begint symbol

// const element = '0'
// console.log(element ? 'true': 'false');

// //this
// const human = {
//     name: 'Aidana',
//     surname: 'Bekova',
//     age: 45,
//     isMarried: false,
//     address: {
//         city: 'Bishkek',
//         street: null
//     },
//     g: undefined,
//     // showInfo(){
//     //     console.log(`${human.name} ${human.surname}`);
//     //     console.log(`${this.name} ${this.surname}`);
//     // },
//     showInfo2(){
//         function info(){
//             console.log(`${this.name} ${this.surname}`);
//         }
//         info()
//     }
// }
// human.showInfo2()

//ООП
 class Animal {
    constructor(options){
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
        this.color = options.color
        this.voice = options.voice
    }

    voice(){
        console.log('i am animal');
    }
 }
 const dogByClass = new Animal({
    name: 'Шарик',
    age: 4,
    hasTail: false,
    color: 'brown'
 })
 console.log(dogByClass);
 
 class pigs extends Animal{
    constructor(options){
        super(options)
        this.hooves = options.hooves
    }
 }
 const peppa = new pigs({
    name:'peppa',
    age: 4,
    hasTail:true,
    hooves:4,
    color:'pink',
    voice: ' hru hru'
 })
 console.log(peppa);