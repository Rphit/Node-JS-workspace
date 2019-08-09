const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then( () => console.log('connected to mongodb'))
.catch( err => console.error('could not connect to mongodb',err));

const authorSchema = new mongoose.Schema({

     name: String,
    bio: String,
    website: String

});

const Author = mongoose.model( 'Author',authorSchema);

const Course = mongoose.model( 'Course', new mongoose.Schema ({
    name: String
    })
);
async  function createCourse(name, author) {
    const courses = await Course.find();
    console.log(courses);
}

createCourse( 'node Course', new Author({ name:'Mosh'}));