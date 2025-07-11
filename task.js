const mg = require("mongoose")
// S:1
mg.connect("mongodb://127.0.0.1:27017/Man004").then(()=>{
    console.log("Connect")
}).catch((err)=>{console.error(err)})
mg.pluralize(null)

//S:2
const myschema = new mg.Schema({
    name:{type:String},
    surname:String,
    age:Number,
    data:{type:Date,default:new Date()}
});

//S:3
const data = new mg.model("person",myschema)

// syn method
// const personData = new data({name:"Man",surname:"Gajjar",age:30})
// personData.save()

// const personData1 =  new data({name:"Yash",surname:"Gajjar",age:20})
// personData1.save()

// 2nd Mothod (asyn method)
// const createdoc = async()=>{
//     try{
//         const persondata = new data({name:"Parth",surname:"patel",age:25})
//         const result = await persondata.save()
//         console.log(result)
//     }
//     catch{
//         error.log("error")
//     }
// }
// createdoc()


const createdoc = async()=>{
    try{
        const persondata = new data({name:"Rudra",surname:"prajapati",age:12})
        const persondata1 = new data({name:"Raj",surname:"patel",age:72})
        const persondata2 = new data({name:"OM",surname:"patel",age:19})

        const result = await data.insertMany([persondata,persondata1,persondata2])
        console.log(result)
    }
    catch{
        error.log("error")
    }
}
createdoc()