



const mongoose = require('mongoose');

// step-1 establish connection
async function run() {
    mongoose.connect('mongodb://localhost/mongo-exercises',
        {useNewUrlParser:true}).then(function () {
        console.log('connected with mongo....');
    }).catch(reason => {
        console.log('problem connecting' + reason);
    })
};


// step-2 create schema
const courseSchema = new mongoose.Schema ({
    author: String,
    tags: [String],
    date: {
        type: Date, default: Date.now()
    },
    isPublished: Boolean
})


// step-3 create model
const Course  = mongoose.model('Course', courseSchema);

// step-4 save it to database
async function createCourse() {
    const course = new Course ({
        author: 'Smith',
        tags: ['mastering node js', 'backend'],
        isPublished: true
    })

    const result = await course.save();
    console.log(result);
}

// get data from database
//async function getCourses() {
  //  const courses = await Course.find({author: 'Smith'});
   // console.log(courses);
//}

run().then(function () {
    console.log("called run successfully");
}).catch(reason => {
    console.error(reason);
});

// createCourse().then(() => {
//     console.log("One course inserted successfully");
// }).catch((reason) => {
//     console.log("Error ", reason);
// })

getCourses().then(() => {

}).catch(reason =>  {
    console.log('Error : ', reason);
});



