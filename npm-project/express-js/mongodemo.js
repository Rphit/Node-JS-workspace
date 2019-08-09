const mongoose=require('mongoose');
//step 1: create and establish connection
async function run() {
    mongoose.connect('mongodb://localhost/playground',{useNewUrlParser:true}).then(function () {
        console.log('connected to mingo');
    }).catch(reason => {
        console.error('cant connect'+reason);
    });
}

run().then(function () {
    console.log('run called');
}).catch(reason=> {
    console.error('error'+reason);
});
//step 2: create schema
const courseSchema=  new mongoose.
Schema({
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now()}

});
//step 3: create model

const Course=mongoose.model('Course',courseSchema);

//step 4: save it to db

const course=new Course({

    author:'rohit',
    tags:['javascript','backend']

});
course.save();