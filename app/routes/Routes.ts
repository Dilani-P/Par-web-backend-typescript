import UserRouter from './User.route'
import CourseRouter from './Course.route'
import OrgUserRouter from './OrgUser.route'

export default function handler(server, options, next){
    
    server.register(UserRouter , { prefix : "/users" })
    server.register(CourseRouter , { prefix : "/courses" })
    server.register(OrgUserRouter , { prefix : "/orguser" })
    next();
}

