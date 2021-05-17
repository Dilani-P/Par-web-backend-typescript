import UserController from '../controllers/User.controller'

export default function handler(server, options, next){

  const createBodyValidation = {
    type: 'object',
    properties: {
      firstname: { type: 'string' },
      lastname: { type: 'string' },
      role: { type: 'string' },
      password: { type: 'string' }
    },
    required: [
      'firstname', "lastname" , 
      'password'
    ]
  }

  const updateBodyValidation = {
    type: 'object',
    properties: {
      firstname: { type: 'string' },
      lastname: { type: 'string' },
      role: { type: 'string' },
      password: { type: 'string' }
    },
    required: [
      'firstname', "lastname" , 
      'password'
    ]
  }
  const createSchema = {
    body: createBodyValidation
  }
  const updateSchema = {
    body: updateBodyValidation
  }

    //create new user
    server.route({
        method : "POST" ,
        url : '/',
        schema : createSchema,
        handler : UserController.insert
    })  

    //get all users list
    server.route({
        method : "GET" ,
        url : '/',
        handler : UserController.getAllUsers
    })  

    //get single user by id 
    server.route({
        method : "GET" ,
        url : '/:id',
        handler : UserController.getSingleUser
    })  

    //update user by id 
    server.route({
        method : "PUT" ,
        url : '/:id',
        schema : updateSchema,
        handler : UserController.update
    }) 

    //delete user by id 
    server.route({
        method : "DELETE" ,
        url : '/:id',
        handler : UserController.delete
    })  

    next();
}

