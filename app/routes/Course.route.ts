import CourseController from '../controllers/Course.controller'

export default function handler(server, options, next){

    //create new course
    server.route({
        method : "POST" ,
        url : '/',
        // schema : createSchema,
        handler : CourseController.insert
    })  
    
    //get all courses list
    server.route({
        method : "GET" ,
        url : '/list',
        handler : CourseController.getAllCourses
        
    })  
    //get single course
    server.route({
        method : "GET" ,
        url : '/:id',
        handler : CourseController.getSingleCourseDetails
        
    })  
    //delete course
    server.route({
        method : "DELETE" ,
        url : '/:id',
        handler : CourseController.deleteCourseById
        
    })  

    next();
}