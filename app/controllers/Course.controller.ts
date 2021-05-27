import CourseModel from '../models/course.model'
import { Icourse} from '../interfaces/course.interface'

class Course{

    async insert(req, res){
        try{

            console.log(JSON.stringify(req.body));
            
            
            const newCourse:Icourse = req.body;

            const result = await CourseModel.create(req.body)
            res.code(200).send({
                success : true,
                data : result,
                message : "Course Created !"
            })
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Failed !"
            })  
        }
    }

    async getAllCourses(req, res){
        try{
            const courses = await CourseModel.find();
            if(courses.length > 0){
                return res.code(200).send({
                    success : true,
                    data : courses,
                    message : "Course Found !"
                })
            }
            return res.code(404).send({
                success : false,
                data : [],
                message : "Course Not Found !"
            })
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Failed !"
            })  
        }
    }
    async getSingleCourseDetails(req, res){
        console.log(req.params.id);
        
        if(req.params.id == undefined){
            return res.code(403).send({
                success : false,
                data : [],
                message : "Please sent course id"
            })
        }
        try{
            const course = await CourseModel.findOne({_id: req.params.id});
            if(course != null){
                return res.code(200).send({
                    success : true,
                    data : course,
                    message : "Course Found !"
                })
            }
            return res.code(404).send({
                success : false,
                data : [],
                message : "Course Not Found !"
            })
        }catch(err){
            console.log(err);
            
            res.code(500).send({
                success : false,
                data : null,
                message : "Please sent valid param"
            })  
        }
    }
    async deleteCourseById(req, res){
        console.log(req.params.id);
        
        if(req.params.id == undefined){
            return res.code(403).send({
                success : false,
                data : [],
                message : "Please sent course id"
            })
        }
        try{
            const course = await CourseModel.findByIdAndDelete({_id: req.params.id});
            if(course != null){
                return res.code(200).send({
                    success : true,
                    data : null,
                    message : "Course deleted!"
                })
            }
            return res.code(404).send({
                success : false,
                data : [],
                message : "Course Not Found !"
            })
        }catch(err){
            console.log(err);
            
            res.code(500).send({
                success : false,
                data : null,
                message : "Please sent valid param"
            })  
        }
    }

}

export default new Course();