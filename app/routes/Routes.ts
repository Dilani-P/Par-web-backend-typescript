import UserRouter from './User.route'
import CourseRouter from './Course.route'

export default function handler(server, options, next){
    
    server.register(UserRouter , { prefix : "/users" })
    server.register(CourseRouter , { prefix : "/courses" })
    next();
}

