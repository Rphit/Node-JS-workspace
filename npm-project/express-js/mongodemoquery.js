

const mongoose=require('mongoose');

//get connection
async function run() {
    mongoose.connect('mongodb://localhost/mongo-exercises',{useNewUrlParser:true}).then(function () {
        console.log('connected to mongo');
    }).catch(reason => {
        console.error('cant connect'+reason);
    });
}
/*run().then(function () {
    console.log('run called');arewwd
}).catch(reason=> {
    console.error('error'+reason);
});*/
//create schema and model
const courseSchema=new mongoose.Schema({
    tags:[String],
    date:{type:Date,default:Date.now()},
    name:[String],
    author:String,
    isPublished:Boolean,
    price:Number
});

const Course=mongoose.model('Course',courseSchema);


//get all courses
async function getAllCourses() {
    console.log(' Get all courses');
    const  courses=await Course.find().sort({author:1});
    console.log(courses);
}
// getAllCourses().then(function () {
//
// }).catch(reason => {
//     console.error(reason);
// });

//get name and author where ispublished is true and tags = backend
async function queryOne() {
    console.log('1. get name and author where ispublished = true and tags = backend ');
    const result= await Course.find({isPublished:true,tags:'backend'}).sort({name:1}).select({name:1,author:1});
    console.log(result);
}
// queryOne().then(function () {
//
// }).catch(reason => {
//     console.error(reason);
// });
async function queryTwo() {

    const result= await Course
        .find({isPublished:true})
        .or([{tags:'frontend'},{tags:'backend'}])
        .sort('-price')
        .select('name author price');
    console.log(result);
}
queryTwo().then(function () {

}).catch(reason => {
    console.error(reason);
});