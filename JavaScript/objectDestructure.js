const course={
    coursename:"js series",
    fee:100,
    duration:6
}

console.log(`Accessing coursename Using dot notation : ${course.coursename}` );

//using de-structuring of object
const {coursename,fee}=course;
console.log(`Accessing coursename Using de-structure of object : ${coursename} :${fee} ` );

