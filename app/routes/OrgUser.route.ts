import OrganizationUserController from '../controllers/OrgUser.controller'

export default function handler(server, options, next){

    //create new Organization User
    server.route({
        method : "POST" ,
        url : '/',
        // schema : createSchema,
        handler : OrganizationUserController.insert
    })  
    
    
    next();
}